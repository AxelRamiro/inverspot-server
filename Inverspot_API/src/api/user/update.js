module.exports = (router, User) => {
  router.put('/user', (req, res) => {
    User.findByIdAndUpdate(req.body._id, req.body, {new: true},(err, user) => {
      if (err)
        return res.status(500).send(err.message)
      res.status(200).jsonp(user)
    })
  })
}
