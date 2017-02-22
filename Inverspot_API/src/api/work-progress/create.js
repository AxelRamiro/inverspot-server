module.exports = (router, WorkProgress, upload) => {
  router.post('/work-progress', upload.single('photo'), (req, res) => {
    let workProgress = new WorkProgress (req.body)
    if (req.file) workProgress.photo = req.file.filename
    workProgress.save ((err, resWorkProgress) => {
      if (err) return res.status(500).send(err.message)
      res.status(201).jsonp(resWorkProgress)
    })
  })
}
