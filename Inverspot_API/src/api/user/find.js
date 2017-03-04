/**
* @api {get} /user Búsqueda de usuarios.
* @apiVersion 0.1.0
* @apiName búsqueda
* @apiGroup Usuario
* @apiDescription Busca bajo criterios personalizados, y respuesta personalizada con queys (limit, sort ...) y select.  Al realizar una búsqueda sin criterios devuelve todos los usuarios.
* @apiUse headersPublic
* @apiUse paramsFindQuery
* @apiUse errorsAPI
*
* @apiParamExample {json} Query
*   {
*     "select": "-_id name password"
*     "filter": '{"level":"user", "status":"inactive"}',
*     "query": '{"limit":2, "sort":"-name"}'
*   }
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
*/
module.exports = (router, User) => {
  router.get('/user', (req, res) => {
    // Parsea los datos enviados por Query, en caso de no existir son sustituidos por null para no afectar en la búsqueda.
    let filter = req.query.filter ? JSON.parse(req.query.filter) : null
    let select = req.query.select || null
    let query = req.query.query ? JSON.parse(req.query.query) : null

    User.find(filter,select,query,(err,user) => {
      if (err) return res.status(500).send(err.message)
      // regresa la respuesta de la busqueda, aun si no encuentra algo en la busqueda regresa []
      res.status(200).jsonp(user)
    })
  })
}
