/**
* @api {post} /user Crar usuario
* @apiVersion 0.1.0
* @apiName Crear Usuario
* @apiGroup Usuario
* @apiDescription Craa diferentes usuarios (User, Admin, Asesor y Invesment), automaticamente envia el correo de creacion de usuario por admin, con el correo y contraseña para logearse.
*
* @apiParamExample {json} Body
*   {
*     "name": "Lorem",
*     "email": "a@a.com",
*     "telephone": 1234567890,
*     "password": "123456",
*     "level":  "user",
*     "status": "inactive",
*     "checker": "550e8400-e29b-41d4-a716-446655440000",
*     "asesor":  "58afdb3f20b63a4893d1216c",
*     "contactFrom": "Facebook",
*     "invesmentData": {...}
*   }
*  @apiParam (body) {String} [name] Nombre de usuario.
*  @apiParam (body) {String} email Correo de usuario, es obligatorio.
*  @apiParam (body) {Number} [telephone] Numero telefonico del usuario.
*  @apiParam (body) {String} password Contraseña del usuario, es obligatorio.
*  @apiParam (body) {String} level =user Nivel del usuario, posibles [user,admin,asesor,invesment].
*  @apiParam (body) {String} status =inactive Estado del usuario, por defecto esta inactivo hasta hacer la validacion con su correo [inactive,active].
*  @apiParam (body) {String} checker Token de formato UUID v4, para hacer la activacion y recuperacion de contraseña, se genera automaticamente en el modelo User.
*  @apiParam (body) {String} asesor Id del usuario asesor.
*  @apiParam (body) {String} contactFrom De donde los contacta [Facebook].
*  @apiParam (body) {Object} invesmentData Datos de inversionista, datos personales, datos bancarios y datos de beneficiarios, ver modelo User.
*
* @apiSuccessExample {json} 201
*   {
*     "name": "Lorem",
*     "email": "a@a.com",
*     "telephone": 1234567890,
*     "password": "123456",
*     "level":  "user",
*     "status": "inactive",
*     "checker": "550e8400-e29b-41d4-a716-446655440000",
*     "asesor":  "58afdb3f20b63a4893d1216c",
*     "contactFrom": "Facebook",
*     "invesmentData": {...},
*    "_id" : "58b02dea08215b5500830f8f",
*    "updatedAt": "2017-02-24T12:41:04.282Z",
*    "createdAt": "2017-02-24T12:41:04.282Z",
*   }
*
*  @apiSuccess (201) {Object} user Objeto de usuario, tal como lo manda la base de datos.
*  @apiSuccess (201) {String} user._id Id de usuario, generado por la base de datos.
*  @apiSuccess (201) {String} user.updatedAt Estampa de tiempo de la ultima actualizacion.
*  @apiSuccess (201) {String} user.createdAt Estampa de tiempo de cuando fue creado.
*
* @apiError (500) {String} Error  Mensaje de error del servidor, a la hora de crear el usuario.
*/
module.exports = (router, User, sendMail) => {
  router.post('/user', (req, res) => {
    let user = new User (req.body)
    user.invesmentData = {
      name: req.body.name
    }
    user.save ((err, resUser) => {
      if (err) return res.status(500).send(err.message)
      sendMail({to: resUser.email, subject: `¡${resUser.name}, Te damos la bienvenida a Inverspot!`}, 'welcome-admin', {email: resUser.email, password: req.body.password}, console.log)
      res.status(201).jsonp(resUser)
    })
  })
}
