import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Componente Error Boundary para capturar errores en los componentes hijos
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de error.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio de informes de errores aquí
    console.error("Error en el componente:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de error personalizada aquí
      return <h1>Algo salió mal.</h1>;
    }

    return this.props.children; 
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
