const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();

// Configuración de CORS (Cross-Origin Resource Sharing)
app.use(cors({
  origin: 'http://localhost:3000', // Permitir solicitudes desde esta URL
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'], // Métodos HTTP permitidos
  credentials: true, // Permitir el envío de credenciales (cookies, encabezados de autorización, etc.)
}));

// Configuración de Helmet para seguridad HTTP
app.use(helmet());

// Configuración de CSP (Content Security Policy) para prevenir ataques de inyección
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"], // Permitir recursos desde el mismo origen
    imgSrc: ["'self'", " https://www.ciuvo.com"], // Permitir imágenes desde el mismo origen y desde el servidor local
    scriptSrc: ["'self'", "https://trusted.cdn.com"], // Permitir scripts desde el mismo origen y un CDN de confianza
    styleSrc: ["'self'", "https://trusted.cdn.com"], // Permitir estilos desde el mismo origen y un CDN de confianza
  },
}));

app.use(express.json()); // Permitir el procesamiento de datos JSON en el cuerpo de las solicitudes

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/mi_inmobiliaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar con MongoDB', err));

// Ruta para verificar el funcionamiento del servidor
app.get('/', (req, res) => {
  res.send('Servidor está funcionando');
});

// Puerto en el que escuchará la aplicación
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
