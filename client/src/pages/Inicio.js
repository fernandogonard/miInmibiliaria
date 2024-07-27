import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaHome, FaDollarSign, FaKey, FaCogs } from 'react-icons/fa';

// Datos de ejemplo para el carrusel
const imagenesDestacadas = [
  './assets/apartamento-terraza.jpg',
  'src/assets/Casa_de_turismo_rural.jpg',
  'src/assets/hotel-centro.jpg'
];

function Inicio() {
  const carouselSettings = {
    autoplay: true,
    infinite: true,
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box sx={{ p: 2 }}>
      <Helmet>
        <title>Inicio - Mi Inmobiliaria</title>
        <meta name="description" content="Bienvenido a Mi Inmobiliaria. Explora nuestras propiedades y servicios para la compra, venta y alquiler de hoteles, edificios, y departamentos." />
        <meta name="keywords" content="inmobiliaria, hoteles, edificios, departamentos, compra, venta, alquiler" />
      </Helmet>
      
      {/* Carrusel de Imágenes Destacadas */}
      <Box sx={{ mb: 4 }}>
        <Carousel {...carouselSettings}>
          {imagenesDestacadas.map((img, index) => (
            <Paper key={index} sx={{ height: '400px', width: '100%', backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3" component="div" color="white" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', p: 2, borderRadius: 1 }}>
                  Explora Nuestros Proyectos
                </Typography>
              </Box>
            </Paper>
          ))}
        </Carousel>
      </Box>

      <Typography variant="h4" component="h1" gutterBottom>
        Bienvenido a Mi Inmobiliaria
      </Typography>
      <Typography variant="body1" paragraph>
        En nuestra inmobiliaria, te ofrecemos una selección de las mejores propiedades para compra y alquiler. Desde hoteles de lujo hasta edificios con vistas panorámicas y terrenos ideales para desarrollo, tenemos lo que necesitas para encontrar la solución perfecta para tus necesidades.
      </Typography>
      
      {/* Sección de Servicios */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <FaHome size={40} color="primary" />
            <Typography variant="h6" gutterBottom>
              Compra
            </Typography>
            <Typography variant="body2">
              Encuentra propiedades ideales para invertir y expandir tu portafolio. Desde lujosos hoteles hasta modernos edificios.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <FaDollarSign size={40} color="primary" />
            <Typography variant="h6" gutterBottom>
              Venta
            </Typography>
            <Typography variant="body2">
              Vende tus propiedades con la ayuda de nuestros expertos en el mercado inmobiliario para obtener el mejor precio.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <FaKey size={40} color="primary" />
            <Typography variant="h6" gutterBottom>
              Alquiler
            </Typography>
            <Typography variant="body2">
              Explora nuestras opciones de alquiler flexibles para satisfacer tus necesidades residenciales o comerciales.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <FaCogs size={40} color="primary" />
            <Typography variant="h6" gutterBottom>
              Gestión de Propiedades
            </Typography>
            <Typography variant="body2">
              Servicios integrales para la administración de tus propiedades, asegurando un mantenimiento y gestión eficiente.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Testimonios */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Testimonios de Nuestros Clientes
        </Typography>
        <Typography variant="body1" paragraph>
          "La experiencia con Mi Inmobiliaria ha sido excelente. Encontré el hotel perfecto para mi inversión y el proceso fue muy sencillo." - Juan Pérez
        </Typography>
        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          "El equipo de Mi Inmobiliaria nos ayudó a vender nuestra propiedad rápidamente y al mejor precio. Muy recomendables." - Ana Gómez
        </Typography>
      </Box>

      {/* Botón CTA */}
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" component={Link} to="/propiedades">
          Ver Propiedades
        </Button>
      </Box>
    </Box>
  );
}

export default Inicio;
