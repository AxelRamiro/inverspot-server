module.exports = (router, Investment, Property) => {
  router.post('/investment', (req, res) => {
    let investment = new Investment (req.body)
    investment.save ((err, resInvestment) => {
      if (err) return res.status(500).send(err.message)
      Property.findByIdAndUpdate(req.body.property, { $inc: { 'dataSheet.sharesSold': req.body.sharesNumber}}, (err, resProperty) => {
        if (err) return res.status(500).send(err.message)
        res.status(201).jsonp(resInvestment)
      })
    })
  })
}
