// Footer.js
import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Asegúrate de que los estilos de Font Awesome estén importados

import logo from '../assets/logos/logo-ups-blanco.png'; // Ruta del logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <a href="https://www.ups.edu.ec/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo}
              alt="Logo CINAJ"
              className="footer-logo-img"
            />
          </a>
        </div>

        {/* Redes Sociales */}
        <div className="footer-socials">
          <a
            href="https://www.facebook.com/EcosistemaInvestigacionUPS"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/investigacionups/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://x.com/EcosistemaUps"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.tiktok.com/@ecosistemaups"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>Copyright © Universidad Politécnica Salesiana 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
