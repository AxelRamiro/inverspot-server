module.exports = (router, WorkProgress) => {
  router.post('/work-progress', (req, res) => {
    let workProgress = new WorkProgress (req.body)
    workProgress.save ((err, resWorkProgress) => {
      if (err) return res.status(500).send(err.message)
      res.status(201).jsonp(resWorkProgress)
    })
  })
}
