module.exports = (router, WorkProgress) => {
  router.put('/work-progress', (req, res) => {

    WorkProgress.findByIdAndUpdate(req.body._id, req.body, {new: true},(err, workProgress) => {

      if (err)
        return res.status(500).send(err.message)
      res.status(200).jsonp(workProgress)
    })
  })
}
