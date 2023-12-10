# NextJs Teslo Shop
Para correr localmente se necesita la base de datos
```
docker-compose up -d
```
*El -d significa __detached__

#Configurar variables de entorno
Renombrar el archivo .env.template a .env y configurar las variables de entorno

*MongoDB URL Local:
```
MONGO_URL=mongodb://localhost:27017/ecommercedb
```

Reconstruir el proyecto los modulos de node y levantar NextJs
```
yarn install
yarn dev
```

Llenar la base de datos con informacion de prueba
```
Llamar al endpoint: http://localhost:3000/api/seed
```