module.exports = (router, user) => {
  router.post('/user', (req, res) => {
    console.log('/api/user')
    res.send ('API/USER')
    //...
  })
}
