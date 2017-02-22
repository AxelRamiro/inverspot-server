module.exports = (router, Property, upload) => {
  router.put('/property', upload.single('image'), (req, res) => {
    let property = req.body
    if (req.file) property.image = req.file.filename
    Property.findByIdAndUpdate(property._id, property, {new: true},(err, resProperty) => {

      if (err)
        return res.status(500).send(err.message)
      res.status(200).jsonp(resProperty)
    })
  })
}
