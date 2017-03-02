/**
* @api {get} /builder Busqueda de Constructor.
* @apiVersion 0.1.0
* @apiName Busqueda de Constructor
* @apiGroup Constructor
* @apiDescription Busqueda de constructores bajo criterios personalizados y respuestas personalizadas (sort, limit, select). Al realizar busqeudas sin criterios (filtros) devuelve todos los registros.
* @apiPermission admin
*
*
*
*/
module.exports = (router, Builder) => {
  router.get('/builder', (req, res) => {

    let filter = req.query.filter ? JSON.parse(req.query.filter) : null
    let select = req.query.select || null
    let query = req.query.query ? JSON.parse(req.query.query) : null

    Builder.find(filter,select,query,(err,builder) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(builder)
    })
  })
}
