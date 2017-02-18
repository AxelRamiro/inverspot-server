module.exports = (router, Property) => {
  router.delete('/property', (req, res) => {
    Property.findByIdAndRemove(req.body._id,req.body, (err,property) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(property)
    })
  })
}
