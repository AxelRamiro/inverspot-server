/**
* @api {put} /property Actualizar Propiedad.
* @apiVersion 0.1.0
* @apiName Actualizar Propiedad
* @apiGroup Propiedad
* @apiDescription Actualizar una propiedad en base a su id.
* @apiPermission admin
* @apiUse authHeaders
* @apiUse fileHeaders
* @apiUse successUpdate
* @apiUse errorsAPI
*
* @apiParamExample {json} File:
*     {
*       "image": "/user/..."
*     }
*
* @apiParamExample {json} Body
*     {
*       "dataSheet": {
*           "investAmount": 12000,
*           "estimatedTerm": 24,
*           "totalShares": 25,
*           "sharesSold": 10
*       },
*       "_id": "58af906ff9a2b00e9ec1116b",
*     }
*
* @apiParam (Body) {String} _id Id de la propiedad.
* @apiParam (Body) {String} [title] Título de la propiedad, es necesario pues es como el usuario la identificara.
* @apiParam (Body) {String} [description] Descripción de la propiedad.
* @apiParam (Body) {Object} [address] Objeto que contiene los datos de direccion y ubicacion de la propiedad.
* @apiParam (Body) {String} [address.street] Nombre de la calle.
* @apiParam (Body) {Number} [address.number] Número de la propiedad.
* @apiParam (Body) {String} [address.suburb] Nombre de la Colonia.
* @apiParam (Body) {String} [address.city] Nombre de la ciudad.
* @apiParam (Body) {Number} [address.zipCode] Codigo postal.
* @apiParam (Body) {String} [address.coordinates] Coordenadas (latitud, longitud).
* @apiParam (Body) {String} [builder] Id de la Constructora a cargo.
* @apiParam (Body) {String} [status] =available Estado de la propiedad [available, fund].
* @apiParam (Body) {Object} [dataSheet] Objeto de la información de ficha técnica.
* @apiParam (Body) {Number} [investAmount] Valor de cada inversión.
* @apiParam (Body) {Number} [estimatedTerm] Tiempo estimado en meses.
* @apiParam (Body) {Number} [totalShares] Total de participaciones de la propiedad.
* @apiParam (Body) {Number} [sharesSold] Participaciones vendidas.
* @apiParam (Body) {Object} [marketResearch] Objeto de información del estudio de mercado (costo total, precio estimado de venta, comisión por venta, utilidad y etc...)
* @apiParam (Body) {Object} [fixedData] Objeto con los datos fijos de la propiedad. (Objetivo de captación, rendimiento anual y utilidad esperada).
* @apiParam (Body) {Object} [capitalOutflow] Objeto con la información de la corrida financiera. (costo total, precio estimado de venta, comisión ...).
* @apiParam (Body) {Object} [supplementaryData] Objeto con información complementaria, que se visualizará en una tabla dinámica, se guardan en arreglos.
*
* @apiSuccessExample {json} 200 OK
*     {
*       "title": "Property Lorem",
*       "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
*       "address": {
*           "street": "Lorem ipsum",
*           "number": 122,
*           "suburb": "Dolor sit amet",
*           "city": "Lorem",
*           "zipCode": 451245,
*           "cordinates": "92.1212544,-45.166546"
*       },
*       "builder": "58ac9b18ebdcf116c6379fed",
*       "status": "available",
*       "dataSheet": {
*           "investAmount": 12000,
*           "estimatedTerm": 24,
*           "totalShares": 25,
*           "sharesSold": 10
*       },
*       "marketResearch": {...},
*       "fixedData": {...},
*       "capitalOutflow": {...},
*       "supplementaryData": [...],
*       "_id": "58af906ff9a2b00e9ec1116b",
*       "updatedAt": "2017-02-21T19:55:04.625Z",
*       "createdAt": "2017-02-21T19:55:04.625Z",
*       "image": "7637dfb5-fdc4-4e33-b5bd-f9671d0909da.jpg"
*     }
*
* @apiSuccess (Success 200) {String} Object.image Nombre de la imagen como esta en el acceso público del servidor.
*/
module.exports = (router, Property, upload) => {
  router.put('/property', upload.single('image'), (req, res) => {
    let property = JSON.parse(req.body.property)
    if (req.file) property.image = req.file.filename
    property.status = (property.dataSheet.totalShares > property.dataSheet.sharesSold) ? 'available' : 'fund'
    Property.findByIdAndUpdate(property._id, property, {new: true},(err, resProperty) => {

      if (err)
        return res.status(500).send(err.message)
      res.status(200).jsonp(resProperty)
    })
  })
}
