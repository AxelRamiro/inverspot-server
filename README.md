## Referencias

[Official Node.js Docker Image](https://hub.docker.com/_/node/)

[Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

[Docker Repo](https://github.com/nodejs/docker-node/tree/90d5e3df903b830d039d3fe8f30e3a62395db37e)

## Create Docker Image
```
docker build -t [name]  .
```
## Docker started
```
docker run -p 8080:8080 -d --name is_api -v ~/Documents/Inverspot/api_node_docker/Inverspot_API:/usr/src/app -t isapi
```
> NOTA: Usando ALPINE no se puede ejecutar "npm start", por lo que el iniciar el docker se ejecuta la aplicación como "node index.js", esto implica que tenemos que instalar localmente y los módulos necesarios, y el volumen de Docker incluirá (no es lo recomendable) node_modules.
