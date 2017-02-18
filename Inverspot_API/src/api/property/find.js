module.exports = (router, Property) => {
  router.get('/property', (req, res) => {

    let filter = req.query.filter ? JSON.parse(req.query.filter) : null
    let select = req.query.select || null
    let query = req.query.query ? JSON.parse(req.query.query) : null

    Property.find(filter,select,query,(err,property) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(property)
    })
  })
}
