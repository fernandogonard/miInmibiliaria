import React, { useState, useEffect } from 'react';
import axios from '../api/axios'; // Asegúrate de que la ruta sea correcta
import { Box, Typography, Grid, Card, CardContent, CardMedia, CircularProgress, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const fetchPropiedades = async () => {
  try {
    const response = await axios.get('/api/propiedades'); // Ajusta la URL según tu configuración
    return response.data;
  } catch (error) {
    console.error('Error fetching propiedades:', error);
    return [];
  }
};

function PropiedadListado() {
  const [propiedades, setPropiedades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPropiedades();
      setPropiedades(data);
      setLoading(false);
    };

    loadData();
  }, []);

  // Filtrado de propiedades
  const filteredPropiedades = propiedades.filter((propiedad) => {
    const searchQuery = search.toLowerCase();
    const nombreMatch = propiedad.nombre.toLowerCase().includes(searchQuery);
    const descripcionMatch = propiedad.descripcion.toLowerCase().includes(searchQuery);
    const tipoMatch = filter === 'all' || propiedad.tipo === filter;
    const precioMatch = (!minPrice || propiedad.precio >= parseFloat(minPrice)) && (!maxPrice || propiedad.precio <= parseFloat(maxPrice));

    return (nombreMatch || descripcionMatch) && tipoMatch && precioMatch;
  });

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={3}>
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

      {/* Campo de búsqueda */}
      <TextField
        label="Buscar propiedades"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filtros */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Tipo de Propiedad</InputLabel>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          label="Tipo de Propiedad"
        >
          <MenuItem value="all">Todos</MenuItem>
          <MenuItem value="hotel">Hotel</MenuItem>
          <MenuItem value="edificio">Edificio</MenuItem>
          <MenuItem value="terreno">Terreno</MenuItem>
          {/* Agrega más opciones aquí si es necesario */}
        </Select>
      </FormControl>

      {/* Filtros por precio */}
      <TextField
        label="Precio Mínimo"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <TextField
        label="Precio Máximo"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <Grid container spacing={3}>
        {filteredPropiedades.length > 0 ? (
          filteredPropiedades.map((propiedad) => (
            <Grid item xs={12} sm={6} md={4} key={propiedad._id}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={propiedad.imagen || 'default-image-url.jpg'}
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
                    <Typography variant="h6" component="div">
                      ${propiedad.precio}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary">
            No se encontraron propiedades que coincidan con los criterios de búsqueda.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}

export default PropiedadListado;
