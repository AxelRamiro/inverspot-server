/**
* @api {post} /investment Crear Inversión.
* @apiVersion 0.1.0
* @apiName Crear Inversión
* @apiGroup Inversión
* @apiDescription Crea una nueva inversión, activa los correos notificadores y actualiza los el total de inversiónes vendidas de las propiedades.
* @apiPermission admin
* @apiUse authHeaders
* @apiUse success201
* @apiUse errorsAPI
*
* @apiParamExample {json} Body
*     {
*       "sharesNumber": 5,
*       "amount": 30000,
*       "investor": "58b02dea08215b5500830f8f",
*       "property": "58af12e33448780c37e1860f"
*     }
*
* @apiParam (Body) {Number} sharesNumber Número de inversiónes compradas.
* @apiParam (Body) {Number} amount Monto total de la inversión.
* @apiParam (Body) {String} investor Id del usuario inversor.
* @apiParam (Body) {String} property Id de la propiedad a la que se va invertir.
*
* @apiSuccessExample {json} 201 CREATED
*     {
*       "sharesNumber": 5,
*       "amount": 30000,
*       "investor": "58b02dea08215b5500830f8f",
*       "property": "58af12e33448780c37e1860f",
*       "_id": "58af906ff9a2b00e9ec1116b",
*       "updatedAt": "2017-02-21T19:55:04.625Z",
*       "createdAt": "2017-02-21T19:55:04.625Z",
*     }
* @apiSuccess (Success 201) {Object} investment Objeto con los datos de la inversión, como se encuentran guardados en la base de datos.
*/
module.exports = (router, Investment, Property, User, sendMail) => {

  router.post('/investment', (req, res) => {

    // Crea y guarda en la BD la nueva constructora.
    let investment = new Investment(req.body)
    investment.save((err, resInvestment) => {

      if (err) return res.status(500).send(err.message)
      // Busca la propiedad a la que se invertirá y actualiza las inversiónes vendidas.
      Property.findByIdAndUpdate(resInvestment.property, {
        $inc:{
          'dataSheet.sharesSold': resInvestment.sharesNumber
        }}, {new: true}, (err, resProperty)=>{

        if(err) return res.status(500).send(err.message)
        // Si tras la actualización el estatus de la propiedad puede cambiar a fondeada la actualiza.
        resProperty.status = (resProperty.dataSheet.totalShares > resProperty.dataSheet.sharesSold) ? 'available' : 'fund'
        resProperty.save()
        // Recupera los datos del usuario inversor y el asesor para notificar por correo.
        resInvestment.populate({
          path: 'investor',
          populate: {
            path: 'asesor'
          }
        }, (err, resPopulate) => {

          if(err) return res.status(500).send(err.message)
          // prepara los datos que seran usados por los templates de emails y renombra.
          let emailParams ={
            emailInvestor : resPopulate.investor.email,
            emailAsesor : resPopulate.investor.asesor.email,
            image : resProperty.image,
            title : resProperty.title,
            investAmount : resProperty.dataSheet.investAmount,
            estimatedTerm : resProperty.dataSheet.estimatedTerm,
            yieldInTime : resProperty.marketResearch.yieldInTime,
            sharesNumber : resPopulate.sharesNumber,
            amount : resPopulate.amount,
            nameInvestor : resPopulate.investor.name,
            telephoneInvestor : resPopulate.investor.telephone
          }

          // Envia el correo de notificación para el asesor y la conformación de inversión para el inversor.
          sendMail({to: emailParams.emailInvestor, subject: `Confirmación de nueva inversión en ${emailParams.title}`}, 'investment', emailParams, console.log)
          sendMail({to: emailParams.emailAsesor, subject: `Nueva inversión en ${emailParams.title}`}, 'admin_investment', emailParams, console.log)

          // Regresa la inversión creada sin datos de los usuarios ni de la propiedad, solo la referencia a su Id de cada uno.
          return res.status(201).send(resInvestment)
        })
      })
    })

  })

}
