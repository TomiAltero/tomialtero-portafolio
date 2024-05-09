import React from "react";

function Navbar() {

    return (
        <div className="h-screen w-full bg-white relative flex overflow-hidden">
          <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
              <i className="material-icons">person</i> {/* Icono de usuario */}
            </div>
    
            <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
              <i className="material-icons">folder</i> {/* Icono de proyectos */}
            </div>
    
            <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
              <i className="material-icons">code</i> {/* Icono de skills */}
            </div>
    
            <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
              <i className="material-icons">email</i> {/* Icono de contactame */}
            </div>
          </aside>
    
          <div className="w-full h-full flex flex-col justify-between">
            <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
              <div className="flex flex-shrink-0 items-center space-x-4 text-white"></div>
            </header>
    
            <main className="max-w-full h-full flex relative overflow-y-hidden">
              <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll"></div>
            </main>
          </div>
        </div>
      );
}

export default Navbar;