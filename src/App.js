// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuiénesSomos from './pages/QuienesSomos';
import Estadísticas from './pages/Estadisticas';
import NiñosJóvenes from './pages/NinosJovenes'; // Nuevo componente para Niños y Jóvenes
import Instituciones from './pages/Instituciones';
import Noticias from './pages/Noticias';
import Contactos from './pages/Contactos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuiénesSomos />} />
        <Route path="/estadisticas" element={<Estadísticas />} />
        <Route path="/ninos-y-jovenes" element={<NiñosJóvenes />} /> {/* Ruta combinada */}
        <Route path="/instituciones" element={<Instituciones />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </Router>
  );
};

export default App;
