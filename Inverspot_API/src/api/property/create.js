module.exports = (router, Property, upload) => {
  router.post('/property', upload.single('image'), (req, res) => {
    let property = new Property(JSON.parse(req.body.property))
    if (req.file) property.image = req.file.filename
    property.status = (property.dataSheet.totalShares > property.dataSheet.sharesSold) ? 'available' : 'fund'
    property.save((err, resProperty) => {
      if (err) return res.status(500).send(err.message)
      res.status(201).jsonp(resProperty)
    })
  })
}
