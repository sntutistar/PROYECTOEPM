function Stats() {
    return (
        <section className="py-24 px-10 bg-gradient-to-r from-blue-500 to-green-400 text-white">

            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

                <div>
                    <h2 className="text-5xl font-bold">+500</h2>
                    <p className="mt-4 text-lg">
                        Docentes beneficiados
                    </p>
                </div>

                <div>
                    <h2 className="text-5xl font-bold">+2000</h2>
                    <p className="mt-4 text-lg">
                        Estudiantes apoyados
                    </p>
                </div>

                <div>
                    <h2 className="text-5xl font-bold">+150</h2>
                    <p className="mt-4 text-lg">
                        Instituciones
                    </p>
                </div>

                <div>
                    <h2 className="text-5xl font-bold">24/7</h2>
                    <p className="mt-4 text-lg">
                        Asistencia IA
                    </p>
                </div>

            </div>

        </section>
    );
}

export default Stats;