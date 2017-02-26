module.exports = (router, User, jwt, config) => {

  router.post('/auth', (req, res) => {

    User.findOne({email:req.body.email}, (err, user) => {
      if (err) return res.status(500).send(err.message)
      if (!user) return res.status(404).send('NOT_FOUND')
      if (user.status == 'inactive') return res.status(401).send('UNAUTHORIZED')

      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) return res.status(500).send(err.message)
        if (!isMatch) return res.status(400).send('BAD_PARAMS')

        let token = jwt.sign(user, config.auth.secret)

        return res.status(200).jsonp({
          user: user,
          token: `Bearer ${token}`
        })

      })
    })
  })
}
