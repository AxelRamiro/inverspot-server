/**
* @api {post} /work-progress Crear Avance de Obra.
* @apiVersion 0.1.0
* @apiName Crear Avance de Obra
* @apiGroup Avance
* @apiDescription Crea un avance de obra ligado a una propiedad.
* @apiPermission admin
* @apiUse authHeaders
* @apiUse fileHeaders
* @apiUse success201
* @apiUse errorsAPI
*
* @apiParamExample {json} File:
*     {
*       "photo": "/user/..."
*     }
*
* @apiParamExample {json} Body:
*     {
*       "year": 2015,
*       "month": "Junio",
*       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
*       "property": "58af906ff9a2b00e9ec1116b"
*     }
*
* @apiParam (Body) {File} photo Imagen del avance de obra.
* @apiParam (Body) {Number} year Año del avance.
* @apiParam (Body) {String} month Mes en que se realizó el avance.
* @apiParam (Body) {String} description Descripción del avance de obra.
* @apiParam (Body) {String} property Id de la propiedad a la que se le realizó el avance de obra.
*
* @apiSuccessExample {json} 201 CREATED
*     {
*       "year": 2015,
*       "month": "Junio",
*       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
*       "property": "58af906ff9a2b00e9ec1116b",
*       "_id": "58af906ff9a2b00e9ec1156t",
*       "updatedAt": "2017-02-21T19:55:04.625Z",
*       "createdAt": "2017-02-21T19:55:04.625Z",
*       "photo": "7637dfb5-fdc4-4e33-b5bd-f9671d0909da.jpg"
*     }
*
* @apiSuccess (Success 201) {Object} object Objeto con los datos del avance de obra, como se encuentran guardados en la base de datos.
* @apiSuccess (Success 201) {String} object.photo Nombre de la imagen como esta en el acceso público del servidor.
*/
module.exports = (router, WorkProgress, upload) => {
  router.post('/work-progress', upload.single('photo'), (req, res) => {
    // crea el documento con los datos que recibe en el body según el modelo definido.
    let workProgress = new WorkProgress (req.body)
    // si se envió un documento en este caso la foto, recupera el renombre para guardarlo.
    if (req.file) workProgress.photo = req.file.filename
    workProgress.save ((err, resWorkProgress) => {
      if (err) return res.status(500).send(err.message)
      // Envia el documento tal y como se guardó en la base de datos.
      res.status(201).jsonp(resWorkProgress)
    })
  })
}
