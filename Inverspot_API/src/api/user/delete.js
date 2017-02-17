module.exports = (router, User) => {
  router.delete('/user', (req, res) => {
    User.findByIdAndRemove(req.body._id,req.body, (err,user) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(user)
    })
  })
}
