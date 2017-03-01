/**
* @api {delete} /user Eliminar usuario.
* @apiVersion 0.1.0
* @apiName Eliminar Usuario
* @apiGroup Usuario
* @apiDescription Elimina un usuario por medio de una busqueda de Id.
* @apiPermission admin
*
* @apiParamExample {json} Body
*   {
*     "_id": "58b02dea08215b5500830f8f"
*   }
*
*  @apiParam (Body) {String} _id Id de usuario.
*
* @apiSuccessExample {json} 200 OK
*   {
*    "name": "Lorem",
*    "email": "a@a.com",
*    "telephone": 1234567890,
*    "password": "$2a$10$cMZ362Mh7tC3ZqIJXi8H9Ob1vOFcf9lpP3yFvtEFWJOnYbp.qeNRy",
*    "level":  "user",
*    "status": "inactive",
*    "checker": "550e8400-e29b-41d4-a716-446655440000",
*    "asesor":  "58afdb3f20b63a4893d1216c",
*    "contactFrom": "Facebook",
*    "invesmentData": {...},
*    "_id" : "58b02dea08215b5500830f8f",
*    "updatedAt": "2017-02-24T12:41:04.282Z",
*    "createdAt": "2017-02-24T12:41:04.282Z",
*   }
*
*  @apiSuccess (200 OK) {Object} user Objeto de usuario eliminado, tal como lo manda la base de datos, explicado en los endpoints anteriores.
*
* @apiError (500) {String} Error  Mensaje de error del servidor, a la hora de actualizar.
*/
module.exports = (router, User) => {
  router.delete('/user', (req, res) => {
    User.findByIdAndRemove(req.body._id,req.body, (err,user) => {
      if (err) return res.status(500).send(err.message)
      res.status(200).jsonp(user)
    })
  })
}
