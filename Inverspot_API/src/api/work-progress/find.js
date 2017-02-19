module.exports = (router, WorkProgress) => {
  router.get('/work-progress', (req, res) => {

    let filter = req.query.filter ? JSON.parse(req.query.filter) : null
    let select = req.query.select || null
    let query = req.query.query ? JSON.parse(req.query.query) : null

    WorkProgress.find(filter,select,query,(err,workProgress) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(workProgress)
    })
  })
}
