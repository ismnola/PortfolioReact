import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Present from "./pages/Presentation";
import Cali from "./pages/Calistenics";
import Info from "./pages/Informatique";
import Contact from "./pages/Contact";
import TestPage from "./pages/TestPage"; 
import ParallaxPage from "./components/ParallaxPage"; 

const Loader = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
    <p className="mt-4 text-lg font-semibold">Chargement...</p>
  </div>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (  
    <Router>
      <Routes>
        <Route path="/" element={<ParallaxPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/Presentation" element={<Present />} />
        <Route path="/Calistenics" element={<Cali />} />
        <Route path="/Informatique" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
