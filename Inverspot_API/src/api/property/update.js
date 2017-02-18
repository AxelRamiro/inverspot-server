module.exports = (router, Property) => {
  router.put('/property', (req, res) => {

    Property.findByIdAndUpdate(req.body._id, req.body, {new: true},(err, property) => {
      
      if (err)
        return res.status(500).send(err.message)
      res.status(200).jsonp(property)
    })
  })
}
