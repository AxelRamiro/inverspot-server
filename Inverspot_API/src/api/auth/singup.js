module.exports = (router, User, sendMail) => {
  router.post('/auth/singup', (req, res) => {

    let user = new User (req.body)
    user.save ((err, resUser) => {
      if (err) return res.status(500).send(err.message)
      sendMail({to: resUser.email, subject: 'Registro'}, 'welcome', {verifyUrl:resUser.checker}, console.log)

      res.status(201).send('ok')
    })
  })
}
