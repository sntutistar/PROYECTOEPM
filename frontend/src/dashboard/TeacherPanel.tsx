import {
    useState,
} from "react";

import {
    createStudent,
} from "../services/studentService";

function TeacherPanel() {
    const [form, setForm] =
        useState({
            name: "",
            age: "",
            grade: "",
            disability: "",
            observations: "",
        });

    const [errors, setErrors] =
        useState<any>({});

    function validateForm() {
        const newErrors: any = {};

        if (!form.name.trim()) {
            newErrors.name =
                "El nombre es obligatorio";
        }

        if (!form.age) {
            newErrors.age =
                "La edad es obligatoria";
        }

        if (!form.grade.trim()) {
            newErrors.grade =
                "El curso es obligatorio";
        }

        if (!form.disability.trim()) {
            newErrors.disability =
                "La discapacidad es obligatoria";
        }

        setErrors(newErrors);

        return (
            Object.keys(newErrors).length === 0
        );
    }

    async function handleSubmit(
        e: React.FormEvent
    ) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        await createStudent(form);

        setForm({
            name: "",
            age: "",
            grade: "",
            disability: "",
            observations: "",
        });

        setErrors({});

        alert(
            "Estudiante registrado correctamente"
        );
    }

    return (
        <div>

            {/* Header */}
            <div className="mb-12">

                <h1 className="text-5xl font-bold text-gray-800">
                    Registrar Estudiante
                </h1>

                <p className="mt-4 text-xl text-gray-500">
                    Registra nuevos estudiantes en la plataforma.
                </p>

            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-10 rounded-3xl shadow-lg grid md:grid-cols-2 gap-6"
            >

                {/* Nombre */}
                <div>

                    <input
                        type="text"
                        placeholder="Nombre completo"
                        className={`w-full border rounded-2xl px-5 py-4 outline-none transition ${errors.name
                                ? "border-red-500"
                                : "border-gray-200"
                            }`}
                        value={form.name}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                name: e.target.value,
                            })
                        }
                    />

                    {errors.name && (
                        <p className="text-red-500 text-sm mt-2">
                            {errors.name}
                        </p>
                    )}

                </div>

                {/* Edad */}
                <div>

                    <input
                        type="number"
                        placeholder="Edad"
                        className={`w-full border rounded-2xl px-5 py-4 outline-none transition ${errors.age
                                ? "border-red-500"
                                : "border-gray-200"
                            }`}
                        value={form.age}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                age: e.target.value,
                            })
                        }
                    />

                    {errors.age && (
                        <p className="text-red-500 text-sm mt-2">
                            {errors.age}
                        </p>
                    )}

                </div>

                {/* Curso */}
                <div>

                    <input
                        type="text"
                        placeholder="Curso"
                        className={`w-full border rounded-2xl px-5 py-4 outline-none transition ${errors.grade
                                ? "border-red-500"
                                : "border-gray-200"
                            }`}
                        value={form.grade}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                grade: e.target.value,
                            })
                        }
                    />

                    {errors.grade && (
                        <p className="text-red-500 text-sm mt-2">
                            {errors.grade}
                        </p>
                    )}

                </div>

                {/* Discapacidad */}
                <div>

                    <input
                        type="text"
                        placeholder="Discapacidad"
                        className={`w-full border rounded-2xl px-5 py-4 outline-none transition ${errors.disability
                                ? "border-red-500"
                                : "border-gray-200"
                            }`}
                        value={form.disability}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                disability:
                                    e.target.value,
                            })
                        }
                    />

                    {errors.disability && (
                        <p className="text-red-500 text-sm mt-2">
                            {errors.disability}
                        </p>
                    )}

                </div>

                {/* Observaciones */}
                <div className="md:col-span-2">

                    <textarea
                        placeholder="Observaciones"
                        className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none"
                        rows={5}
                        value={form.observations}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                observations:
                                    e.target.value,
                            })
                        }
                    />

                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl font-semibold md:col-span-2 transition shadow-lg"
                >
                    Registrar Estudiante
                </button>

            </form>

        </div>
    );
}

export default TeacherPanel;