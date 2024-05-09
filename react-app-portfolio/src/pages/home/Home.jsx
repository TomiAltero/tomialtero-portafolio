import React from "react";

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">¡Bienvenido a mi sitio web!</h1>
      <p className="text-lg mb-4">Aquí puedes encontrar información sobre mis proyectos, habilidades y cómo contactarme.</p>
      <img src="/path/to/image.jpg" alt="Imagen de inicio" className="w-full max-w-lg mx-auto mb-8" />
      <ul className="list-disc ml-8">
        <li>Proyectos</li>
        <li>Habilidades</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
}

export default Home;
