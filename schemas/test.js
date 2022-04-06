const mongoose = require("mongoose");

//Crear un esquema de Vehiculo
const automovilesEsquema = mongoose.Schema(
  {
    modelo: Number,
    color: String,
    marca: String,
    tipo: String,
  },
  {
    versionKey: false,
  }
);

module.exports = {
    automovilesEsquema2
}