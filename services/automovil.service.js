// Importacion de modelos

const { automovilesModelo } = require("../models/automovilModelo");


const automovilModelo = automovilesModelo;


const buscarTodos = (request, response) => {
    automovilModelo.find((err, resp) => {
            response.json(resp); 
        })
}

const listarModelo = (req, response) => {
    const modelo = req.params.modelo;
    console.log('modelo: ', modelo);
    automovilModelo.find({modelo: modelo}, (err, resp) => {
        console.log(resp);
        response.json(resp);
    });
}

const listarColor = (req, response) => {
    const color = req.params.color;
    automovilModelo.find({ color: req.params.color }, (err, resp) => {
        //console.log(err);
        response.json(resp);
    });
  };

const listarColorModelo = (request, response) => {
    console.log(request.params.color, request.params.modelo);
    automovilModelo.find({ color: request.params.color, modelo: request.params.modelo}, (err, res) => {
        response.json(res);
    });
}

const eliminarModelo = (request, response) => {
    const requestModelo    = request.params.modelo;
    automovilModelo.deleteMany({ color: requestModelo }, (req, res) => {
        response.send(res);
    });
}

const eliminarColor = (request, response) => {
    const requestColor    = request.params.color;
    automovilModelo.deleteMany({ color: requestColor }, (req, res) => {
        response.send(res);
    });
}

const eliminarColorModelo = (request, response) => {
    const requestColor   = request.params.color;
    const requestModelo  = request.params.modelo;
    automovilModelo.deleteMany({ color: requestColor, modelo: requestModelo }, (req, res) => {
        response.send(res);
    });
}

module.exports = {
    buscarTodos,
    listarModelo,
    listarColor,
    listarColorModelo,
    eliminarModelo,
    eliminarColor,
    eliminarColorModelo
}