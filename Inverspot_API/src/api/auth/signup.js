/**
*  @api {post} /auth/signup Registrar Usuario
* @apiVersion 0.1.0
* @apiName Registrar
* @apiGroup Autenticación
* @apiDescription Registro de usuarios, crear usuarios sin necesidad de tener un JWT.
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
*  @apiParam (Body) {String} [level] =user Nivel del usuario, posibles [user,admin,asesor,invesment].
*  @apiParam (Body) {String} [status] =inactive Estado del usuario, por defecto está inactivo hasta hacer la validación con su correo [inactive,active].
*  @apiParam (Body) {String} asesor Id del usuario asesor.
*  @apiParam (Body) {String} [contactFrom] De donde los contacta [Facebook].
*  @apiParam (Body) {Object} [invesmentData] Datos de inversionista, datos personales, datos bancarios y datos de beneficiarios, ver modelo User.
*
* @apiSuccessExample {String} 201
*     CREATED
* @apiSuccessExample {String} 500
*     ERROR
*
* @apiError (500) {String} ERROR  Mensaje de error del servidor, a la hora de crear el usuario.
* @apiError (201) {String} CREATED  Usuario creado exitosamente, y correo enviado para activacion de cuenta.
*/
module.exports = (router, User, sendMail) => {
  router.post('/auth/signup', (req, res) => {

    let user = new User (req.body)
    // Guarda el nuevo usuario en la base de datos, en este punto todos los valores por defecto son agregados.
    user.save ((err, resUser) => {
      if (err) return res.status(500).send(err.message)
      // Envio de mail de bienvenida, con el link para que el usuario pueda activar la cuenta verificando su email.
      // Por ahora este mail está pensado solo para usuarios e inversionistas, pero la funcionalidad está para administradores y asesores también.
      sendMail({to: resUser.email, subject: `Valida tu correo ${resUser.name}`}, 'welcome', {name: resUser.name, verifyUrl:resUser.checker}, console.log)

      res.status(201).send('CREATED')
    })
  })
}
