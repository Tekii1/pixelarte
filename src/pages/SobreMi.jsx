// src/pages/SobreMi.jsx
import { motion } from "framer-motion";

const artista = {
  nombreArtista: "GALILLANN",
  sobreMi: `Mi nombre es Jessica Anette Gallegos Godinez, soy diseñadora gráfica con mucho amor al color rosa y a My Melody de Sanrio. Mi nombre de artista es GALILLANN, una combinación de Gallegos y Anette.

Una de las cosas que más disfruto hacer es escuchar música, todo lo hago con música desde que despierto e incluso para dormir. Escucho de todo y todo me gusta, sin embargo mis artistas favoritos son Homeshake, Puma Blue y Provoker.

También me gustan mucho los videojuegos, crecí muy cerca de ellos gracias a mis hermanos mayores, principalmente juego League of Legends y soy main Twitch.

Me desempeño completamente en la pintura, he pintado desde muy joven y decidí casarme con la pintura.`
};

function SobreMi() {
  const parrafos = artista.sobreMi.split("\n");

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-6 text-pink-600 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {artista.nombreArtista}
      </motion.h2>

      {parrafos.map((parrafo, idx) => (
        <motion.p
          key={idx}
          className="text-lg mb-4 text-justify"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * idx, duration: 0.5 }}
        >
          {parrafo}
        </motion.p>
      ))}
    </div>
  );
}

export default SobreMi;