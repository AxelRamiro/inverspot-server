define({ "api": [  {    "type": "put",    "url": "/user",    "title": "Actualizar Usuario",    "version": "0.1.0",    "name": "Actualizar_Usuario",    "group": "Usuario",    "description": "<p>Actualiza los datos del usuario por medio del Id, todos los datos que se envien son actualizados aunque sus valores sean los mismos.</p>",    "parameter": {      "examples": [        {          "title": "Body",          "content": "{\n  \"_id\": \"58b02dea08215b5500830f8f\",\n  \"name\": \"Lorem\",\n  \"email\": \"a@a.com\",\n  \"telephone\": 1234567890,\n  \"password\": \"$2a$10$cMZ362Mh7tC3ZqIJXi8H9Ob1vOFcf9lpP3yFvtEFWJOnYbp.qeNRy\",\n  \"level\":  \"user\",\n  \"status\": \"inactive\",\n  \"asesor\":  \"58afdb3f20b63a4893d1216c\",\n  \"contactFrom\": \"Facebook\",\n  \"invesmentData\": {...}\n}",          "type": "json"        },        {          "title": "Query (opcional)",          "content": "{\n  \"select\": \"-_id name password\"\n}",          "type": "json"        }      ],      "fields": {        "Body": [          {            "group": "Body",            "type": "String",            "optional": false,            "field": "_id",            "description": "<p>Id de usuario.</p>"          },          {            "group": "Body",            "type": "String",            "optional": true,            "field": "name",            "description": "<p>Nombre de usuario.</p>"          },          {            "group": "Body",            "type": "String",            "optional": true,            "field": "email",            "description": "<p>Correo de usuario.</p>"          },          {            "group": "Body",            "type": "Number",            "optional": true,            "field": "telephone",            "description": "<p>Número telefónico del usuario.</p>"          },          {            "group": "Body",            "type": "String",            "optional": true,            "field": "password",            "description": "<p>Contraseña del usuario encriptada.</p>"          },          {            "group": "Body",            "type": "String",            "optional": true,            "field": "level",            "description": "<p>Nivel del usuario, posibles [user,admin,asesor,invesment].</p>"          },          {            "group": "Body",            "type": "String",            "optional": true,            "field": "status",            "description": "<p>Estado del usuario, por defecto esta inactivo hasta hacer la validacion con su correo [inactive,active], si es actualizada a active elimina el campo checker, de lo contrario lo genera.</p>"          },          {            "group": "Body",            "type": "String",            "optional": true,            "field": "asesor",            "description": "<p>Id del usuario asesor.</p>"          },          {            "group": "Body",            "type": "String",            "optional": true,            "field": "contactFrom",            "description": "<p>De donde los contacta [Facebook].</p>"          },          {            "group": "Body",            "type": "Object",            "optional": true,            "field": "invesmentData",            "description": "<p>Datos de inversionista, datos personales, datos bancarios y datos de beneficiarios, ver modelo User.</p>"          }        ],        "Query": [          {            "group": "Query",            "type": "String",            "optional": true,            "field": "select",            "description": "<p>Nombre de los campos a regresar tipo query de consulta [&quot;name telephone email&quot;], para solo quitar el campo [&quot;-_id -name&quot;]</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "200 OK",          "content": "{\n  \"name\": \"Lorem\",\n  \"email\": \"a@a.com\",\n  \"telephone\": 1234567890,\n  \"password\": \"$2a$10$cMZ362Mh7tC3ZqIJXi8H9Ob1vOFcf9lpP3yFvtEFWJOnYbp.qeNRy\",\n  \"level\":  \"user\",\n  \"status\": \"inactive\",\n  \"checker\": \"550e8400-e29b-41d4-a716-446655440000\",\n  \"asesor\":  \"58afdb3f20b63a4893d1216c\",\n  \"contactFrom\": \"Facebook\",\n  \"invesmentData\": {...},\n \"_id\" : \"58b02dea08215b5500830f8f\",\n \"updatedAt\": \"2017-02-24T12:41:04.282Z\",\n \"createdAt\": \"2017-02-24T12:41:04.282Z\",\n}",          "type": "json"        }      ],      "fields": {        "200 OK": [          {            "group": "200 OK",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Objeto de usuario, tal como lo manda la base de datos, explicado en los endpoints anteriores.</p>"          }        ]      }    },    "error": {      "fields": {        "500": [          {            "group": "500",            "type": "String",            "optional": false,            "field": "Error",            "description": "<p>Mensaje de error del servidor, a la hora de actualizar.</p>"          }        ]      }    },    "filename": "Inverspot_API/src/api/user/update.js",    "groupTitle": "Usuario"  },  {    "type": "post",    "url": "/user",    "title": "Crear usuario",    "version": "0.1.0",    "name": "Crear_Usuario",    "group": "Usuario",    "description": "<p>Crear diferentes usuarios (User, Admin, Asesor y Invesment), automáticamente envia el correo de creación de usuario por admin, con el correo y contraseña para loguearse.</p>",    "permission": [      {        "name": "admin",        "title": "Se necesita un JWT de sesion.",        "description": "<p>Para conseguir este token se requiere autenticarse &quot;post /auth&quot; con email y password validos para generar el Json Web Token (JWT)</p>"      }    ],    "parameter": {      "examples": [        {          "title": "Body",          "content": "{\n  \"name\": \"Lorem\",\n  \"email\": \"a@a.com\",\n  \"telephone\": 1234567890,\n  \"password\": \"123456\",\n  \"level\":  \"user\",\n  \"status\": \"inactive\",\n  \"asesor\":  \"58afdb3f20b63a4893d1216c\",\n  \"contactFrom\": \"Facebook\",\n  \"invesmentData\": {...}\n}",          "type": "json"        }      ],      "fields": {        "Body": [          {            "group": "Body",            "type": "String",            "optional": true,            "field": "name",            "description": "<p>Nombre de usuario.</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Correo de usuario, es obligatorio.</p>"          },          {            "group": "Body",            "type": "Number",            "optional": true,            "field": "telephone",            "description": "<p>Número telefónico del usuario.</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Contraseña del usuario, es obligatorio.</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "level",            "defaultValue": "user",            "description": "<p>Nivel del usuario, posibles [user,admin,asesor,invesment].</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "status",            "defaultValue": "inactive",            "description": "<p>Estado del usuario, por defecto esta inactivo hasta hacer la validación con su correo [inactive,active].</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "asesor",            "description": "<p>Id del usuario asesor.</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "contactFrom",            "description": "<p>De donde los contacta [Facebook].</p>"          },          {            "group": "Body",            "type": "Object",            "optional": false,            "field": "invesmentData",            "description": "<p>Datos de inversionista, datos personales, datos bancarios y datos de beneficiarios, ver modelo User.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "201 CREATED",          "content": "{\n  \"name\": \"Lorem\",\n  \"email\": \"a@a.com\",\n  \"telephone\": 1234567890,\n  \"password\": \"$2a$10$cMZ362Mh7tC3ZqIJXi8H9Ob1vOFcf9lpP3yFvtEFWJOnYbp.qeNRy\",\n  \"level\":  \"user\",\n  \"status\": \"inactive\",\n  \"checker\": \"550e8400-e29b-41d4-a716-446655440000\",\n  \"asesor\":  \"58afdb3f20b63a4893d1216c\",\n  \"contactFrom\": \"Facebook\",\n  \"invesmentData\": {...},\n \"_id\" : \"58b02dea08215b5500830f8f\",\n \"updatedAt\": \"2017-02-24T12:41:04.282Z\",\n \"createdAt\": \"2017-02-24T12:41:04.282Z\",\n}",          "type": "json"        }      ],      "fields": {        "201 CREATED": [          {            "group": "201 CREATED",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Objeto de usuario, tal como lo manda la base de datos.</p>"          },          {            "group": "201 CREATED",            "type": "String",            "optional": false,            "field": "user._id",            "description": "<p>Id de usuario, generado por la base de datos.</p>"          },          {            "group": "201 CREATED",            "type": "String",            "optional": false,            "field": "user.password",            "description": "<p>Contraseña encriptada.</p>"          },          {            "group": "201 CREATED",            "type": "String",            "optional": false,            "field": "user.checker",            "description": "<p>Token de formato UUID v4, para hacer la activación y recuperación de contraseña, se genera automáticamente en el modelo User.</p>"          },          {            "group": "201 CREATED",            "type": "String",            "optional": false,            "field": "user.updatedAt",            "description": "<p>Estampa de tiempo de la última actualización.</p>"          },          {            "group": "201 CREATED",            "type": "String",            "optional": false,            "field": "user.createdAt",            "description": "<p>Estampa de tiempo de cuando fue creado.</p>"          }        ]      }    },    "error": {      "fields": {        "500": [          {            "group": "500",            "type": "String",            "optional": false,            "field": "Error",            "description": "<p>Mensaje de error del servidor, a la hora de crear el usuario.</p>"          }        ]      }    },    "filename": "Inverspot_API/src/api/user/create.js",    "groupTitle": "Usuario"  },  {    "type": "delete",    "url": "/user",    "title": "Eliminar usuario",    "version": "0.1.0",    "name": "Eliminar_Usuario",    "group": "Usuario",    "description": "<p>Elimina un usuario por medio de una busqueda de Id.</p>",    "parameter": {      "examples": [        {          "title": "Body",          "content": "{\n  \"_id\": \"58b02dea08215b5500830f8f\"\n}",          "type": "json"        }      ],      "fields": {        "Body": [          {            "group": "Body",            "type": "String",            "optional": false,            "field": "_id",            "description": "<p>Id de usuario.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "200 OK",          "content": "{\n \"name\": \"Lorem\",\n \"email\": \"a@a.com\",\n \"telephone\": 1234567890,\n \"password\": \"$2a$10$cMZ362Mh7tC3ZqIJXi8H9Ob1vOFcf9lpP3yFvtEFWJOnYbp.qeNRy\",\n \"level\":  \"user\",\n \"status\": \"inactive\",\n \"checker\": \"550e8400-e29b-41d4-a716-446655440000\",\n \"asesor\":  \"58afdb3f20b63a4893d1216c\",\n \"contactFrom\": \"Facebook\",\n \"invesmentData\": {...},\n \"_id\" : \"58b02dea08215b5500830f8f\",\n \"updatedAt\": \"2017-02-24T12:41:04.282Z\",\n \"createdAt\": \"2017-02-24T12:41:04.282Z\",\n}",          "type": "json"        }      ],      "fields": {        "200 OK": [          {            "group": "200 OK",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Objeto de usuario eliminado, tal como lo manda la base de datos, explicado en los endpoints anteriores.</p>"          }        ]      }    },    "error": {      "fields": {        "500": [          {            "group": "500",            "type": "String",            "optional": false,            "field": "Error",            "description": "<p>Mensaje de error del servidor, a la hora de actualizar.</p>"          }        ]      }    },    "filename": "Inverspot_API/src/api/user/delete.js",    "groupTitle": "Usuario"  },  {    "type": "get",    "url": "/user",    "title": "Búsqueda de usuarios.",    "version": "0.1.0",    "name": "b_squeda",    "group": "Usuario",    "description": "<p>Busca bajo criterios personalizados, y respuesta personalizada con queys (limit, sort ...) y select.  Al realizar una búsqueda sin criterios devuelve todos los usuarios.</p>",    "parameter": {      "examples": [        {          "title": "Query",          "content": "{\n  \"select\": \"-_id name password\"\n  \"filter\": '{\"level\":\"user\", \"status\":\"inactive\"}',\n  \"query\": '{\"limit\":2, \"sort\":\"-name\"}'\n}",          "type": "json"        }      ],      "fields": {        "Query": [          {            "group": "Query",            "type": "String",            "optional": true,            "field": "select",            "description": "<p>Nombre de los campos que se desea que regrese ejemplo [-_id name].</p>"          },          {            "group": "Query",            "type": "String",            "optional": true,            "field": "filter",            "description": "<p>Criterios de búsqueda, puede ser cualquier campo del usuario o un conjunto de ellos, se puede agregar operadores $or, $in, $and.</p>"          },          {            "group": "Query",            "type": "String",            "optional": true,            "field": "query",            "description": "<p>Criterios de respuesta, restringe y da formato a los campos de respuesta de la búsqueda usando los operadores [limit, sort, select].</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "200 OK",          "content": "[\n  {\n    \"name\": \"z-name\",\n    \"password\": \"Mh7tC3ZqIJXi8H9Ob1vOFcf9\"\n  },\n  {\n    \"name\": \"a-name\",\n    \"password\": \"$2a$10$cMZ362Mh7tC3Z\"\n  }\n]",          "type": "json"        }      ],      "fields": {        "200 OK": [          {            "group": "200 OK",            "type": "Array",            "optional": false,            "field": "user",            "description": "<p>Array de usuarios, con el formato según query.</p>"          }        ]      }    },    "error": {      "fields": {        "500": [          {            "group": "500",            "type": "String",            "optional": false,            "field": "Error",            "description": "<p>Mensaje de error del servidor, a la hora de actualizar.</p>"          }        ]      }    },    "filename": "Inverspot_API/src/api/user/find.js",    "groupTitle": "Usuario"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "Inverspot_API/apidoc/main.js",    "group": "_Users_luisenvilla_Documents_Inverspot_api_node_docker_Inverspot_API_apidoc_main_js",    "groupTitle": "_Users_luisenvilla_Documents_Inverspot_api_node_docker_Inverspot_API_apidoc_main_js",    "name": ""  }] });
