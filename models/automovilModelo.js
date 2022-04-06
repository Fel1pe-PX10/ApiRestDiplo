const mongoose = require("mongoose");
mongoose.set('debug', function (coll, method, query, doc) {
    console.log(query);
});

// Importacion de esquema
const automovilesSchema = require("../schemas/automovilesEsquema");

// Declaración de modelo
const automovilesModelo = mongoose.model("automoviles", automovilesSchema);


 module.exports = {
    automovilesModelo
};