import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Ajusta esta URL según tu configuración
});

export default instance;

