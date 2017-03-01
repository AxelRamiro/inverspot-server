/**
* @api {get} /user Búsqueda de usuarios.
* @apiVersion 0.1.0
* @apiName búsqueda
* @apiGroup Usuario
* @apiDescription Busca bajo criterios personalizados, y respuesta personalizada con queys (limit, sort ...) y select.  Al realizar una búsqueda sin criterios devuelve todos los usuarios.
*
* @apiParamExample {json} Query
*   {
*     "select": "-_id name password"
*     "filter": '{"level":"user", "status":"inactive"}',
*     "query": '{"limit":2, "sort":"-name"}'
*   }
* @apiParam (Query) {String} [select] Nombre de los campos que se desea que regrese ejemplo [-_id name].
* @apiParam (Query) {String} [filter] Criterios de búsqueda, puede ser cualquier campo del usuario o un conjunto de ellos, se puede agregar operadores $or, $in, $and.
* @apiParam (Query) {String} [query] Criterios de respuesta, restringe y da formato a los campos de respuesta de la búsqueda usando los operadores [limit, sort, select].
*
* @apiSuccessExample {json} 200 OK
*   [
*     {
*       "name": "z-name",
*       "password": "Mh7tC3ZqIJXi8H9Ob1vOFcf9"
*     },
*     {
*       "name": "a-name",
*       "password": "$2a$10$cMZ362Mh7tC3Z"
*     }
*   ]
*
*  @apiSuccess (200 OK) {Array} user Array de usuarios, con el formato según query.
*
* @apiError (500) {String} Error  Mensaje de error del servidor, a la hora de actualizar.
*/
module.exports = (router, User) => {
  router.get('/user', (req, res) => {
    // Parsea los datos enviados por Query, en caso de no existir son sustituidos por null para no afectar en la búsqueda.
    let filter = req.query.filter ? JSON.parse(req.query.filter) : null
    let select = req.query.select || null
    let query = req.query.query ? JSON.parse(req.query.query) : null

    User.find(filter,select,query,(err,user) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(user)
    })
  })
}
