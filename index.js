//Importamos y usamos express
const express = require('express');
//importar y usamos mongoose
const mongoose = require('mongoose');

//Creamos una instancia de express
const app = express();
// importacion del midelware
const { isAdminMw } = require('./middleware/admin');
//Despues agregamos el middleware
//app.use(<nombreMiddleware>)
app.use(isAdminMw);
//Imprtamos las rutas creadas
const router = require('./routes/routes');

//crear puerto
const puerto = 8085;

//Permitir que todos los parametros sean en formato JSON
app.use(express.json());

//Usamos la importacion de las rutas
app.use(router);

//Creamos una promesa que se conecta a la base de datos
let promise = mongoose.connect('mongodb://localhost:27017/segundabase');

app.listen(puerto, () => {
    promise
        .then(() => console.log(('Conectado a la base de datos')))
        .catch(() => console.log(('No se pudo conectar a la base de datos')));
    console.log(`Aplicacion arriba sobre el puerto ${puerto}`);
})


