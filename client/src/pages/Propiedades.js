import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CircularProgress } from '@mui/material'; 
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Asegúrate de tener axios instalado

// Reemplaza esta función con la llamada a tu API real
const fetchPropiedades = async () => {
  try {
    const response = await axios.get('/api/propiedades'); // Ajusta la URL según tu configuración
    return response.data;
  } catch (error) {
    console.error('Error fetching propiedades:', error);
    return []; // Devuelve un array vacío en caso de error
  }
};

function PropiedadListado() {
  const [propiedades, setPropiedades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPropiedades();
      setPropiedades(data);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Helmet>
        <title>Listado de Propiedades - Mi Inmobiliaria</title>
        <meta name="description" content="Explora nuestra lista de propiedades disponibles, incluyendo hoteles, edificios, y terrenos en venta y alquiler." />
        <meta name="keywords" content="propiedades, hoteles, edificios, terrenos, venta, alquiler" />
        <meta property="og:title" content="Listado de Propiedades - Mi Inmobiliaria" />
        <meta property="og:description" content="Explora nuestra lista de propiedades disponibles, incluyendo hoteles, edificios, y terrenos en venta y alquiler." />
        <meta property="og:image" content="https://via.placeholder.com/300" />
        <meta property="og:url" content="http://www.miinmobiliaria.com/propiedades" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Typography variant="h4" component="h1" gutterBottom>
        Lista de Propiedades
      </Typography>
      <Grid container spacing={2}>
        {propiedades.map((propiedad) => (
          <Grid item xs={12} sm={6} md={4} key={propiedad._id}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={propiedad.imagen}
                  alt={propiedad.nombre}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    <Link to={`/propiedades/${propiedad._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {propiedad.nombre}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {propiedad.descripcion}
                  </Typography>
                  <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
                    ${propiedad.precio}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PropiedadListado;
