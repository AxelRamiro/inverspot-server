module.exports = (router, Builder) => {
  router.put('/builder', (req, res) => {

    Builder.findByIdAndUpdate(req.body._id, req.body, {new: true},(err, builder) => {

      if (err)
        return res.status(500).send(err.message)
      res.status(200).jsonp(builder)
    })
  })
}
