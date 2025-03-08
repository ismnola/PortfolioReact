import { useState } from "react";
import { motion } from "framer-motion";

const RadialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation des éléments du menu radial
  const itemVariants = {
    open: (index) => ({
      opacity: 1,
      scale: 1,
      x: 100 * Math.cos((index * 2 * Math.PI) / 4),
      y: 100 * Math.sin((index * 2 * Math.PI) / 4),
      transition: { delay: index * 0.1, type: "spring", stiffness: 100 },
    }),
    closed: {
      opacity: 0,
      scale: 0,
      x: 0,
      y: 0,
      rotate: 0, // Retour à la position de départ
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <>
      <link rel="stylesheet" href="/styles/radial-menu.css" />
      <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
        {/* Menu radial */}
        <motion.ul
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="absolute flex items-center justify-center w-64 h-64"
        >
          {["🏠", "📧", "⭐", "⚙️"].map((icon, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={itemVariants}
              className="absolute w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer z-20 hover:bg-gray-200"
            >
              {icon}
            </motion.li>
          ))}
        </motion.ul>

        {/* Bouton hamburger placé au centre */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`ham-menu ${isOpen ? "active" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default RadialMenu;
