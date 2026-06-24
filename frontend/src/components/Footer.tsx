function Footer() {
    return (
        <footer className="bg-[#0F172A] text-white py-20 px-10">

            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

                {/* Brand */}
                <div>

                    <h2 className="text-3xl font-bold text-blue-400">
                        EPM
                    </h2>

                    <p className="mt-6 text-gray-400 leading-relaxed">
                        Educación para el Mundo impulsa la inclusión educativa
                        mediante inteligencia artificial y herramientas digitales.
                    </p>

                </div>

                {/* Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-6">
                        Plataforma
                    </h3>

                    <ul className="space-y-4 text-gray-400">
                        <li>Inicio</li>
                        <li>Casos Reales</li>
                        <li>Recursos</li>
                        <li>Contacto</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-xl font-semibold mb-6">
                        Recursos
                    </h3>

                    <ul className="space-y-4 text-gray-400">
                        <li>Guías IA</li>
                        <li>Inclusión</li>
                        <li>Aprendizaje</li>
                        <li>Docentes</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-6">
                        Contacto
                    </h3>

                    <ul className="space-y-4 text-gray-400">
                        <li>epm@educacion.com</li>
                        <li>Colombia</li>
                        <li>Soporte 24/7</li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-500">
                © 2026 EPM - Educación para el Mundo
            </div>

        </footer>
    );
}

export default Footer;