import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 text-white px-6">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenido a <span className="underline decoration-white/70">PixelArte</span>
      </motion.h1>

      <motion.p
        className="max-w-xl text-center text-lg md:text-xl mb-10 drop-shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Explora el talento de nuestros artistas y descubre obras de arte únicas en diseño digital, pintura, fotografía y murales.
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
