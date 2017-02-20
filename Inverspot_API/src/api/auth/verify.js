module.exports = (router, User, jwt, config) => {

  router.get('/auth/verify/:checker', (req, res) => {

    let dataUpdate = { status: 'active' }
    if (req.query.password) dataUpdate.password = req.query.password

    User.findOneAndUpdate({checker:req.params.checker}, dataUpdate, {new: true},(err, user) => {
      if (err) return res.status(500).send(err.message)
      if (!user) return res.status(404).send('NOT_FOUND')

      let token = jwt.sign(user, config.auth.secret, {
        expiresIn: "15 days"
      })

      return res.status(200).jsonp({
        user:user,
        token:`Bearer ${token}`
      })
    })
  })
}
