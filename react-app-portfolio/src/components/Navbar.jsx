import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden">
      <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
        <Link to="/home" className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
          <i className="material-icons">home</i> 
        </Link>

        <Link to="/projects" className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
          <i className="material-icons">folder</i> 
        </Link>

        <Link to="/skills" className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
          <i className="material-icons">code</i> 
        </Link>

        <Link to="/contact" className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
          <i className="material-icons">email</i> 
        </Link>
      </aside>

      <div className="w-full h-full flex flex-col justify-between">
        <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
          <div className="flex flex-shrink-0 items-center space-x-4 text-white">
            <h1 className="text-lg font-semibold">Mi Sitio</h1>
            {/* Puedes agregar más elementos de encabezado aquí si lo necesitas */}
          </div>
        </header>

        <main className="max-w-full h-full flex relative overflow-y-hidden">
          {/* Contenido principal */}
        </main>
      </div>
    </div>
  );
}

export default Navbar;
