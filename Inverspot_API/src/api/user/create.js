module.exports = (router, User, sendMail) => {
  router.post('/user', (req, res) => {
    let user = new User (req.body)
    user.save ((err, resUser) => {
      if (err) return res.status(500).send(err.message)
      sendMail({to: resUser.email, subject: `¡${resUser.name}, Te damos la bienvenida a Inverspot!`}, 'welcome-admin', {email: resUser.email, password: req.body.password}, console.log)
      res.status(201).jsonp(resUser)
    })
  })
}
