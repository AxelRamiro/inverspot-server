/**
* @api {post} /builder Crear constructor.
* @apiVersion 0.1.0
* @apiName Crear constructor
* @apiGroup Constructor
* @apiDescription Crea un constructor, también nombrado desarrolladora o constructora.
* @apiPermission admin
* @apiUse authHeaders
* @apiUse success201
* @apiUse errorsAPI
*
* @apiParamExample {json} Body
*    {
*      "name": "Lorem AC",
*      "yearsWork": 5,
*      "completedWorks": 10,
*      "website": "www.google.com"
*    }
*
* @apiParam (Body) {String} name Nombre de la desarrolladora o constructora.
* @apiParam (Body) {Number} [yearsWork] Años de trabajo.
* @apiParam (Body) {Number} [completedWorks] Cantidad de trabajos completados.
* @apiParam (Body) {String} [website] Cantidad de trabajos completados.
*
* @apiSuccessExample {json} 201 CREATED
*    {
*      "name": "Lorem AC",
*      "yearsWork": 5,
*      "completedWorks": 10,
*      "website": "www.google.com",
*      "updatedAt": "2017-02-21T19:55:04.625Z",
*	     "createdAt": "2017-02-21T19:55:04.625Z",
*      "_id": "58ac9b18ebdcf116c6379fed"
*    }
* @apiSuccess (Success 201) {Object} builder Objeto con los datos de la constructora, como se encuentran guardados en la base de datos.
*/
module.exports = (router, Builder) => {
  router.post('/builder', (req, res) => {
    // Crea y guarda en la BD la nueva constructora.
    let builder = new Builder (req.body)
    builder.save ((err, resBuilder) => {
      if (err) return res.status(500).send(err.message)
      // Envia el objeto completo.
      res.status(201).jsonp(resBuilder)
    })
  })
}
