module.exports = (router, User, sendMail) => {
  router.post('/user', (req, res) => {
    let user = new User (req.body)
    user.save ((err, resUser) => {
      if (err) return res.status(500).send(err.message)
      sendMail({to: resUser.email, subject: 'Registro'}, 'welcome', {verifyUrl:"http://google.com"}, console.log)
      res.status(201).jsonp(resUser)
    })
  })
}
