module.exports = (router, Property) => {
  router.post('/property', (req, res) => {
    let property = new Property (req.body)
    property.save ((err, resProperty) => {
      if (err) return res.status(500).send(err.message)
      res.status(201).jsonp(resProperty)
    })
  })
}
