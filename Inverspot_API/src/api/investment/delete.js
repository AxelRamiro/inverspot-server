module.exports = (router, Investment, Property) => {
  router.delete('/investment', (req, res) => {
    Investment.findByIdAndRemove(req.body._id, (err, investment) => {

      if (err) return res.status(500).send(err.message)
      if (!investment) return res.status(404).send('NOT_FOUND')

      Property.findByIdAndUpdate(investment.property, {$inc:{'dataSheet.sharesSold': investment.sharesNumber * -1}},{new: true}, (err, resProperty)=>{
        if (err) return res.status(500).send(err.message)
        resProperty.status = (resProperty.dataSheet.totalShares > resProperty.dataSheet.sharesSold) ? 'available' : 'fund'
        resProperty.save()
        res.status(200).jsonp(investment)
      })
    })
  })
}
