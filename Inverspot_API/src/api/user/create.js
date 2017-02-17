module.exports = (router, User) => {
  router.post('/user', (req, res) => {
    let user = new User (req.body)
    user.save ((err, resUser) => {
      if (err) return res.status(500).send(err.message)
      res.status(201).jsonp(resUser)
    })
  })
}
