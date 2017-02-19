module.exports = (router, WorkProgress) => {
  router.delete('/work-progress', (req, res) => {

    WorkProgress.findByIdAndRemove(req.body._id,req.body, (err, workProgress) => {

      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(workProgress)

    })
  })
}
