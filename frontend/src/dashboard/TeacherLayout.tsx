import {
    useState,
} from "react";

import logo from "../assets/logo_solo.png";

import StudentWizard from "./student-wizard/StudentWizard";

import RegisteredStudents from "./RegisteredStudents";

function TeacherLayout() {
    const [section, setSection] =
        useState("home");

    return (
        <div className="flex">

            {/* Sidebar */}
            <aside className="w-[320px] min-h-screen bg-white border-r border-gray-100 shadow-sm p-8">

                {/* Logo */}
                <div className="flex flex-col items-center mb-14">

                    <img
                        src={logo}
                        alt="EPM"
                        className="w-44 drop-shadow-xl"
                    />

                    <p className="text-gray-500 text-lg mt-4">
                        Panel Docente
                    </p>

                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-4">

                    <button
                        onClick={() =>
                            setSection("home")
                        }
                        className={`text-left px-6 py-5 rounded-2xl transition font-medium text-sm ${section === "home"
                            ? "bg-blue-500 text-white shadow-lg"
                            : "hover:bg-gray-100 text-gray-700"
                            }`}
                    >
                        🏠 Inicio
                    </button>

                    <button
                        onClick={() =>
                            setSection("students")
                        }
                        className={`text-left px-6 py-5 rounded-2xl transition font-medium text-sm ${section === "students"
                            ? "bg-blue-500 text-white shadow-lg"
                            : "hover:bg-gray-100 text-gray-700"
                            }`}
                    >
                        👨‍🎓 Registrar Estudiante
                    </button>

                    <button
                        onClick={() =>
                            setSection("registered")
                        }
                        className={`text-left px-6 py-5 rounded-2xl transition font-medium text-sm ${section === "registered"
                            ? "bg-blue-500 text-white shadow-lg"
                            : "hover:bg-gray-100 text-gray-700"
                            }`}
                    >
                        📚 Estudiantes Registrados
                    </button>

                    <button
                        onClick={() =>
                            setSection("progress")
                        }
                        className={`text-left px-6 py-5 rounded-2xl transition font-medium text-sm ${section === "progress"
                            ? "bg-blue-500 text-white shadow-lg"
                            : "hover:bg-gray-100 text-gray-700"
                            }`}
                    >
                        📈 Progreso
                    </button>

                    <button
                        onClick={() =>
                            setSection("ia")
                        }
                        className={`text-left px-6 py-5 rounded-2xl transition font-medium text-sm ${section === "ia"
                            ? "bg-blue-500 text-white shadow-lg"
                            : "hover:bg-gray-100 text-gray-700"
                            }`}
                    >
                        🤖 IA Educativa
                    </button>

                </nav>

            </aside>

            {/* Main */}
            <main className="flex-1 p-14">

                {/* HOME */}
                {section === "home" && (
                    <div>

                        <h1 className="text-6xl font-bold text-gray-800 leading-tight">
                            Panel de Gestión Docente 👨‍🏫
                        </h1>

                        <p className="mt-8 text-2xl text-gray-500 max-w-4xl leading-relaxed">
                            Gestiona estudiantes, analiza progreso académico
                            y utiliza inteligencia artificial para potenciar
                            la educación inclusiva.
                        </p>

                        {/* Cards */}
                        <div className="grid md:grid-cols-3 gap-8 mt-20">

                            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">

                                <div className="text-6xl mb-6">
                                    👨‍🎓
                                </div>

                                <h2 className="text-2xl font-bold">
                                    Estudiantes
                                </h2>

                                <p className="mt-4 text-gray-500">
                                    Registra y administra estudiantes.
                                </p>

                            </div>

                            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">

                                <div className="text-6xl mb-6">
                                    📈
                                </div>

                                <h2 className="text-2xl font-bold">
                                    Progreso
                                </h2>

                                <p className="mt-4 text-gray-500">
                                    Visualiza evolución académica.
                                </p>

                            </div>

                            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">

                                <div className="text-6xl mb-6">
                                    🤖
                                </div>

                                <h2 className="text-2xl font-bold">
                                    IA Educativa
                                </h2>

                                <p className="mt-4 text-gray-500">
                                    Genera estrategias inclusivas.
                                </p>

                            </div>

                        </div>

                    </div>
                )}

                {/* REGISTER */}
                {section === "students" && (
                    <StudentWizard />
                )}

                {/* REGISTERED */}
                {section === "registered" && (
                    <RegisteredStudents />
                )}

                {/* PROGRESS */}
                {section === "progress" && (
                    <h1 className="text-5xl font-bold">
                        Progreso Académico
                    </h1>
                )}

                {/* IA */}
                {section === "ia" && (
                    <h1 className="text-5xl font-bold">
                        IA Educativa
                    </h1>
                )}

            </main>

        </div>
    );
}

export default TeacherLayout;