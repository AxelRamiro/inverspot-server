/**
* @api {delete} /investment Eliminar Inversión.
* @apiVersion 0.1.0
* @apiName Eliminar Inversión
* @apiGroup Inversión
* @apiDescription Búsqueda de inversiones por id para eliminar, a la par se actualizan las inversiones en las propiedades.
* @apiPermission admin
* @apiUse authHeaders
* @apiUse successDelete
* @apiUse errorsAPI
*
* @apiParamExample {json} Body
*     {
*       "_id": "58af906ff9a2b00e9ec1116b"
*     }
*
* @apiParam (Body) {String} _id Id de la inversión a eliminar.
*
* @apiSuccessExample {json} 200 OK
*     {
*       "sharesNumber": 5,
*       "amount": 30000,
*       "investor": "58b02dea08215b5500830f8f",
*       "property": "58af12e33448780c37e1860f",
*       "_id": "58af906ff9a2b00e9ec1116b",
*       "updatedAt": "2017-02-21T19:55:04.625Z",
*       "createdAt": "2017-02-21T19:55:04.625Z",
*     }
*/
module.exports = (router, Investment, Property) => {
  router.delete('/investment', (req, res) => {
    // Búsqueda por id para eliminar documento.
    Investment.findByIdAndRemove(req.body._id, (err, investment) => {

      if (err) return res.status(500).send(err.message)
      // si no se encuentra coincidencias del id regresa el error 404
      if (!investment) return res.status(404).send('NOT_FOUND')

      // Actualiza las inversiones vendidas de la propiedad, quitando el numero de acciones de la inversion eliminada.
      Property.findByIdAndUpdate(investment.property, {$inc:{'dataSheet.sharesSold': investment.sharesNumber * -1}},{new: true}, (err, resProperty)=>{
        if (err) return res.status(500).send(err.message)
        // Verifica el estado de la propiedad y actualiza el estado de la propiedad en caso de ser necesario.
        resProperty.status = (resProperty.dataSheet.totalShares > resProperty.dataSheet.sharesSold) ? 'available' : 'fund'
        resProperty.save()
        res.status(200).jsonp(investment)
      })
    })
  })
}
