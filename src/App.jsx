import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Galeria from "./pages/Galeria";
import SobreMi from "./pages/SobreMi";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";

function App() {
  return (
      <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />

      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <footer className="bg-pink-200 text-center p-4 text-sm text-black">
        © {new Date().getFullYear()} PixelArte. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;