// Definición de headers
/**
* @apiDefine authHeaders Headers con autenticación.
* @apiVersion 0.1.0
* @apiHeaderExample {json} Headers-Data:
*     {
*       "Content-Type": "application/json",
*       "Authorization": "Bearer eyJhbGci...."
*     }
* @apiHeader (Headers-Data) {String} Content-Type Por lo regular la API soporta application/json, para el envío de los datos de la consulta (body)
* @apiHeader (Headers-Data) {String} Authorization Json Web Token de autentificacion.
*/

/**
* @apiDefine fileHeaders Headers con imagen.
* @apiVersion 0.1.0
* @apiHeaderExample {json} Headers-File:
*     {
*       "Content-Type": "multipart/form-data",
*       "Authorization": "Bearer eyJhbGci...."
*     }
* @apiHeader (Headers-File) {String} Content-Type Si queremos mandar archivos la API los recibe con multipart/form-data.
* @apiHeader (Headers-File) {String} Authorization Json Web Token de autentificacion.
*/

// Definición de permisos
/**
* @apiDefine admin Se necesita un JWT de sesión.
* Para conseguir este token se requiere autenticarse "post /auth" con email y password válidos para generar el Json Web Token (JWT).
* Para mandar el Token se deberá agregar a la consulta en headers.authorization o bien como query.token.
* @apiVersion 0.1.0
*/

// Definición de respuestas
/**
* @apiDefine success201 Respuesta de creación exitosa.
* @apiVersion 0.1.0
* @apiSuccess (Success 201) {String} object._id Id asignado por la BD, es único en toda la base de datos.
* @apiSuccess (Success 201) {String} object.updatedAt Estampa de tiempo de la última actualización de los datos en la BD.
* @apiSuccess (Success 201) {String} object.createdAt Estampa de tiempo de la creación en la BD.
*/

// Definición de errores
/**
* @apiDefine errorsAPI Error del servidor.
* @apiVersion 0.1.0
* @apiError (Error) 500  Ha ocurrido un error en la consulta, se envía el mensaje de error del servidor.
*/
