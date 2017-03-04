/**
* @api {delete} /property Eliminar Propiedad.
* @apiVersion 0.1.0
* @apiName Eliminar Propiedad
* @apiGroup Propiedad
* @apiDescription Elimina una propiedad en base a su id.
* @apiPermission admin
* @apiUse authHeaders
* @apiUse successDelete
* @apiUse errorsAPI
*
* @apiParamExample {json} Body
*   {
*     "_id": "58b02dea08215b5500830f8f"
*   }
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
*           "estimatedTerm": 18,
*           "totalShares": 20,
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
*/
module.exports = (router, Property) => {
  router.delete('/property', (req, res) => {
    // Busca y elimina el documento que coincide con el Id, regresa los datos completos del documento a borrar.
    Property.findByIdAndRemove(req.body._id,req.body, (err,property) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(property)
    })
  })
}
