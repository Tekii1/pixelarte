// src/pages/Contacto.jsx
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const contacto = {
  telefono: "+52 55 6089 0896",
  correo:"cryofthebanshee1@gmail.com",
  direccion: "Ciudad de México, México",
  facebook: "https://www.facebook.com/jessicaanette.gallegosgodinez",
  instagram: "https://www.instagram.com/_galillann_/",
};

function Contacto() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-6 text-pink-600 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contacto
      </motion.h2>

      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-lg mb-2">
          <strong>Teléfono:</strong> {contacto.telefono}
        </p>
        <p className="text-lg">
          <strong>Dirección:</strong> {contacto.direccion}
        </p>
        <p className="text-lg">
          <strong>Correo Electronico:</strong> {contacto.correo}
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.a
          href={contacto.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <FaFacebook size={24} />
          Facebook
        </motion.a>

        <motion.a
          href={contacto.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-pink-600 hover:text-pink-800 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <FaInstagram size={24} />
          Instagram
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Contacto;
