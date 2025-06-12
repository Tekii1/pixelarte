import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-pink-500 text-white p-4 shadow-md">
      <ul className="flex gap-6 justify-center text-lg font-semibold">
        <li>
          <Link to="/" className="hover:underline">Inicio</Link>
        </li>
        <li>
          <Link to="/galeria" className="hover:underline">Galería</Link>
        </li>
        <li>
          <Link to="/sobremi" className="hover:underline">Sobre mí</Link>
        </li>
        <li>
          <Link to="/contacto" className="hover:underline">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
