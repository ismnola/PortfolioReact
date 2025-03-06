import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TestPage from "./pages/TestPage"; // Assurez-vous du bon chemin
import ParallaxPage from "./components/ParallaxPage"; // Import de la page Parallax

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Page principale avec l'effet Parallax */}
        <Route path="/" element={<ParallaxPage />} />
        {/* Page de test pour tester le menu circulaire */}
        <Route path="/test" element={<TestPage />} />
        {/* Autres pages de l'application */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
