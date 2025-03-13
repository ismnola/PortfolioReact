import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Charger le mode enregistré dans le localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.body.classList.add("dark"); // Appliquer le mode sombre à l'élément body
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark"); // Supprimer le mode sombre
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark"); // Appliquer le mode sombre
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark"); // Supprimer le mode sombre
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
    >
      {darkMode ? "Mode Clair" : "Mode Sombre"}
    </button>
  );
};

export default ThemeToggle;
