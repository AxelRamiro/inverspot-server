/**
* @api {get} /auth/recovery Recuperación de contraseña.
* @apiVersion 0.1.0
* @apiName Recuperación
* @apiGroup Autenticación
* @apiDescription Recuperación de contraseña, actualiza el estado del usuario a inactivo y emite un correo con token para cambiar contraseña.
* @apiUse errorsAPI
*
* @apiParamExample {json} Query
*   {
*     "email": "a@a.com"
*   }
*
* @apiParam (Query) {String} email Correo electronico registrado.
*
* @apiSuccessExample {String} 200
*    OK
*
* @apiSuccess OK El usuario ha sido encontrado y el correo para recuperación de contraseña está siendo enviado.
*
* @apiErrorExample {String} 404
*   NOT_FOUND
*
* @apiError (Error) NOT_FOUND  No fue encontrado un usuario con ese email.
*
*/
module.exports = (router, User, sendMail) => {
  router.get('/auth/recovery', (req, res) => {
    // Busca al usuario por email y actualiza su estado a inactivo para generar un UUID que será enviado por correo.
    User.findOneAndUpdate({email:req.query.email}, {status:'inactive'}, {new: true,}, (err, user) => {

      if (err) return res.status(500).send(err.message)
      // Si no es encontrado un usuario envía el error 404
      if (!user) return res.status(404).send('NOT_FOUND')
      // Envia el correo de recuperacion de contraseña con el UUID como URL para acceder a verificar y pueda cambiar la contraseña.
      sendMail({to: user.email, subject: `¡Recupara tu contraseña ${user.name}`}, 'recovery', { name:user.name, verifyUrl:user.checker, level:user.level}, console.log)

      return res.status(200).send('ok')
    })
  })
}
