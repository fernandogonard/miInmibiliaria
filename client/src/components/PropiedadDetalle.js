import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import Slider from 'react-slick';
import YouTube from 'react-youtube';
import axios from '../api/axios'; // Asegúrate de que esta instancia está correctamente configurada

import './PropiedadDetalle.css'; // Verifica que el archivo existe y está en la ubicación correcta

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function PropiedadDetalle() {
  const { id } = useParams();
  const [propiedad, setPropiedad] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchPropiedad = async () => {
      try {
        const response = await axios.get(`/api/propiedades/${id}`); // Asegúrate de que la URL es correcta
        setPropiedad(response.data);
      } catch (error) {
        console.error('Error fetching propiedad:', error);
        setError('No se pudo encontrar la propiedad.');
      } finally {
        setLoading(false);
      }
    };

    fetchPropiedad();
  }, [id]);

  if (loading) {
    return (
      <Box className="loading-container">
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return <Typography variant="h6">{error}</Typography>;
  }

  if (!propiedad) {
    return <Typography variant="h6">Propiedad no encontrada</Typography>;
  }

  return (
    <Box className="propiedad-container">
      <Typography variant="h4" component="h1" gutterBottom>
        {propiedad.nombre}
      </Typography>
      
      <Typography variant="h6" component="h2">
        ${propiedad.precio}
      </Typography>
      
      <Typography variant="body1" paragraph>
        {propiedad.descripcion}
      </Typography>

      {/* Carrusel de imágenes */}
      <Slider {...carouselSettings}>
        {propiedad.imagenes && propiedad.imagenes.length > 0 ? (
          propiedad.imagenes.map((image, index) => (
            <img src={image} alt={`Imagen ${index + 1}`} key={index} className="carousel-image" />
          ))
        ) : (
          <Typography variant="body1">No hay imágenes disponibles</Typography>
        )}
      </Slider>

      {/* Video */}
      {propiedad.video && (
        <Box className="video-container">
          <Typography variant="h6">Video</Typography>
          <YouTube videoId={propiedad.video} opts={{ height: '390', width: '640' }} />
        </Box>
      )}
    </Box>
  );
}

export default PropiedadDetalle;
