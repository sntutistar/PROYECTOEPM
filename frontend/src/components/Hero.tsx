import logo from "../assets/logo_solo.png";

function Hero() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-[#EEF5FF] to-[#F8FCFF] pt-40 px-10">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

                {/* LEFT */}
                <div>

                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-500 px-5 py-2 rounded-full mb-8">
                        🎓 IA al servicio de la educación inclusiva
                    </div>

                    <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight text-gray-800">

                        Educación inclusiva impulsada por

                        <span className="block bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                            inteligencia artificial
                        </span>
                    </h1>

                    <p className="mt-10 text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Ayudamos a docentes a crear experiencias de aprendizaje
                        adaptadas para estudiantes con discapacidades cognitivas.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-6 mt-12">

                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition shadow-xl shadow-blue-200">
                            🚀 Empezar ahora
                        </button>

                        <button className="border-2 border-green-300 text-green-500 hover:bg-green-50 px-10 py-5 rounded-2xl text-lg font-semibold transition">
                            📈 Ver casos reales
                        </button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-sm">

                        <div className="text-center">
                            <div className="text-4xl mb-3">👨‍🏫</div>
                            <p className="font-medium text-gray-700">
                                Inclusión
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-3">📚</div>
                            <p className="font-medium text-gray-700">
                                Aprendizaje
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-3">🌱</div>
                            <p className="font-medium text-gray-700">
                                Crecimiento
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-3">🌎</div>
                            <p className="font-medium text-gray-700">
                                Futuro
                            </p>
                        </div>

                    </div>

                </div>

                {/* RIGHT */}
                <div className="flex justify-center">

                    <div className="relative">

                        <div className="absolute inset-0 bg-blue-200 blur-[120px] opacity-40 rounded-full"></div>

                        <img
                            src={logo}
                            alt="EPM"
                            className="relative w-[500px] drop-shadow-2xl"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;