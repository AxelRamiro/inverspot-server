/**
* @api {put} /investment Actualizar Inversión.
* @apiVersion 0.1.0
* @apiName Actualizar Inversión
* @apiGroup Inversión
* @apiDescription Búsqueda de inversiones por id para actualizar sus parámetros, a la par se actualizan las inversiones en las propiedades.
* @apiPermission admin
*
* @apiParamExample {json} Body
*      {
*        "_id": "58af906ff9a2b00e9ec1116b",
*        "sharesNumber": 6,
*        "amount": 36000
*      }
*
* @apiParam (Body) {String} _id Id de la inversión a actualizar, es necesario.
* @apiParam (Body) {Number} [sharesNumber] Número de inversiones compradas.
* @apiParam (Body) {Number} [amount] Monto total de la inversión.
* @apiParam (Body) {String} [investor] Id del usuario inversor.
* @apiParam (Body) {String} [property] Id de la propiedad a la que se va invertir.
*
* @apiSuccessExample {json} 200 OK
*     {
*       "sharesNumber": 6,
*       "amount": 36000,
*       "investor": "58b02dea08215b5500830f8f",
*       "property": "58af12e33448780c37e1860f",
*       "_id": "58af906ff9a2b00e9ec1116b",
*       "updatedAt": "2017-02-21T19:55:04.625Z",
*       "createdAt": "2017-02-21T19:55:04.625Z",
*     }
*
* @apiSuccess (200 OK) {Object} invesment Objeto inversión, tal y como aparece en la base de datos.
* @apiSuccess (200 OK) {String} invesment.updatedAt Estampa de tiempo de la última actualización de los datos en la BD.
*
* @apiError (500) {String} Error  Mensaje de error del servidor, a la hora de actualizar la inversión.
* @apiError (404) {String} NOT_FOUND  El id de la inversión no coincide con ninguna en la base de datos.
*
* @apiErrorExample {String} 404
*     NOT_FOUND
*/
module.exports = (router, Investment, Property) => {
  router.put('/investment', (req, res) => {

    // Realiza una busqueda por Id, para hacer después las comparaciones de cambio.
    Investment.findById(req.body._id, (err, oldInvestment) => {
      if (err)return res.status(500).send(err.message)

      // En caso de que no fuera encontrada la inversión regresa un error 404.
      if (!oldInvestment) return res.status(404).send('NOT_FOUND')

      // Realiza la actualización de las inversión.
      Investment.findByIdAndUpdate(req.body._id, req.body, {new: true},(err, investment) => {

        if (err)return res.status(500).send(err.message)
        // Verifica de cuanto es la diferencia de inversiones para actualizar propiedad, si no hay cambio saldra 0
        let dif = investment.sharesNumber - oldInvestment.sharesNumber
        // actualiza las inversiones de la propiedad.
        Property.findByIdAndUpdate(investment.property, {$inc:{'dataSheet.sharesSold': dif }}, {new: true}, (err, resProperty) =>{
          if (err)return res.status(500).send(err.message)
          // verifica el estado de la propiedad y actualiza.
          resProperty.status = (resProperty.dataSheet.totalShares > resProperty.dataSheet.sharesSold) ? 'available' : 'fund'
          resProperty.save()

          //  Regresa los datos de la inversión actualizada.
          res.status(200).jsonp(investment)
        })
      })
    })
  })
}
