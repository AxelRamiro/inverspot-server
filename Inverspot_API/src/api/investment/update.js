module.exports = (router, Investment) => {
  router.put('/investment', (req, res) => {

    Investment.findByIdAndUpdate(req.body._id, req.body, {new: true},(err, investment) => {

      if (err)
        return res.status(500).send(err.message)
      res.status(200).jsonp(investment)
    })
  })
}
