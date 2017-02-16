## /user
### POST: /user

- Recibe datos de nuevo usuario
- crea usuario en DB
  - encripta contrasena
  - crea token
- emite mail Token

### ... (DELETE,GET,PUT)

> al actualizar el status del usuario eliminar token (se puede hacer directamente en el modelo con un presave)

## /auth
### POST /auth/singup/
> Crear usuario normal pero sin necesidad de token se sesion y Facebook

### POST: /auth
- recibe datos de acceso (email y contrasena)
- valida datos y regresa JWT

### GET: /auth/verify/:TOKEN
- Recibe el TOKEN
- Elimino Token y actualizo status de usuario
- Regreso JWT

### GET: /auth/recovery/
- Recibe el email por Query
- Busca usuario y actualiza el token
- emite email token

### GET: /auth/recovery/
- recibe token y contrasena por Query
- actualiza los datos del usuario
- elimina el token
- regresa JWT

## Propiedades
> LAS PROPIEDADES TIENENE LINK A BUILDER

### GET: property/?query
- Regresa todas las Propiedades
- o regresa las Propiedades segun query.

### POST: property/
- Datos de propiedades

### DELETE

### PUT(CRUD)

### POST /property/:id/work-progress/ (CRUD)
> NOTA: Todos los queris podran tener SORT, filter, select, limit

> MULTER PARA IMAGENES

> arreglo de arreglos para tabla dinamica

## /builder (CRUD)

## /investment/
### (CRUD)

### POST /investment/
> actualizar acciones de propiedad al crear o eliminar inversion, cambiar estatus a fondeado al llegar a las acciones restantes (presave de las propiedades)
