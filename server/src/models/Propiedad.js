const mongoose = require('mongoose');
const { isURL } = require('validator'); // Importar un validador para URLs

// Definir el esquema de Propiedad
const propiedadSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: [true, 'El nombre es obligatorio'], // Mensaje de error personalizado
    trim: true // Elimina los espacios en blanco al principio y al final
  },
  descripcion: { 
    type: String, 
    trim: true // Elimina los espacios en blanco al principio y al final
  },
  precio: { 
    type: Number, 
    required: [true, 'El precio es obligatorio'], // Mensaje de error personalizado
    min: [0, 'El precio debe ser un número positivo'] // Validación del valor mínimo
  },
  tipo: { 
    type: String, 
    enum: ['hotel', 'edificio', 'cabaña', 'departamento'], // Enum para valores permitidos
    required: [true, 'El tipo es obligatorio'] // Mensaje de error personalizado
  },
  imagen: { 
    type: String, 
    validate: {
      validator: function(value) {
        return isURL(value); // Validar que la imagen sea una URL válida
      },
      message: 'La URL de la imagen no es válida' // Mensaje de error personalizado
    }
  }
});

// Exportar el modelo
module.exports = mongoose.model('Propiedad', propiedadSchema);
