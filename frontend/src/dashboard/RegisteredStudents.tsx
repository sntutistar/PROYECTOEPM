import {
    useEffect,
    useState,
} from "react";

import {
    getStudents,
} from "../services/studentService";

import StudentProfile from "./StudentProfile";

function RegisteredStudents() {
    const [students, setStudents] =
        useState<any[]>([]);

    const [selectedStudent, setSelectedStudent] =
        useState<any>(null);

    async function loadStudents() {
        const data =
            await getStudents();

        setStudents(data);
    }

    useEffect(() => {
        loadStudents();
    }, []);

    /* PROFILE */
    if (selectedStudent) {
        return (
            <StudentProfile
                student={selectedStudent}
                onBack={() =>
                    setSelectedStudent(null)
                }
            />
        );
    }

    return (
        <div>

            {/* Header */}
            <div className="mb-12">

                <h1 className="text-5xl font-bold text-gray-800">
                    Estudiantes Registrados
                </h1>

                <p className="mt-4 text-xl text-gray-500">
                    Selecciona un estudiante para ver su perfil completo.
                </p>

            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                {students.map((student) => (
                    <div
                        key={student._id}
                        onClick={() =>
                            setSelectedStudent(student)
                        }
                        className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 cursor-pointer hover:scale-[1.02] hover:shadow-2xl transition"
                    >

                        <div className="flex justify-between items-center mb-6">

                            <h2 className="text-2xl font-bold text-gray-800">
                                {student.personalInfo?.fullName}
                            </h2>

                            <span className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full text-sm font-semibold">
                                {student.academicInfo?.grade}
                            </span>

                        </div>

                        <div className="space-y-4">

                            <p className="text-gray-600">
                                <span className="font-semibold">
                                    Edad:
                                </span>

                                {" "}
                                {student.personalInfo?.age}
                            </p>

                            <p className="text-gray-600">
                                <span className="font-semibold">
                                    Discapacidad:
                                </span>

                                {" "}

                                <span className="text-blue-500 font-medium">
                                    {student.disabilityInfo?.disability}
                                </span>
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default RegisteredStudents;