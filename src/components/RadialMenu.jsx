import { useState } from "react";

const RadialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <link rel="stylesheet" href="/styles/radial-menu.css" />
      <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-t from-pink-400 via-red-300 to-yellow-200">
        
        {/* Bouton principal (menu fermé) */}
        {!isOpen && (
          <a
            onClick={toggleMenu}
            className="absolute w-32 h-32 bg-gray-800 rounded-full text-white text-4xl flex items-center justify-center transition-all duration-300 z-10"
            title="Show navigation"
          >
            <span className="fas fa-share-alt"></span>
          </a>
        )}

        {/* Menu circulaire */}
        <ul
          id="menu"
          className={`absolute flex items-center justify-center w-[300px] h-[300px] transition-transform duration-500 ${
            isOpen ? "scale-100 z-20" : "scale-0 z-0"
          }`}
        >
          {/* Bouton pour fermer le menu (croix) */}
          <li
            className="menu-center absolute w-20 h-20 bg-red-600 text-white flex items-center justify-center rounded-full"
            onClick={toggleMenu}
          >
            <span className="fas fa-times text-3xl"></span>
          </li>

          {/* Icônes du menu radial */}
          <li className="menu-item">
            <a href="Home"><span className="fab fa-github"></span></a>
          </li>
          <li className="menu-item">
            <a href="#"><span className="fab fa-facebook"></span></a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RadialMenu;
