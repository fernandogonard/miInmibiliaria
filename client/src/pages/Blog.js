import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Blog() {
  return (
    <Container>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body1" paragraph>
          Lee nuestros últimos artículos sobre el mercado inmobiliario. En esta sección, encontrarás 
          análisis de tendencias, consejos para compradores y vendedores, y noticias sobre el 
          sector inmobiliario.
        </Typography>
        {/* Agregar más contenido dinámico aquí, como una lista de artículos o entradas del blog */}
      </Box>
    </Container>
  );
}

export default Blog;
