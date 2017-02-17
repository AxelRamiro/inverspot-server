module.exports = (router, User) => {
  router.get('/user', (req, res) => {
    
    let filter = JSON.parse(req.query.filter)
    let select = req.query.select || ''
    let query = JSON.parse(req.query.query) || ''

    User.find(filter,select,query,(err,user) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(user)
    })
  })
}
