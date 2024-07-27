const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const propiedadRoutes = require('./routes/propiedades');

const app = express();

// Configuración de CORS (Cross-Origin Resource Sharing)
app.use(cors()); // Permite solicitudes desde cualquier origen. Puedes configurar opciones específicas si es necesario.

// Middleware para procesar JSON en el cuerpo de las solicitudes
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/miinmobiliaria')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB', err));

// Rutas para el manejo de propiedades
app.use('/api/propiedades', propiedadRoutes);

// Configuración del puerto y escucha del servidor
const PORT = process.env.PORT || 5000; // Usar variable de entorno para el puerto si está disponible
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
