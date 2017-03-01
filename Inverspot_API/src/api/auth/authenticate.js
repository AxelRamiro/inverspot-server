/**
* @api {post} /auth Autenticación de usuarios.
* @apiVersion 0.1.0
* @apiName Autenticación
* @apiGroup Autenticación
* @apiDescription Autenticación de usuarios y generación de Json Web Token (JWT) para permisos, a través de validacion de email y password.
*
* @apiParamExample {json} Body
*   {
*     "email": "a@a.com",
*     "password": "123456"
*   }
*
* @apiParam (Body) {String} email Correo de usuario, ya registrado.
* @apiParam (Body) {String} password Contraseña del usuario.
*
* @apiSuccessExample {json} 200 OK
*   {
*     "user": {...},
*     "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp..."
*   }
*
* @apiSuccess (200 OK) {Object} user Objeto de usuario, tal como lo manda la base de datos.
* @apiSuccess (200 OK) {String} token Token de sesión JWT(Json Web Token), no tiene caducacion.
*
* @apiErrorExample {String} 500
*   ERROR
* @apiErrorExample {String} 404
*   NOT_FOUND
* @apiErrorExample {String} 401
*   UNAUTHORIZED
* @apiErrorExample {String} 400
*   BAD_PARAMS
*
* @apiError (500) {String} Error  Mensaje de error del servidor, a la hora de buscar en las base de datos.
* @apiError (404) {String} NOT_FOUND  No fue encontrado un usuario con ese email.
* @apiError (401) {String} UNAUTHORIZED  El usuario tiene el estatus inactivo.
* @apiError (400) {String} BAD_PARAMS  La contraseña es incorrecta.
*/

module.exports = (router, User, jwt, config) => {

  router.post('/auth', (req, res) => {
// Realiza una búsqueda por email, debemos recordar que los email son restringidos como únicos en la DB.
    User.findOne({email:req.body.email}, (err, user) => {
      if (err) return res.status(500).send(err.message)
      // En caso de no encontrar un usuario con ese Email manda el error 404
      if (!user) return res.status(404).send('NOT_FOUND')
      // En caso de que la cuenta esté inactiva manda el error 401
      if (user.status == 'inactive') return res.status(401).send('UNAUTHORIZED')
      // compara la contraseña directamente en el middleware del modelo Usuario, sin desencriptar
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) return res.status(500).send(err.message)
        // en caso de no coincidir la contraseña manda el error 400
        if (!isMatch) return res.status(400).send('BAD_PARAMS')
        // Crea el token de usuario con Json Web Token.
        let token = jwt.sign(user, config.auth.secret)

        return res.status(200).jsonp({
          user: user,
          token: `Bearer ${token}`
        })

      })
    })
  })
}
