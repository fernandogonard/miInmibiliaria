import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Mi Inmobiliaria
        </Typography>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/propiedades">Propiedades</Button>
        <Button color="inherit" component={Link} to="/sobre-nosotros">Sobre Nosotros</Button>
        <Button color="inherit" component={Link} to="/contacto">Contacto</Button>
        <Button color="inherit" component={Link} to="/blog">Blog</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
