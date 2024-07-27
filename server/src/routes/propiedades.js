const express = require('express');
const Propiedad = require('../models/Propiedad');
const helmet = require('helmet'); // Importa helmet para la seguridad
const router = express.Router();

// Middleware de seguridad para las rutas
router.use(helmet());

// Obtener todas las propiedades
router.get('/', async (req, res) => {
  try {
    const propiedades = await Propiedad.find();
    res.json(propiedades);
  } catch (error) {
    console.error('Error al obtener las propiedades:', error);
    res.status(500).json({ message: 'Error al obtener las propiedades' });
  }
});

// Crear una nueva propiedad
router.post('/', async (req, res) => {
  const propiedad = new Propiedad(req.body);
  try {
    const nuevaPropiedad = await propiedad.save();
    res.status(201).json(nuevaPropiedad);
  } catch (error) {
    console.error('Error al crear la propiedad:', error);
    res.status(400).json({ message: error.message });
  }
});

// Obtener una propiedad por ID
router.get('/:id', async (req, res) => {
  try {
    const propiedad = await Propiedad.findById(req.params.id);
    if (!propiedad) return res.status(404).json({ message: 'Propiedad no encontrada' });
    res.json(propiedad);
  } catch (error) {
    console.error('Error al obtener la propiedad:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
