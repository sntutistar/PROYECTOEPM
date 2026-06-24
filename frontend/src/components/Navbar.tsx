import logo from "../assets/logo_solo.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between px-10 py-5 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 fixed top-0 z-50">

            {/* Logo */}
            <div className="flex items-center gap-4">
                <img
                    src={logo}
                    alt="EPM Logo"
                    className="w-16 object-contain"
                />

                <div>
                    <h1 className="text-3xl font-bold text-blue-500">
                        EPM
                    </h1>

                    <p className="text-[10px] tracking-widest text-green-400 uppercase">
                        Educación para el mundo
                    </p>
                </div>
            </div>

            {/* Links */}
            <ul className="hidden md:flex gap-12 text-gray-700 font-medium">

                <li>
                    <Link
                        to="/"
                        className="hover:text-blue-500 transition"
                    >
                        Inicio
                    </Link>
                </li>

                <li>
                    <Link
                        to="/casos"
                        className="hover:text-blue-500 transition"
                    >
                        Casos Reales
                    </Link>
                </li>

                <li>
                    <Link
                        to="/recursos"
                        className="hover:text-blue-500 transition"
                    >
                        Recursos
                    </Link>
                </li>

                <li>
                    <Link
                        to="/contacto"
                        className="hover:text-blue-500 transition"
                    >
                        Contacto
                    </Link>
                </li>

            </ul>

            {/* Button */}
            <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl transition shadow-lg shadow-blue-200"
            >
                Iniciar Sesión
            </Link>
        </nav>
    );
}

export default Navbar;