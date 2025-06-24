// src/pages/Inicio.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const navigate = useNavigate();
export default function Inicio() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center text-pink-300 px-6"
      style={{ backgroundImage: "url('/galeria/logo/inicio.jpg')" }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenid@ a <span className="underline decoration-pink-300/70">mi Portafolio</span>
      </motion.h1>

      <motion.p
        className="max-w-xl text-center text-lg md:text-xl mb-10 drop-shadow-md text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Mi nombre es Jessica Anette Gallegos Godinez pero mi nombre de artista es Galillann,
        descubre obras de arte únicas en diseño digital, pintura, fotografía y murales.
      </motion.p>

      <motion.button
        className="bg-white text-pink-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-pink-50 hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/galeria")}
      >
        Ver Galería
      </motion.button>
    </div>
  );
}