/**
* @api {put} /builder Actualizar Constructora.
* @apiVersion 0.1.0
* @apiName Actualizar Constructora
* @apiGroup Constructor
* @apiDescription Búsqueda de constructora por id para actualizar.
* @apiPermission admin
* @apiUse authHeaders
* @apiUse successUpdate
* @apiUse errorsAPI
*
* @apiParamExample {json} Body
*     {
*       "_id" : "58b02c0108215b5500830f8d",
*       "completedWorks": 10,
*       "website": "www.google.com"
*     }
*
* @apiParam (Body) {String} _id Id de la constructora a actualizar, es necesario.
* @apiParam (Body) {String} [name] Nombre de la desarrolladora o constructora.
* @apiParam (Body) {Number} [yearsWork] Años de trabajo.
* @apiParam (Body) {Number} [completedWorks] Cantidad de trabajos completados.
* @apiParam (Body) {String} [website] Cantidad de trabajos completados.
*
* @apiSuccessExample {json} 200 OK
*     {
*     	"_id": "58b02c0108215b5500830f8d",
*     	"updatedAt": "2017-03-04T07:54:32.362Z",
*     	"createdAt": "2017-02-24T12:50:09.779Z",
*     	"name": "Desarrollador Inverspot",
*     	"yearsWork": 4,
*     	"completedWorks": 10,
*     	"website": "www.google.com"
*     }
*/
module.exports = (router, Builder) => {
  router.put('/builder', (req, res) => {

    // Busca mediante el ID de la constructora, utiliza el {new: true} para regresar los datos actualizados
    Builder.findByIdAndUpdate(req.body._id, req.body, {new: true},(err, builder) => {

      if (err)
        return res.status(500).send(err.message)
      res.status(200).jsonp(builder)
    })
  })
}
