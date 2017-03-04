/**
* @api {get} /builder Búsqueda de Constructor.
* @apiVersion 0.1.0
* @apiName Búsqueda de Constructor
* @apiGroup Constructor
* @apiDescription Búsqueda de constructores bajo criterios personalizados y respuestas personalizadas (sort, limit, select). Al realizar búsquedas sin criterios (filtros) devuelve todos los registros.
*
* @apiParamExample {json} Query
*    {
*      "select" : "-_id name yearsWork",
*      "filter" : '{"completedWorks":{ "$gt":1, "$lt":30 }}',
*      "query" : '{ "limit": 5, "sort":"-name"}'
*    }
*
* @apiParam (Query) {String} [select] Nombre de los campos que se desea que regrese ejemplo [-_id name].
* @apiParam (Query) {String} [filter] Criterios de búsqueda, puede ser cualquier campo del usuario o un conjunto de ellos, se puede agregar operadores $or, $in, $and, $gt, $lt.
* @apiParam (Query) {String} [query] Criterios de respuesta, restringe y da formato a los campos de respuesta de la búsqueda usando los operadores [limit, sort, select].
*
* @apiSuccessExample {json} 200 OK
*     [
*     	{
*     		"name": "Desarrollador Inverspot",
*     		"yearsWork": 4
*     	}
*     ]
*
* @apiSuccess (200 OK) {Object[]} builder Lista de constructoras que coinciden con el filtro de búsqueda, regresado como fue solicitado con Query.
* @apiError (500) {String} Error  Mensaje de error del servidor, a la hora de buscar.
*/
module.exports = (router, Builder) => {
  router.get('/builder', (req, res) => {

    // Parsea los datos enviados por Query, en caso de no existir son sustituidos por null para no afectar en la búsqueda.
    let filter = req.query.filter ? JSON.parse(req.query.filter) : null
    let select = req.query.select || null
    let query = req.query.query ? JSON.parse(req.query.query) : null

    // regresa la respuesta en arreglo de la busqueda, aun si no encuentra algo en la busqueda regresa []
    Builder.find(filter,select,query,(err,builder) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(builder)
    })
  })
}
