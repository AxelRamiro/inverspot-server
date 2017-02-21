module.exports = (router, Investment, Property, User, sendMail) => {
  router.post('/investment', (req, res) => {
    let investment = new Investment (req.body)
    investment.save ((err, resInvestment) => {
      if (err) return res.status(500).send(err.message)
      Property.findByIdAndUpdate(req.body.property, { $inc: { 'dataSheet.sharesSold': req.body.sharesNumber}}, (err, resProperty) => {
        if (err) return res.status(500).send(err.message)
        User.findById(req.body.investor, (err, resUser) => {
          if (err) return res.status(500).send(err.message)
          let params = {
            image : resProperty.image,
            title : resProperty.title,
            investAmount : resProperty.dataSheet.investAmount,
            estimatedTerm : resProperty.dataSheet.estimatedTerm,
            yieldInTime : resProperty.marketResearch.yieldInTime,
            sharesNumber : resInvestment.sharesNumber,
            amount : resInvestment.amount
          }
          sendMail({to: resUser.email, subject: `Confirmación de nueva inversión en ${resProperty}`}, 'investment', params, console.log)
          res.status(201).jsonp(resInvestment)
        })
      })
    })
  })
}
