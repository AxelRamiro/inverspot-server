module.exports = (router, Investment, Property, User, sendMail) => {

  router.post('/investment', (req, res) => {

    let investment = new Investment(req.body)
    investment.save((err, resInvestment) => {

      if (err) return res.status(500).send(err.message)

      Property.findByIdAndUpdate(resInvestment.property, {
        $inc:{
          'dataSheet.sharesSold': resInvestment.sharesNumber
        }}, (err, resProperty)=>{

        if(err) return res.status(500).send(err.message)

        resInvestment.populate({
          path: 'investor',
          populate: {
            path: 'asesor'
          }
        }, (err, resPopulate) => {

          if(err) return res.status(500).send(err.message)

          let emailParams ={
            emailInvestor : resPopulate.investor.email,
            emailAsesor : resPopulate.investor.asesor.email,
            image : resProperty.image,
            title : resProperty.title,
            investAmount : resProperty.dataSheet.investAmount,
            estimatedTerm : resProperty.dataSheet.estimatedTerm,
            yieldInTime : resProperty.marketResearch.yieldInTime,
            sharesNumber : resPopulate.sharesNumber,
            amount : resPopulate.amount,
            nameInvestor : resPopulate.investor.name,
            telephoneInvestor : resPopulate.investor.telephone
          }

          sendMail({to: emailParams.emailInvestor, subject: `Confirmación de nueva inversión en ${emailParams.title}`}, 'investment', emailParams, console.log)
          sendMail({to: emailParams.emailAsesor, subject: `Nueva inversión en ${emailParams.title}`}, 'admin_investment', emailParams, console.log)

          return res.status(201).send()
        })
      })
    })

  })

}
