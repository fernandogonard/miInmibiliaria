import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function ContactoForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar lógica para enviar el formulario
    alert('Formulario enviado');
  };

  return (
    <Box component="form" sx={{ p: 2 }} onSubmit={handleSubmit}>
      <TextField label="Nombre" variant="outlined" fullWidth margin="normal" required />
      <TextField label="Correo Electrónico" variant="outlined" fullWidth margin="normal" type="email" required />
      <TextField label="Mensaje" variant="outlined" fullWidth margin="normal" multiline rows={4} required />
      <Button type="submit" variant="contained" color="primary">Enviar</Button>
    </Box>
  );
}

export default ContactoForm;
