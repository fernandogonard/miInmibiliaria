import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Si tienes estilos globales, importalos aquí
const root = createRoot(document.getElementById('root'));
root.render(<App />);