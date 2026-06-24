import { motion } from "framer-motion";

const features = [
    {
        icon: "🧠",
        title: "IA Educativa",
        description:
            "Generación automática de guías adaptadas para cada estudiante.",
    },

    {
        icon: "📊",
        title: "Seguimiento",
        description:
            "Monitoreo del progreso y evolución académica.",
    },

    {
        icon: "👨‍🏫",
        title: "Apoyo Docente",
        description:
            "Herramientas diseñadas especialmente para docentes.",
    },

    {
        icon: "🌎",
        title: "Inclusión",
        description:
            "Educación accesible para todos los estudiantes.",
    },
];

function Features() {
    return (
        <section className="py-32 px-10 bg-white">

            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <div className="text-center mb-20">

                    <h2 className="text-5xl font-bold text-gray-800">
                        ¿Por qué EPM?
                    </h2>

                    <p className="mt-6 text-xl text-gray-600">
                        Tecnología e inteligencia artificial para una educación inclusiva.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-[#F8FBFF] border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-xl transition"
                        >

                            <div className="text-6xl mb-6">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800">
                                {feature.title}
                            </h3>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Features;