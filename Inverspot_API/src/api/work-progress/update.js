module.exports = (router, WorkProgress, upload) => {
  router.put('/work-progress', upload.single('photo'), (req, res) => {
    let workProgress = req.body
    if (req.file) workProgress.image = req.file.filename

    WorkProgress.findByIdAndUpdate(workProgress._id, workProgress, {new: true},(err, resWorkProgress) => {

      if (err)
        return res.status(500).send(err.message)
      res.status(200).jsonp(resWorkProgress)
    })
  })
}
