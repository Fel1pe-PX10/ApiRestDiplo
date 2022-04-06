// Importacion del servicio
const servicios = require("../services/automovil.service");

// Metodos
const listarTodosController = (req, resp) => {
    servicios.buscarTodos(req, resp)
};

const listarModeloController = (req, resp) => {
    servicios.listarModelo(req, resp)
};

const listarColorController = (req, resp) => {
    servicios.listarColor(req, resp);
};

const listarColorModeloController = (req, resp) => {
    servicios.listarColorModelo(req, resp)
};

const eliminarModeloController = (req, resp) => {
    servicios.eliminarModelo(req, resp)
};
const eliminarColorController = (req, resp) => {
    servicios.eliminarColor(req, resp)
};
const eliminarModeloColorController = (req, resp) => {
    servicios.eliminarColorModelo(req, resp);
};

// Exportaciones
module.exports = {
    listarTodosController,
    listarModeloController,
    listarColorController,
    listarColorModeloController,
    eliminarModeloController,
    eliminarModeloColorController,
    eliminarColorController
}
