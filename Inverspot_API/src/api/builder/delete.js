/**
* @api {delete} /builder Eliminar Constructora.
* @apiVersion 0.1.0
* @apiName Eliminar Constructora
* @apiGroup Constructor
* @apiDescription Búsqueda de constructora por id para eliminar, al eliminar regresa los datos eliminados.
* @apiPermission admin
* @apiUse authHeaders
* @apiUse successDelete
* @apiUse errorsAPI
*
* @apiParamExample {json} Body
*   {
*     "_id": "58b02c0108215b5500830f8d",
*     "select": "-_id"
*   }
*
* @apiParam (Body) {String} [select] Establece los campos del documento para regresar.
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
  router.delete('/builder', (req, res) => {
    // Realiza una  búsqueda según el ID enviado en el body, para eliminar, como regresa los datos eliminados se puede establecer los campos con body.select
    Builder.findByIdAndRemove(req.body._id,req.body.select, (err, builder) => {

      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(builder)

    })
  })
}
