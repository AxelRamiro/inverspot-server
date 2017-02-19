module.exports = (router, User) => {
  router.put('/user', (req, res) => {
    let select = req.query.select || null
    User.findOneAndUpdate({_id:req.body._id}, req.body, {new: true, fields: select},(err, user) => {
      if (err)
        return res.status(500).send(err.message)
      res.status(200).jsonp(user)
    })
  })
}
