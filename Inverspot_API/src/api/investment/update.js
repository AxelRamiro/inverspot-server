module.exports = (router, Investment, Property) => {
  router.put('/investment', (req, res) => {

    Investment.findById(req.body._id, (err, oldInvestment) => {
      if (err)return res.status(500).send(err.message)
      if (!oldInvestment) return res.status(404).send('NOT_FOUND')

      Investment.findByIdAndUpdate(req.body._id, req.body, {new: true},(err, investment) => {

        if (err)return res.status(500).send(err.message)
        let dif = investment.sharesNumber - oldInvestment.sharesNumber

        Property.findByIdAndUpdate(investment.property, {$inc:{'dataSheet.sharesSold': dif }}, {new: true}, (err, resProperty) =>{
          if (err)return res.status(500).send(err.message)
          if (!oldInvestment) return res.status(404).send('NOT_FOUND')
          
          res.status(200).jsonp(investment)
        })
      })
    })
  })
}
