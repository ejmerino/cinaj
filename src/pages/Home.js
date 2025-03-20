import React, { useState, useEffect } from 'react';
import NavbarComponent from '../components/Navbar'; // Asegúrate de tener el Navbar en la ruta correcta
import './styles/Home.css'; // Asegúrate de que la ruta de tu archivo CSS sea correcta

const Home = () => {
  const [opacity, setOpacity] = useState(0); // Inicializamos la opacidad en 0 (imagen completamente visible)

  // Función para manejar el scroll
  const handleScroll = () => {
    const scrollY = window.scrollY; // Distancia de scroll
    const opacityValue = Math.min(scrollY / 300, 0.7); // A medida que se hace scroll, se oscurece más (máximo 0.7 de opacidad)
    setOpacity(opacityValue); // Actualiza el estado de opacidad
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <NavbarComponent />
      {/* Sección de la imagen con opacidad dinámica */}
      <div className="hero-section">
        <div className="hero-overlay" style={{ opacity: opacity }}></div> {/* Capa oscura */}
        <img
          src={require('../assets/fotos/jovenes-leyendo.png')} // Verifica si la ruta es correcta
          alt="Jóvenes leyendo"
          className="hero-image"
          style={{ filter: `brightness(${1 - opacity})` }} // Cambia el brillo con el scroll
        />
        <div className="hero-text">
          <h1>Bienvenidos a CINAJ</h1>
          <p>Este es un texto de prueba para mostrar la funcionalidad.</p>
        </div>
      </div>
      <div className="container mt-4">
        <h1>Contenido Principal</h1>
        {/* Otros componentes o contenido */}
      </div>
    </div>
  );
};

export default Home;
