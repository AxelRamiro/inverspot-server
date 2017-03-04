/**
* @api {get} /property Búsqueda de Propiedad.
* @apiVersion 0.1.0
* @apiName Búsqueda de Propiedad
* @apiGroup Propiedad
* @apiDescription Busca bajo criterios personalizados una propiedad,
* y regresa respuestas personalizada con querys (limit, sort ...) y select.
* Al realizar una búsqueda sin criterios devuelve todos los usuarios.
* @apiUse paramsFindQuery
* @apiUse errorsAPI
*
* @apiParamExample {json} Query
*   {
*     "select": "-_id title Description dataSheet"
*     "filter": '{"dataSheet.sharesSold":{ "$gt":1, "$lt":30 }, "status":"available"}',
*     "query": '{"limit":3, "sort":"-title"}'
*   }
*
* @apiSuccessExample {json} 200 OK
*    [
*    	{
*    		"title": "TECOH II",
*    		"dataSheet": {
*    			"investAmount": 100000,
*    			"estimatedTerm": 16,
*    			"sharesSold": 6,
*    			"totalShares": 26
*    		}
*    	},
*    	{
*    		"title": "San Juan",
*    		"dataSheet": {
*    			"investAmount": 100000,
*    			"estimatedTerm": 13,
*    			"sharesSold": 23,
*    			"totalShares": 29
*    		}
*    	},
*    	{
*    		"title": "Rumania",
*    		"dataSheet": {
*    			"estimatedTerm": 13,
*    			"investAmount": 100000,
*    			"sharesSold": 23,
*    			"totalShares": 30
*    		}
*    	}
*    ]
*/
module.exports = (router, Property) => {
  router.get('/property', (req, res) => {
    // Parsea los datos enviados por Query, en caso de no existir son sustituidos por null para no afectar en la búsqueda.
    let filter = req.query.filter ? JSON.parse(req.query.filter) : null
    let select = req.query.select || null
    let query = req.query.query ? JSON.parse(req.query.query) : null
    Property.find(filter,select,query,(err,property) => {
      if (err) return res.status(500).send(err.message)
      // regresa la respuesta de la busqueda, aun si no encuentra algo en la busqueda regresa []
      res.status(200).jsonp(property)
    })
  })
}
