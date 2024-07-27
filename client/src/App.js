import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import PropiedadListado from './components/PropiedadListado';
import PropiedadDetalle from './components/PropiedadDetalle';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <title>Enfoque Inmobiliaria</title>
        <meta name="description" content="Descripción de la aplicación" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/propiedades" element={<PropiedadListado />} />
          <Route path="/propiedades/:id" element={<PropiedadDetalle />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
