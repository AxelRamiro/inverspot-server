/**
* @api {get} /investment Búsqueda de Inversión.
* @apiVersion 0.1.0
* @apiName Búsqueda de Inversión
* @apiGroup Inversión
* @apiDescription Búsqueda de inversiones bajo criterios personalizados y respuestas personalizadas (sort, limit, select). Al realizar búsquedas sin criterios (filtros) devuelve todos los registros.
* @apiPermission admin
* @apiUse authHeadersQuery
* @apiUse paramsFindQuery
* @apiUse errorsAPI
*
* @apiParamExample {json} Query
*    {
*      "select" : "-_id sharesNumber amount",
*      "filter" : '{"amount":{ "$gt":5000, "$lt":100000 }}',
*      "query" : '{ "limit": 5, "sort":"-amount"}'
*    }
*
* @apiSuccessExample {json} 200 OK
*     [
*     	{
*     		"sharesNumber": 1,
*     		"amount": 50000
*     	},
*     	{
*     		"sharesNumber": 1,
*     		"amount": 50000
*     	},...
*     ]
*/
module.exports = (router, Investment) => {
  router.get('/investment', (req, res) => {

    // Parsea los datos enviados por Query, en caso de no existir son sustituidos por null para no afectar en la búsqueda.
    let filter = req.query.filter ? JSON.parse(req.query.filter) : null
    let select = req.query.select || null
    let query = req.query.query ? JSON.parse(req.query.query) : null

    // regresa la respuesta en arreglo de la búsqueda, aun si no encuentra algo en la búsqueda regresa []
    Investment.find(filter,select,query,(err,investment) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(investment)
    })
  })
}
