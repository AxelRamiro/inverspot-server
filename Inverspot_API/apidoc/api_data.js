define({ "api": [  {    "type": "post",    "url": "/user",    "title": "Crar usuario",    "version": "0.1.0",    "name": "Crear_Usuario",    "group": "Usuario",    "description": "<p>Craa diferentes usuarios (User, Admin, Asesor y Invesment), automaticamente envia el correo de creacion de usuario por admin, con el correo y contraseña para logearse.</p>",    "parameter": {      "examples": [        {          "title": "Body",          "content": "{\n  \"name\": \"Lorem\",\n  \"email\": \"a@a.com\",\n  \"telephone\": 1234567890,\n  \"password\": \"123456\",\n  \"level\":  \"user\",\n  \"status\": \"inactive\",\n  \"checker\": \"550e8400-e29b-41d4-a716-446655440000\",\n  \"asesor\":  \"58afdb3f20b63a4893d1216c\",\n  \"contactFrom\": \"Facebook\",\n  \"invesmentData\": {...}\n}",          "type": "json"        }      ],      "fields": {        "body": [          {            "group": "body",            "type": "String",            "optional": true,            "field": "name",            "description": "<p>Nombre de usuario.</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Correo de usuario, es obligatorio.</p>"          },          {            "group": "body",            "type": "Number",            "optional": true,            "field": "telephone",            "description": "<p>Numero telefonico del usuario.</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Contraseña del usuario, es obligatorio.</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "level",            "defaultValue": "user",            "description": "<p>Nivel del usuario, posibles [user,admin,asesor,invesment].</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "status",            "defaultValue": "inactive",            "description": "<p>Estado del usuario, por defecto esta inactivo hasta hacer la validacion con su correo [inactive,active].</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "checker",            "description": "<p>Token de formato UUID v4, para hacer la activacion y recuperacion de contraseña, se genera automaticamente en el modelo User.</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "asesor",            "description": "<p>Id del usuario asesor.</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "contactFrom",            "description": "<p>De donde los contacta [Facebook].</p>"          },          {            "group": "body",            "type": "Object",            "optional": false,            "field": "invesmentData",            "description": "<p>Datos de inversionista, datos personales, datos bancarios y datos de beneficiarios, ver modelo User.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "201",          "content": "{\n  \"name\": \"Lorem\",\n  \"email\": \"a@a.com\",\n  \"telephone\": 1234567890,\n  \"password\": \"123456\",\n  \"level\":  \"user\",\n  \"status\": \"inactive\",\n  \"checker\": \"550e8400-e29b-41d4-a716-446655440000\",\n  \"asesor\":  \"58afdb3f20b63a4893d1216c\",\n  \"contactFrom\": \"Facebook\",\n  \"invesmentData\": {...},\n \"_id\" : \"58b02dea08215b5500830f8f\",\n \"updatedAt\": \"2017-02-24T12:41:04.282Z\",\n \"createdAt\": \"2017-02-24T12:41:04.282Z\",\n}",          "type": "json"        }      ],      "fields": {        "201": [          {            "group": "201",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Objeto de usuario, tal como lo manda la base de datos.</p>"          },          {            "group": "201",            "type": "String",            "optional": false,            "field": "user._id",            "description": "<p>Id de usuario, generado por la base de datos.</p>"          },          {            "group": "201",            "type": "String",            "optional": false,            "field": "user.updatedAt",            "description": "<p>Estampa de tiempo de la ultima actualizacion.</p>"          },          {            "group": "201",            "type": "String",            "optional": false,            "field": "user.createdAt",            "description": "<p>Estampa de tiempo de cuando fue creado.</p>"          }        ]      }    },    "error": {      "fields": {        "500": [          {            "group": "500",            "type": "String",            "optional": false,            "field": "Error",            "description": "<p>Mensaje de error del servidor, a la hora de crear el usuario.</p>"          }        ]      }    },    "filename": "Inverspot_API/src/api/user/create.js",    "groupTitle": "Usuario"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "Inverspot_API/apidoc/main.js",    "group": "_Users_luisenvilla_Documents_Inverspot_api_node_docker_Inverspot_API_apidoc_main_js",    "groupTitle": "_Users_luisenvilla_Documents_Inverspot_api_node_docker_Inverspot_API_apidoc_main_js",    "name": ""  }] });
