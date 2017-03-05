# Inverspot API
**Version 0.1.0**

Inverspot API es una interfaz ligera para la gestion de Inversiones, Usuarios y Propiedades a traves de sus diversas aplicaciones.

## Iniciando.

Inverspot esta configurado para un inicio rapido y seccion de configuraciones generales, ademas esta dise;ado para implementarse en un contenedor para un deploy mas fiable con Docker.

### Requisitos previos

- git
- nodejs
- npm
- mongodb

Es recomendable tener las siguientes versiones, o versiones superiores.
``` bash
node -v
#v6.9.5
```
> El API se desarrollada en esta version.

Nos aseguramos que mongo este iniciado
``` bash
sudo service mongod start
```

### Instalación

Clonamos el repositorio en nuestra sona de trabajo.
```bash
git clone **.git
```
accedemos a la carpeta para instalar los modulos e iniciar el servidor.
```bash
cd api_node_docker/Inverspot_API
npm start
#Server running on port 8080
#--> Database coneccted
```
Ahora vamos con un navegador hacemos una peticion a *http://localhost:8080/*, o en el puerto que nos indique tras iniciar el servidor. Debera mostrar un mensaje *"Bienvenido a Inverspot API"*

> *http://localhost:8080/apidoc/* muestra la documentacion de los endpoints de la API.

## Documentacion

### Estructura de Archivos
```bash
  |-Inverspot_API
  |  |-apidoc
  |  |-config
  |  |-src
  |  |  |-api
  |  |  |  |-auth
  |  |  |  |-builder
  |  |  |  |-investment
  |  |  |  |-property
  |  |  |  |-user
  |  |  |  |-work-progress
  |  |  |-filemanager
  |  |  |-mailing
  |  |  |  |-templates
  |  |-upload
```
### Configuraciones
El servidor esta dise;ado para tener la mayoria de configuraciones agrupadas en la carpeta **Inverspot_API/config**
```bash
|-config
|  |-auth.json
|  |-db.json
|  |-facebook.json
|  |-index.js
|  |-mailing.json
|  |-server.json
```
El archivo index.js sirve para exportar las configuraciones que estan en .JSON al servidor.

#### Base de Datos

```json
{
  "dbCloud":{
    "port"      : 53699,
    "database"  : "inverspot",
    "address"   : "ds153699.mlab.com",
    "user"    : "is_developer",
    "password": "inverspot"
  },
  "dbLocal":{
    "port"      : 27017,
    "database"  : "inverspot",
    "address"   : "127.0.0.1"
  },
  "debug":  true
}
```

## Referencias

[Official Node.js Docker Image](https://hub.docker.com/_/node/)

[Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

[Docker Repo](https://github.com/nodejs/docker-node/tree/90d5e3df903b830d039d3fe8f30e3a62395db37e)

## Create Docker Image
```
docker build -t [name]  .
docker build -t isapi .
```
> NOTA: Si vamos a usar el volumen, ejecutar "npm install" localmente antes de todo ya que el volumen remplaza por completo el directorio de la app

## Docker started
```
docker run -p [Puerto Externo:Puerto Interno] -d --name [Nombre Docker] --link [Nombre Docker db : Nombre interno] -v [Directorio Local:Directorio interno] -t [nombre de la imagen]
docker run -p 8080:8080 -d --name is_api --link is-mongodb:is-mongodb -v ~/Documents/Inverspot/api_node_docker/Inverspot_API:/usr/src/app -t isapi
```
> NOTA: Usando ALPINE no se puede ejecutar "npm start", por lo que el iniciar el docker se ejecuta la aplicación como "node index.js", esto implica que tenemos que instalar localmente y los módulos necesarios, y el volumen de Docker incluirá (no es lo recomendable) node_modules.

##apidoc
Compilar documentacion de la API
```
apidoc -i Inverspot_API/ -o Inverspot_API/apidoc/ -e Inverspot_API/node_modules
```
