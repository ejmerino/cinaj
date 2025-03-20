import React from "react";

const NinosJovenes = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <img
          src={require("../assets/utils/construccion.png")}
          alt="Página en construcción"
          className="w-full h-64 object-cover rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

export default NinosJovenes;
