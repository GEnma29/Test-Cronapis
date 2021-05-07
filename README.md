## Test Use Nextjs and MongoDB

[MongoDB Atlas](https://mongodb.com/atlas) Utilizamos la plataforma MongoDB Atlas con la cual nos comunicamos para Crear y borrar datos,
La base de datos tiene esta Esturctura 
```javascript
    {
    "name":"Mi tienda",
    "Direction":"Av. Libertador, Caracas 1064, Distrito Capital",
    "phone":"0212-2639323",
    "email":"mitienda@gmail.com",
    "Location":{ 
        "type":"Point",
        "coordinates":["-104.99404","39.75621"]
        },
    "imageUrl":"https://images.unsplash.com/image",
    }




```

## Configuración 
Necesita incluir la  `MONGODB_URI` and `MONGODB_DB` en un Archivo env.local   
### Run Next.js in development mode 

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```
La app va a estar corriendo en  [http://localhost:3000](http://localhost:3000)

