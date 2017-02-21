module.exports = (router, Investment, Property, User, sendMail) => {

  router.post('/investment', (req, res) => {

    console.log('init');
    let investment = new Investment(req.body)
    console.log('investment construct');

    investment.save((err, resInvestment) => {
      console.log('investment save', resInvestment);
      if (err) return res.status(500).send(err.message)
      console.log('no error');
      Property.findByIdAndUpdate(resInvestment.property, {$inc:{'dataSheet.sharesSold': resInvestment.sharesNumber}}, ()=>{
        if(err) return res.status(500).send()
        return res.status(201).send()
      })
    })

  })

}
