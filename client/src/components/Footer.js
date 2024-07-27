import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ p: 2, mt: 'auto', textAlign: 'center', backgroundColor: '#f8f8f8' }}>
      <Typography variant="body1">
        © {new Date().getFullYear()} Mi Inmobiliaria. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        <Link href="/privacidad" color="inherit">Política de Privacidad</Link> | <Link href="/terminos" color="inherit">Términos de Servicio</Link>
      </Typography>
    </Box>
  );
}

export default Footer;
