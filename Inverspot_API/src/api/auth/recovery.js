module.exports = (router, User, sendMail) => {
  router.get('/auth/recovery', (req, res) => {
    User.findOneAndUpdate({email:req.query.email}, {status:'inactive'}, {new: true,}, (err, user) => {

      if (err) return res.status(500).send(err.message)
      if (!user) return res.status(404).send('NOT_FOUND')
      sendMail({to: user.email, subject: `¡Recupara tu contraseña ${user.name}`}, 'recovery', { name:user.name, verifyUrl:user.checker}, console.log)

      return res.status(200).send('ok')
    })
  })
}
