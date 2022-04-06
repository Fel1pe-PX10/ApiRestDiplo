const express = require('express');
//Usamos el Router de express
const rutas = express.Router();

const automovilControlador = require('../controllers/automovil.controller');

rutas.get('/', automovilControlador.listarTodosController);
rutas.get('/modelo/:modelo', automovilControlador.listarModeloController);
rutas.get('/color/:color', automovilControlador.listarColorController);
rutas.get('/color/:color([a-z]+)/modelo/:modelo([0-9]{4})', automovilControlador.listarColorModeloController);

rutas.delete('/modelo/:modelo', automovilControlador.eliminarModeloController);
rutas.delete('/color/:color', automovilControlador.eliminarColorController);
rutas.delete('/modelo/:modelo/color/:color', automovilControlador.eliminarModeloColorController);

rutas.get('*', (req, res) => {
    res.send('Pagina no encontrada', 404);
})

module.exports = rutas;