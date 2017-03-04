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
* @apiError (Error) UNAUTHORIZED  Token de sesión JWT(Json Web Token) no encontrado o invalido.
*/

/**
* @apiDefine authHeadersQuery Headers con autenticación.
* @apiVersion 0.1.0
* @apiHeaderExample {json} Headers-Data:
*     {
*       "Authorization": "Bearer eyJhbGci...."
*     }
* @apiHeader (Headers-Data) {String} Authorization Json Web Token de autentificacion.
* @apiError (Error) UNAUTHORIZED  Token de sesión JWT(Json Web Token) no encontrado o invalido.
*/

/**
* @apiDefine headersPublic Headers sin autenticación.
* @apiVersion 0.1.0
* @apiHeaderExample {json} Headers-Data:
*     {
*       "Content-Type": "application/json"
*     }
* @apiHeader (Headers-Data) {String} Content-Type Por lo regular la API soporta application/json, para el envío de los datos de la consulta (body)
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
* @apiError (Error) UNAUTHORIZED  Token de sesión JWT(Json Web Token) no encontrado o invalido.
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

/**
* @apiDefine successDelete Respuesta exitosa de eliminar documento.
* @apiVersion 0.1.0
* @apiParam (Body) {String} _id Id del documento a eliminar.
* @apiSuccess (Success 200) {Object} Object Devuelve todo el objeto eliminado.
* @apiError (Error) NOT_FOUND  El id no coincide con ningun registro.
*/

/**
* @apiDefine successUpdate Respuesta exitosa de actualizar documento.
* @apiVersion 0.1.0
* @apiSuccess (Success 200) {Object} Object Devuelve todo el objeto actualizado.
* @apiSuccess (Success 200) {String} Object.updatedAt Estampa de tiempo de la última actualización de los datos en la BD.
* @apiError (Error) NOT_FOUND  El id no coincide con ningun registro.
*/

// Definición de errores
/**
* @apiDefine errorsAPI Error del servidor.
* @apiVersion 0.1.0
* @apiError (Error) 500  Ha ocurrido un error en la consulta, se envía el mensaje de error del servidor.
*/


// Definición de Parametros Generales
/**
* @apiDefine paramsFindQuery Parametros de búsqueda.
* @apiVersion 0.1.0
* @apiParam (Query) {String} [select] Nombre de los campos que se desea que regrese ejemplo [-_id name] omite el id y solo devuelve los nombres.
* @apiParam (Query) {String} [filter] Criterios de búsqueda, puede ser cualquier campo del documento o un conjunto de ellos, se puede agregar operadores $or, $in, $and, $gt, $lt.
* @apiParam (Query) {String} [query] Criterios de respuesta, restringe y da formato a los campos de respuesta de la búsqueda usando los operadores [limit, sort, select].
*
* @apiSuccess (Success 200) {Array} Response Array de documentos que coinciden con los filtros de búsqueda y en el formato solicitado con query.
*/
