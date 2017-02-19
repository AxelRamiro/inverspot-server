module.exports = (router, Builder) => {
  router.delete('/builder', (req, res) => {

    Builder.findByIdAndRemove(req.body._id,req.body, (err, builder) => {

      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(builder)

    })
  })
}
