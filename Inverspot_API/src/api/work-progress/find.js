/**
* @api {get} /work-progress Búsqueda de Avance de Obra.
* @apiVersion 0.1.0
* @apiName Búsqueda de Avance de Obra
* @apiGroup Avance
* @apiDescription Busca bajo criterios personalizados un avance de obra,
* y regresa respuestas personalizada con querys (limit, sort ...) y select.
* Al realizar una búsqueda sin criterios devuelve todos los usuarios.
* @apiUse paramsFindQuery
* @apiUse errorsAPI
*
* @apiParamExample {json} Query
*   {
*     "select": "-_id -property"
*     "filter": '{"year":{ "$gt":2015 }}',
*     "query": '{"limit":3, "sort":"-month"}'
*   }
*
* @apiSuccessExample {json} 200 OK
*   [
*   	{
*   		"updatedAt": "2017-02-28T03:18:30.492Z",
*   		"createdAt": "2017-02-28T03:18:30.492Z",
*   		"photo": "e56f961c-c57e-4a79-9bce-17c78b32d151.PNG",
*   		"month": "Mayo",
*   		"year": 2016,
*   		"description": "Segundo avance de obra"
*   	},
*   	{
*   		"updatedAt": "2017-02-28T03:18:48.742Z",
*   		"createdAt": "2017-02-28T03:18:48.742Z",
*   		"photo": "91f35f6f-c85f-4029-868b-5d30d79383f1.PNG",
*   		"month": "Junio",
*   		"year": 2017,
*   		"description": "Tercer avance de obra"
*   	}
*   ]
*/
module.exports = (router, WorkProgress) => {
  router.get('/work-progress', (req, res) => {
    // Parsea los datos enviados por Query, en caso de no existir son sustituidos por null para no afectar en la búsqueda.
    let filter = req.query.filter ? JSON.parse(req.query.filter) : null
    let select = req.query.select || null
    let query = req.query.query ? JSON.parse(req.query.query) : null
    // regresa la respuesta de la busqueda, aun si no encuentra algo en la busqueda regresa []
    WorkProgress.find(filter,select,query,(err,workProgress) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(workProgress)
    })
  })
}
