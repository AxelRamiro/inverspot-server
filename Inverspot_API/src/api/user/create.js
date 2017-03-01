/**
* @api {post} /user Crear usuario
* @apiVersion 0.1.0
* @apiName Crear Usuario
* @apiGroup Usuario
* @apiDescription Crear diferentes usuarios (User, Admin, Asesor y Invesment), automáticamente envia el correo de creación de usuario por admin, con el correo y contraseña para loguearse.
*
* @apiParamExample {json} Body
*   {
*     "name": "Lorem",
*     "email": "a@a.com",
*     "telephone": 1234567890,
*     "password": "123456",
*     "level":  "user",
*     "status": "inactive",
*     "asesor":  "58afdb3f20b63a4893d1216c",
*     "contactFrom": "Facebook",
*     "invesmentData": {...}
*   }
*  @apiParam (Body) {String} [name] Nombre de usuario.
*  @apiParam (Body) {String} email Correo de usuario, es obligatorio.
*  @apiParam (Body) {Number} [telephone] Número telefónico del usuario.
*  @apiParam (Body) {String} password Contraseña del usuario, es obligatorio.
*  @apiParam (Body) {String} level =user Nivel del usuario, posibles [user,admin,asesor,invesment].
*  @apiParam (Body) {String} status =inactive Estado del usuario, por defecto esta inactivo hasta hacer la validación con su correo [inactive,active].
*  @apiParam (Body) {String} asesor Id del usuario asesor.
*  @apiParam (Body) {String} contactFrom De donde los contacta [Facebook].
*  @apiParam (Body) {Object} invesmentData Datos de inversionista, datos personales, datos bancarios y datos de beneficiarios, ver modelo User.
*
* @apiSuccessExample {json} 201 CREATED
*   {
*     "name": "Lorem",
*     "email": "a@a.com",
*     "telephone": 1234567890,
*     "password": "$2a$10$cMZ362Mh7tC3ZqIJXi8H9Ob1vOFcf9lpP3yFvtEFWJOnYbp.qeNRy",
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
*  @apiSuccess (201 CREATED) {Object} user Objeto de usuario, tal como lo manda la base de datos.
*  @apiSuccess (201 CREATED) {String} user._id Id de usuario, generado por la base de datos.
*  @apiSuccess (201 CREATED) {String} user.password Contraseña encriptada.
*  @apiSuccess (201 CREATED) {String} user.checker Token de formato UUID v4, para hacer la activación y recuperación de contraseña, se genera automáticamente en el modelo User.
*  @apiSuccess (201 CREATED) {String} user.updatedAt Estampa de tiempo de la última actualización.
*  @apiSuccess (201 CREATED) {String} user.createdAt Estampa de tiempo de cuando fue creado.
*
* @apiError (500) {String} Error  Mensaje de error del servidor, a la hora de crear el usuario.
*/
module.exports = (router, User, sendMail) => {
  router.post('/user', (req, res) => {
    let user = new User (req.body)

    // Guarda el nuvo usuario en la base de datos, en este punto todos los valores por defecto son agregados.
    user.save ((err, resUser) => {
      if (err) return res.status(500).send(err.message)
      // Envio de Email de bienvenida tipo admin, es decir como si un administrador da de alta la cuenta.
      sendMail({to: resUser.email, subject: `¡${resUser.name}, Te damos la bienvenida a Inverspot!`}, 'welcome-admin', {email: resUser.email, password: req.body.password}, console.log)
      // Regresa el Objeto usaurio completo como está guardao en la base de dartos.
      res.status(201).jsonp(resUser)
    })
  })
}
