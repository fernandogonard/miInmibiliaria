import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

// URL de la imagen de la empresa
const empresaImagen = 'https://via.placeholder.com/600x300?text=Nuestra+Empresa';

function SobreNosotros() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Sobre Nosotros
      </Typography>
      
      <Card sx={{ mb: 4 }}>
        <CardMedia
          component="img"
          height="300"
          image={empresaImagen}
          alt="Nuestra Empresa"
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            Nuestra Historia
          </Typography>
          <Typography variant="body1" paragraph>
            Fundada en 2020, nuestra empresa se ha dedicado a ofrecer soluciones inmobiliarias excepcionales. Desde nuestros inicios, hemos trabajado para brindar un servicio de calidad, ayudando a nuestros clientes a encontrar propiedades que se ajusten a sus necesidades y objetivos.
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Nuestro Equipo
          </Typography>
          <Typography variant="body1" paragraph>
            Contamos con un equipo de profesionales altamente capacitados y comprometidos con el éxito de nuestros clientes. Cada miembro de nuestro equipo aporta su experiencia y pasión por el sector inmobiliario, trabajando juntos para ofrecer un servicio excepcional.
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="h6" component="div" gutterBottom>
        Nuestra Misión
      </Typography>
      <Typography variant="body1" paragraph>
        Nuestra misión es proporcionar soluciones inmobiliarias que superen las expectativas de nuestros clientes, mediante un servicio personalizado, profesional y transparente. Estamos aquí para hacer que cada transacción inmobiliaria sea una experiencia positiva y exitosa.
      </Typography>
    </Box>
  );
}

export default SobreNosotros;
