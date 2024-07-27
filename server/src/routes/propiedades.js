const express = require('express');
const Propiedad = require('../models/Propiedad');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const propiedades = await Propiedad.find();
    res.json(propiedades);
  } catch (error) {
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
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
