import React from 'react';
import ReactDOM from 'react-dom/client'; // Importar desde 'react-dom/client' para React 18
import './index.css'; // Estilos CSS
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importación de Bootstrap

// Crear el "root" de la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar el componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
