/**
* @api {put} /user Actualizar Usuario
* @apiVersion 0.1.0
* @apiName Actualizar Usuario
* @apiGroup Usuario
* @apiDescription Actualiza los datos del usuario por medio del Id, todos los datos que se envien son actualizados aunque sus valores sean los mismos.
*
* @apiParamExample {json} Body
*   {
*     "_id": "58b02dea08215b5500830f8f",
*     "name": "Lorem",
*     "email": "a@a.com",
*     "telephone": 1234567890,
*     "password": "$2a$10$cMZ362Mh7tC3ZqIJXi8H9Ob1vOFcf9lpP3yFvtEFWJOnYbp.qeNRy",
*     "level":  "user",
*     "status": "inactive",
*     "asesor":  "58afdb3f20b63a4893d1216c",
*     "contactFrom": "Facebook",
*     "invesmentData": {...}
*   }
* @apiParamExample {json} Query (opcional)
*   {
*     "select": "-_id name password"
*   }
*  @apiParam (Body) {String} _id Id de usuario.
*  @apiParam (Body) {String} [name] Nombre de usuario.
*  @apiParam (Body) {String} [email] Correo de usuario.
*  @apiParam (Body) {Number} [telephone] Número telefónico del usuario.
*  @apiParam (Body) {String} [password] Contraseña del usuario encriptada.
*  @apiParam (Body) {String} [level] Nivel del usuario, posibles [user,admin,asesor,invesment].
*  @apiParam (Body) {String} [status] Estado del usuario, por defecto esta inactivo hasta hacer la validacion con su correo [inactive,active], si es actualizada a active elimina el campo checker, de lo contrario lo genera.
*  @apiParam (Body) {String} [asesor] Id del usuario asesor.
*  @apiParam (Body) {String} [contactFrom] De donde los contacta [Facebook].
*  @apiParam (Body) {Object} [invesmentData] Datos de inversionista, datos personales, datos bancarios y datos de beneficiarios, ver modelo User.
*
* @apiParam (Query) {String} [select] Nombre de los campos a regresar tipo query de consulta ["name telephone email"], para solo quitar el campo ["-_id -name"]
*
* @apiSuccessExample {json} 200 OK
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
*  @apiSuccess (200 OK) {Object} user Objeto de usuario, tal como lo manda la base de datos, explicado en los endpoints anteriores.
*
* @apiError (500) {String} Error  Mensaje de error del servidor, a la hora de actualizar.
*/
module.exports = (router, User) => {
  router.put('/user', (req, res) => {
    // mediante Query puede hacer uso de la funcion select de la base de datos para restringir los campos a regresar.
    let select = req.query.select || null
    User.findOneAndUpdate({_id:req.body._id}, req.body, {new: true, fields: select},(err, user) => {
      if (err)
        return res.status(500).send(err.message)
      res.status(200).jsonp(user)
    })
  })
}
