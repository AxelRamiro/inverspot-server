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
