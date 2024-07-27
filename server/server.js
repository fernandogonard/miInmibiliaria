const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const app = express();

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,
}));

// Configuración de CSP
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"], // Permitir recursos desde el mismo origen
    imgSrc: ["'self'", "http://localhost:5000"], // Permitir imágenes desde el mismo origen y desde el servidor local
    scriptSrc: ["'self'", "https://trusted.cdn.com"], // Permitir scripts desde el mismo origen y un CDN de confianza
    styleSrc: ["'self'", "https://trusted.cdn.com"], // Permitir estilos desde el mismo origen y un CDN de confianza
  },
}));

app.use(express.json()); // Permite procesar JSON

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/mi_inmobiliaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Ruta para verificar el servidor
app.get('/', (req, res) => {
  res.send('Servidor está funcionando');
});

// Puerto en el que escuchará la aplicación
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
