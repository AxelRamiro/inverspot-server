module.exports = (router, Builder) => {
  router.post('/builder', (req, res) => {
    let builder = new Builder (req.body)
    builder.save ((err, resBuilder) => {
      if (err) return res.status(500).send(err.message)
      res.status(201).jsonp(resBuilder)
    })
  })
}
