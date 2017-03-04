/**
* @api {delete} /work-progress Elimina Avance de Obra.
* @apiVersion 0.1.0
* @apiName Elimina Avance de Obra
* @apiGroup Avance
* @apiDescription Elimina un avance de obra mediante una busqueda de id.
* @apiPermission admin
* @apiUse authHeaders
* @apiUse successDelete
* @apiUse errorsAPI
*
* @apiParamExample {json} Body
*   {
*     "_id": "58af906ff9a2b00e9ec1116b"
*   }
*
* @apiSuccessExample {json} 200 OK
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
*/
module.exports = (router, WorkProgress) => {
  router.delete('/work-progress', (req, res) => {
  // Busca y elimina el documento que coincide con el Id, regresa los datos completos del documento a borrar.
    WorkProgress.findByIdAndRemove(req.body._id,req.body, (err, workProgress) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(workProgress)

    })
  })
}
