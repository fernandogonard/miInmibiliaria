const mongoose = require('mongoose');

const propiedadSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  precio: Number,
  tipo: String,
  imagen: String
});

module.exports = mongoose.model('Propiedad', propiedadSchema);
