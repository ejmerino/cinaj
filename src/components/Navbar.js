import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importamos el archivo CSS
import logo from '../assets/logos/logo-ups.png'; // Importamos la imagen

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controla el estado del menú

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid">
        {/* Logo de CINAJ */}
        <Link className="navbar-brand" to="/">
            <img src={logo} alt="CINAJ Logo" className="logo-img" />
        </Link>

        {/* Botón de menú hamburguesa en dispositivos pequeños */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quienes-somos">Quiénes Somos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/estadisticas">Estadísticas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ninos-y-jovenes">Niños y Jóvenes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/instituciones">Instituciones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/noticias">Noticias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactos">Contactos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
