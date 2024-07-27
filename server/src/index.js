const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const propiedadRoutes = require('./routes/propiedades');

const app = express();
app.use(cors());
app.use(express.json()); // Para procesar JSON

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/miinmobiliaria')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB', err));

app.use('/api/propiedades', propiedadRoutes);

app.listen(5000, () => {
  console.log('Servidor en funcionamiento en http://localhost:5000');
});
