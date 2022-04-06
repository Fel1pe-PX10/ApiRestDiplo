/* node nativo
// Importar modulos
const os = require('os');

//Cargar el modulo
var http = require('http');
const { Console } = require('console');

//Crear el servidor
//Necesitamos utilizar la instancia http creara para llamar el metodo
// se puede enlazar al puerto donde lo desee levantar por medio de listen
http.createServer( function(request, response){
    response.writeHead( 200, { 'Content-Type': 'text/plain' } );
    response.end('Hola a todos');
}).listen(8081);

console.log('el servidor esta corriendo en el puerto 8081');
*/

// Se importa y usa express 
const express = require('express');
const { json } = require('express/lib/response');

// Importar Mongoose
const mongoose = require('mongoose');



// Se crea una instancia de express
const routes = express();

// crear promsea a la conexión a mongo (base de datos)
let promise = mongoose.connect('mongodb://localhost:27017/segundabase');

// Crear esquema de vehiculo
const automovilesSchema = mongoose.Schema({
    modelo: Number,
    color: String,
    marca:String,
    tipo: String
});

// Modelo en mongoose
const automovilesModel = mongoose.model('automoviles', automovilesSchema);

// Todos los parsea a json
routes.use(express.json());



// Se agrega el middleware
// Creación del primer middleware 
function isAdminMw(req, res, next){

    if(req.headers.isadmin === undefined){
        res.status(500).send('Internal error server');
    }
    else if(JSON.parse(req.headers['isadmin'])){
        // Si es admin continua a la ruta 
        next();
    }
    else{
        // Si no no pasa y devuelve error
        res.status(403).send('Forbidden access error');
    }

}

routes.use(isAdminMw);

// Rutas
// routes.<method>(<route>, <controler>)
routes.post('/', (request, response) => {

    // Me permite mostrar la información de las variables
    //console.log(request.body);
    
    // Este objeto me crea el nuevo modelo con base al body
    const nuevoAutomovil = {
        modelo: request.body.modelo,
        color: request.body.color,
        marca: request.body.marca,
        tipo: request.body.tipo
    }

    // Crear constante instanciando el modelo
    const automovil = new automovilesModel(nuevoAutomovil);

    // guardar el modelo que se creo en la base de datos

    automovil.save( (error, resp) => {
        response.json(resp);
    });

});


routes.get('/', (request, response) => {
    
    automovilesModel.find({ }, function(req, resp) {
        response.send(resp);
    });
    //response.send('ruta para operación leer VB Get');

    // Agrecacion para sumar

    
});
routes.get('/:color([a-z]+)/:modelo([0-9]{4})', (request, response) => {
    
    automovilesModel.find({ color: request.params.color, modelo: request.params.modelo}, (err, res) => {
        response.json(res);
    });
    // const modelo = request.params.modelo;
    // const color = request.params.color;
    //response.send(`ruta para Color: ${color} Modelo: ${modelo}`);
});
routes.get('/color/:color/modelo/:modelo', (request, response) => {
    automovilesModel.find({ color: request.params.color, modelo: request.params.modelo}, (err, res) => {
        response.json(res);
    });
    /* const modelo = request.params.modelo;
    const color = request.params.color;
    response.send(`ruta para Color-> ${color} Modelo-> ${modelo}`); */
});
routes.get('/:modelo([0-9]{4})', (request, response) => {
    
    automovilesModel.find({ modelo: request.params.modelo}, (err, res) => {
        response.json(res);
    });
    // const modelo = request.params.modelo;
    // const color = request.params.color;
    //response.send(`ruta para Color: ${color} Modelo: ${modelo}`);
});
routes.get('/:color([a-z]+)', (request, response) => {
    
    automovilesModel.find({ color: request.params.color,}, (err, res) => {
        response.json(res);
    });

    // const modelo = request.params.modelo;
    // const color = request.params.color;
    //response.send(`ruta para Color: ${color} Modelo: ${modelo}`);
});






routes.put('/', (request, response) => {
    response.send('ruta para operación actualizar VB Put');
});


routes.delete('/', (request, response) => {
    response.send('ruta para operación eliminar VB Delete');
});
routes.delete('/modelo/:modelo', (request, response) => {
    
    const requestModelo    = request.params.modelo;
    automovilesModel.deleteMany({ color: requestModelo }, (req, res) => {
        response.send(res);
    });

});
routes.delete('/color/:color', (request, response) => {

    //console.log(request.params);
    
    const requestColor    = request.params.color;
    automovilesModel.deleteMany({ color: requestColor }, (req, res) => {
        response.send(res);
    });
});
routes.delete('/modelo/:modelo/color/:color', (request, response) => {
    
    const requestColor   = request.params.color;
    const requestModelo  = request.params.modelo;
    automovilesModel.deleteMany({ color: requestColor, modelo: requestModelo }, (req, res) => {
        response.send(res);
    });
    
});


routes.get('*', (req, resp) => {
    resp.send('pagina no encontrada');
});


// se crea un puerto para espress
routes.listen(8085, () => {
    
    // Valida por medio de la promsea la conexión a mongo
    promise
        .then( () => console.log('Conectado a la base de datos') )
        .catch( () => console.error('No se pudo conectar a la base de datos') );
    
    console.log('aplicacion sobre el puerto 8085');

});





