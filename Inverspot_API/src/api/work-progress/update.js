/**
* @api {put} /work-progress Actualizar Avance de Obra.
* @apiVersion 0.1.0
* @apiName Actualizar Avance de Obra
* @apiGroup Avance
* @apiDescription Actualizar un avance de obra mediante una búsqueda de id.
* @apiPermission admin
* @apiUse authHeaders
* @apiUse fileHeaders
* @apiUse successUpdate
* @apiUse errorsAPI
*
* @apiParamExample {json} File:
*     {
*       "photo": "/user/..."
*     }
*
* @apiParamExample {json} Body
*     {
*       "year": 2016,
*       "month": "Marzo",
*       "_id": "58af906ff9a2b00e9ec1156t"
*     }
*
* @apiParam (Body) {String} _id Id del avance de obra que se actualizará.
* @apiParam (Body) {File} photo Imagen del avance de obra.
* @apiParam (Body) {Number} year Año del avance.
* @apiParam (Body) {String} month Mes en que se realizó el avance.
* @apiParam (Body) {String} description Descripción del avance de obra.
* @apiParam (Body) {String} property Id de la propiedad a la que se le realizó el avance de obra.
*
* @apiSuccessExample {json} 200 OK
*     {
*       "year": 2016,
*       "month": "Marzo",
*       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
*       "property": "58af906ff9a2b00e9ec1116b",
*       "_id": "58af906ff9a2b00e9ec1156t",
*       "updatedAt": "2017-02-21T19:55:04.625Z",
*       "createdAt": "2017-02-21T19:55:04.625Z",
*       "photo": "7637dfb5-fdc4-4e33-b5bd-f9671d0909da.jpg"
*     }
*
* @apiSuccess (Success 200) {String} Object.photo Nombre de la imagen como esta en el acceso público del servidor.
*/
module.exports = (router, WorkProgress, upload) => {
  router.put('/work-progress', upload.single('photo'), (req, res) => {
    // Recupera los datos enviados en la petición.
    let workProgress = req.body
    // verifica si se envio un archivo y recupera el nombre
    if (req.file) workProgress.photo = req.file.filename
    // Busca y actualiza por Id el avance de obra, regresa el documento actualizado
    WorkProgress.findByIdAndUpdate(workProgress._id, workProgress, {new: true},(err, resWorkProgress) => {

      if (err)
        return res.status(500).send(err.message)
      res.status(200).jsonp(resWorkProgress)
    })
  })
}
