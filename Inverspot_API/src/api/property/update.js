module.exports = (router, Property, upload) => {
  router.put('/property', upload.single('image'), (req, res) => {
    let property = JSON.parse(req.body.property)
    if (req.file) property.image = req.file.filename
    property.status = (property.dataSheet.totalShares > property.dataSheet.sharesSold) ? 'available' : 'fund'
    Property.findByIdAndUpdate(property._id, property, {new: true},(err, resProperty) => {

      if (err)
        return res.status(500).send(err.message)
      res.status(200).jsonp(resProperty)
    })
  })
}
