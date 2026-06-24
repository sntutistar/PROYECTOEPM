import { useState } from "react";
import ObservationPanel from "./ObservationPanel";
import ProgressPanel from "./ProgressPanel";
import AIPanel from "./AIPanel";
import GuideGenerator from "../components/ai/GuideGenerator";

function StudentProfile({
    student,
    onBack,

}: any) {
    const [tab, setTab] =
        useState("general");
    return (
        <div>

            {/* Back */}
            <button
                onClick={onBack}
                className="mb-10 bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-2xl transition"
            >
                ← Volver
            </button>

            {/* Header */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">

                <div className="flex items-center gap-8">

                    {/* Avatar */}
                    <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center text-5xl">
                        👨‍🎓
                    </div>

                    {/* Info */}
                    <div className="flex items-center gap-6">



                        <div>

                            <h1 className="text-4xl font-bold">
                                {
                                    student.personalInfo
                                        ?.fullName
                                }
                            </h1>

                            <p className="text-gray-500">
                                {
                                    student.academicInfo
                                        ?.grade
                                }
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="flex gap-4 mt-10 flex-wrap">

                <button
                    onClick={() =>
                        setTab("general")
                    }
                    className={`px-6 py-3 rounded-xl ${tab === "general"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                        }`}
                >
                    📋 General
                </button>

                <button
                    onClick={() =>
                        setTab("academic")
                    }
                    className={`px-6 py-3 rounded-xl ${tab === "academic"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                        }`}
                >
                    📚 Académica
                </button>

                <button
                    onClick={() =>
                        setTab("guardian")
                    }
                    className={`px-6 py-3 rounded-xl ${tab === "guardian"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                        }`}
                >
                    👨‍👩‍👦 Acudiente
                </button>

                <button
                    onClick={() =>
                        setTab("social")
                    }
                    className={`px-6 py-3 rounded-xl ${tab === "social"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                        }`}
                >
                    🏠 Socioeconómica
                </button>

                <button
                    onClick={() =>
                        setTab("observations")
                    }
                    className={`px-6 py-3 rounded-xl ${tab === "observations"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                        }`}
                >
                    📝 Observaciones
                </button>

                <button
                    onClick={() =>
                        setTab("progress")
                    }
                    className={`px-6 py-3 rounded-xl ${tab === "progress"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                        }`}
                >
                    📈 Progreso
                </button>

                <button
                    onClick={() =>
                        setTab("ai")
                    }
                    className={`px-6 py-3 rounded-xl ${tab === "ai"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                        }`}
                >
                    🤖 IA Educativa
                </button>

            </div>



            {tab === "general" && (

                <div className="bg-white p-8 rounded-3xl shadow-lg mt-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Información General
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        <p>
                            <strong>Nombre:</strong>
                            {" "}
                            {
                                student.personalInfo?.fullName
                            }
                        </p>

                        <p>
                            <strong>Edad:</strong>
                            {" "}
                            {
                                student.personalInfo?.age
                            }
                        </p>

                        <p>
                            <strong>Género:</strong>
                            {" "}
                            {
                                student.personalInfo?.gender
                            }
                        </p>

                        <p>
                            <strong>Tipo Sangre:</strong>
                            {" "}
                            {
                                student.personalInfo?.bloodType
                            }
                        </p>

                    </div>

                </div>

            )}

            {tab === "academic" && (

                <div className="bg-white p-8 rounded-3xl shadow-lg mt-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Información Académica
                    </h2>

                    <p>
                        <strong>Curso:</strong>
                        {" "}
                        {
                            student.academicInfo?.grade
                        }
                    </p>

                    <p className="mt-4">
                        <strong>Situación Anterior:</strong>
                        {" "}
                        {
                            student.academicInfo
                                ?.previousAcademicStatus
                        }
                    </p>

                </div>

            )}

            {tab === "guardian" && (

                <div className="bg-white p-8 rounded-3xl shadow-lg mt-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Acudiente
                    </h2>

                    <p>
                        {
                            student.guardianInfo
                                ?.fullName
                        }
                    </p>

                    <p className="mt-2">
                        {
                            student.guardianInfo
                                ?.relationship
                        }
                    </p>

                    <p className="mt-2">
                        {
                            student.guardianInfo
                                ?.cellphone
                        }
                    </p>

                </div>

            )}

            {tab === "social" && (

                <div className="bg-white p-8 rounded-3xl shadow-lg mt-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Información Socioeconómica
                    </h2>

                    <p>
                        <strong>SISBEN:</strong>
                        {" "}
                        {
                            student.socioeconomicInfo
                                ?.sisbenCard
                        }
                    </p>

                    <p className="mt-3">
                        <strong>EPS:</strong>
                        {" "}
                        {
                            student.socioeconomicInfo
                                ?.eps
                        }
                    </p>

                </div>

            )}

            {
                tab === "observations" && (
                    <ObservationPanel
                        studentId={student._id}
                    />
                )
            }

            {
                tab === "progress" && (
                    <ProgressPanel
                        studentId={student._id}
                    />
                )
            }

            {
                tab === "ai" && (
                    <>
                        <AIPanel
                            student={student}
                        />

                        <GuideGenerator
                            student={student}
                        />
                    </>
                )
            }



        </div>


    );
}

export default StudentProfile;