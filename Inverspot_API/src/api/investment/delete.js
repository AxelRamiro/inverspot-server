module.exports = (router, Investment) => {
  router.delete('/investment', (req, res) => {

    Investment.findByIdAndRemove(req.body._id,req.body, (err, investment) => {

      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(investment)

    })
  })
}
