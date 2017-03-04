/**
* @api {get} /builder Búsqueda de Constructor.
* @apiVersion 0.1.0
* @apiName Búsqueda de Constructor
* @apiGroup Constructor
* @apiDescription Búsqueda de constructores bajo criterios personalizados y respuestas personalizadas (sort, limit, select). Al realizar búsquedas sin criterios (filtros) devuelve todos los registros.
* @apiPermission admin
* @apiUse authHeadersQuery
* @apiUse paramsFindQuery
* @apiUse errorsAPI
*
* @apiParamExample {json} Query
*    {
*      "select" : "-_id name yearsWork",
*      "filter" : '{"completedWorks":{ "$gt":1, "$lt":30 }}',
*      "query" : '{ "limit": 5, "sort":"-name"}'
*    }
*
* @apiSuccessExample {json} 200 OK
*     [
*     	{
*     		"name": "Desarrollador Inverspot",
*     		"yearsWork": 4
*     	}
*     ]
*/
module.exports = (router, Builder) => {
  router.get('/builder', (req, res) => {

    // Parsea los datos enviados por Query, en caso de no existir son sustituidos por null para no afectar en la búsqueda.
    let filter = req.query.filter ? JSON.parse(req.query.filter) : null
    let select = req.query.select || null
    let query = req.query.query ? JSON.parse(req.query.query) : null

    // regresa la respuesta en arreglo de la búsqueda, aun si no encuentra algo en la búsqueda regresa []
    Builder.find(filter,select,query,(err,builder) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(builder)
    })
  })
}
