// src/pages/Galeria.jsx
import { Carousel } from "react-responsive-carousel";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Zoom from 'react-medium-image-zoom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-medium-image-zoom/dist/styles.css';

const categorias = {
  murales: [
    { titulo: "Fuerzas Opuestas", src: "/galeria/murales/mural1.png" },
    { titulo: "La Lucha Está en los Huesos", src: "/galeria/murales/mural2.png" },
    { titulo: "ERYAG", src: "/galeria/murales/mural3.png" },
    { titulo: "Mictlantecuhtli", src: "/galeria/murales/mural4.png" },
  ],
  pinturas: [
    { titulo: "Mapache", src: "/galeria/pinturas/pintura1.jpg" },
    { titulo: "Fiesta en el Arcoíris Marino", src: "/galeria/pinturas/pintura2.jpg" },
    { titulo: "ONI ME", src: "/galeria/pinturas/pintura4.jpg" },
    { titulo: "Jhin, Pergaminos de Shanhai", src: "/galeria/pinturas/pintura5.jpg" },
    { titulo: "Árbol en Soledad", src: "/galeria/pinturas/pintura6.png" },
  ],
  fotografias: [
    { titulo: "Coca Cola", src: "/galeria/fotografias/foto1.png" },
    { titulo: "Andrés", src: "/galeria/fotografias/foto2.png" },
    { titulo: "Provoker", src: "/galeria/fotografias/foto3.png" },
    { titulo: "Cielo Morado", src: "/galeria/fotografias/foto4.png" },
  ],
};

const CategoriaGaleria = ({ titulo, obras, onSeleccionar }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">{titulo}</h2>
    <Carousel showThumbs={false} infiniteLoop autoPlay>
      {obras.map((obra, idx) => (
        <div key={idx} onClick={() => onSeleccionar(obra)} className="cursor-pointer flex justify-center">
          <div className="w-[800px] h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={obra.src}
              alt={`obra-${idx}`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

// Nuevo componente para animar secciones al hacer scroll
const SeccionAnimada = ({ children }) => {
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Galeria() {
  const [obraSeleccionada, setObraSeleccionada] = useState(null);

  return (
    <div className="p-4 max-w-4xl mx-auto relative">
      <SeccionAnimada>
        <CategoriaGaleria titulo="Murales" obras={categorias.murales} onSeleccionar={setObraSeleccionada} />
      </SeccionAnimada>

      <SeccionAnimada>
        <CategoriaGaleria titulo="Pinturas" obras={categorias.pinturas} onSeleccionar={setObraSeleccionada} />
      </SeccionAnimada>

      <SeccionAnimada>
        <CategoriaGaleria titulo="Fotografías" obras={categorias.fotografias} onSeleccionar={setObraSeleccionada} />
      </SeccionAnimada>

      <AnimatePresence>
        {obraSeleccionada && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setObraSeleccionada(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl max-w-2xl w-full text-center shadow-xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">{obraSeleccionada.titulo}</h3>
              <Zoom>
                <img
                  src={obraSeleccionada.src}
                  alt="obra ampliada"
                  className="w-full max-h-[70vh] object-contain rounded-xl"
                />
              </Zoom>
              <button
                onClick={() => setObraSeleccionada(null)}
                className="mt-6 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}