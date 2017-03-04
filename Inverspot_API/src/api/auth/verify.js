/**
* @api {get} /auth/verify/:UUID Verificación de correo.
* @apiVersion 0.1.0
* @apiName Verificación
* @apiGroup Autenticación
* @apiDescription Verificación de correo, activación de cuenta y cambio de contraseña, mediante codigo UUID v4.
* @apiUse errorsAPI
*
* @apiParamExample {json} Query
*   {
*     "password": "1234567890"
*   }
*
* @apiParam {String} UUID Token en formato UUIDv4, enviado al correo para activación o para recuperar contraseña.
* @apiParam (Query) {String} [password] Contraseña nueva del usuario en caso de solicitar la recuperación de contraseña.
*
*
* @apiSuccessExample {json} 200 OK
*   {
*     "user": {...},
*     "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp..."
*   }
*
* @apiSuccess (Success 200) {Object} user Objeto de usuario, tal como lo manda la base de datos, ya activado e invalidado el token UUID.
* @apiSuccess (Success 200) {String} token Token de sesión JWT(Json Web Token), no tiene caducacion.
*
* @apiErrorExample {String} 404
*   NOT_FOUND
*
* @apiError (Error) NOT_FOUND  No fue encontrado un usuario con ese token.
*/

module.exports = (router, User, jwt, config, sendMail) => {

  router.get('/auth/verify/:checker', (req, res) => {

    let dataUpdate = { status: 'active' }
    // En caso de enviar la password, se obtiene para actualizar.
    if (req.query.password) dataUpdate.password = req.query.password

    User.findOneAndUpdate({checker:req.params.checker}, dataUpdate, {new: true},(err, user) => {
      if (err) return res.status(500).send(err.message)
      // Si no es encontrado un usuario con ese Token UUID, devuelve el error 404.
      if (!user) return res.status(404).send('NOT_FOUND')
      // Después de activar el usuario se genera su JWT con la información del usuario.
      let token = jwt.sign(user, config.auth.secret)
      // Si no se envió la password, se toma como si fue un caso de activación de cuenta por lo que emite un correo de Registro completo.
      //if (!req.query.password) sendMail({to: user.email, subject: `${user.name} tu registro esta completo`}, 'welcome', {name: user.name}, console.log)
      return res.status(200).jsonp({
        user:user,
        token:`Bearer ${token}`
      })
    })
  })
}
