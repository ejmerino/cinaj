import React from "react";

const QuienesSomos = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8 text-center">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          ¿Quiénes Somos?
        </h1>

        {/* Descripción */}
        <p className="text-gray-600 text-lg leading-relaxed">
          Somos el Grupo de Investigación Infancia, Adolescencia y Juventud
          (CINAJ) de la Universidad Politécnica Salesiana. Nuestra misión es
          generar conocimiento y promover el bienestar de niños y jóvenes a
          través de investigaciones interdisciplinarias.
        </p>

        {/* Imagen */}
        <div className="mt-6">
          <img
            src="https://source.unsplash.com/800x400/?team,education"
            alt="Equipo CINAJ"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Sección de valores */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-700">Compromiso</h3>
            <p className="text-gray-600 text-sm">
              Trabajamos con dedicación por el bienestar de la juventud.
            </p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-yellow-700">Innovación</h3>
            <p className="text-gray-600 text-sm">
              Buscamos nuevas formas de mejorar la investigación social.
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-700">Inclusión</h3>
            <p className="text-gray-600 text-sm">
              Promovemos la participación de todas las voces en nuestras
              investigaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
