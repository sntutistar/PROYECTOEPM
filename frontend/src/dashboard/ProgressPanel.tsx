import { useEffect, useState } from "react";

import {
    getProgress,
    createProgress,
} from "../services/progressService";

interface Props {
    studentId: string;
}

function ProgressPanel({
    studentId,
}: Props) {
    const [records, setRecords] =
        useState<any[]>([]);

    const [loading, setLoading] =
        useState(false);

    const [form, setForm] =
        useState({
            area: "",
            objective: "",
            activity: "",
            status: "PENDIENTE",
            progressPercentage: 0,
        });

    async function loadProgress() {
        try {
            const data =
                await getProgress(
                    studentId
                );

            setRecords(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleSave() {
        if (
            !form.area ||
            !form.objective ||
            !form.activity
        ) {
            alert(
                "Todos los campos son obligatorios"
            );
            return;
        }

        try {
            setLoading(true);

            await createProgress({
                student: studentId,
                ...form,
            });

            setForm({
                area: "",
                objective: "",
                activity: "",
                status: "PENDIENTE",
                progressPercentage: 0,
            });

            await loadProgress();

        } catch (error) {
            console.error(error);

            alert(
                "Error guardando progreso"
            );
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProgress();
    }, []);

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

            {/* Formulario */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">

                <h2 className="text-3xl font-bold mb-8">
                    Registrar Progreso Académico
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <input
                        type="text"
                        placeholder="Área (Matemáticas, Lenguaje...)"
                        className="border border-gray-200 rounded-2xl px-5 py-4"
                        value={form.area}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                area:
                                    e.target.value,
                            })
                        }
                    />

                    <select
                        className="border border-gray-200 rounded-2xl px-5 py-4"
                        value={form.status}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                status:
                                    e.target.value,
                            })
                        }
                    >
                        <option value="PENDIENTE">
                            Pendiente
                        </option>

                        <option value="EN_PROGRESO">
                            En progreso
                        </option>

                        <option value="COMPLETADO">
                            Completado
                        </option>
                    </select>

                    <textarea
                        placeholder="Objetivo de aprendizaje"
                        className="border border-gray-200 rounded-2xl px-5 py-4 md:col-span-2"
                        rows={3}
                        value={form.objective}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                objective:
                                    e.target.value,
                            })
                        }
                    />

                    <textarea
                        placeholder="Actividad realizada"
                        className="border border-gray-200 rounded-2xl px-5 py-4 md:col-span-2"
                        rows={3}
                        value={form.activity}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                activity:
                                    e.target.value,
                            })
                        }
                    />

                    <div className="md:col-span-2">

                        <label className="block mb-2 font-medium">
                            Avance:
                            {" "}
                            {
                                form.progressPercentage
                            }
                            %
                        </label>

                        <input
                            type="range"
                            min="0"
                            max="100"
                            className="w-full"
                            value={
                                form.progressPercentage
                            }
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    progressPercentage:
                                        Number(
                                            e.target.value
                                        ),
                                })
                            }
                        />

                    </div>

                </div>

                <button
                    onClick={handleSave}
                    disabled={loading}
                    className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl transition"
                >
                    {loading
                        ? "Guardando..."
                        : "Guardar Progreso"}
                </button>

            </div>

            {/* Historial */}

            <div className="space-y-6">

                {records.length === 0 && (
                    <div className="bg-white p-8 mt-6 rounded-3xl shadow-lg text-gray-500">
                        No hay registros de progreso.
                    </div>
                )}

                {records.map((record) => (
                    <div
                        key={record._id}
                        className="bg-white p-8 mt-6 rounded-3xl shadow-lg"
                    >

                        <div className="flex justify-between items-center mb-4">

                            <h3 className="text-2xl font-bold">
                                {record.area}
                            </h3>

                            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                                {record.status}
                            </span>

                        </div>

                        <div className="space-y-4">

                            <div>
                                <strong>
                                    Objetivo:
                                </strong>

                                <p className="mt-2 text-gray-600">
                                    {
                                        record.objective
                                    }
                                </p>
                            </div>

                            <div>
                                <strong>
                                    Actividad:
                                </strong>

                                <p className="mt-2 text-gray-600">
                                    {
                                        record.activity
                                    }
                                </p>
                            </div>

                            <div>

                                <div className="flex justify-between mb-2">

                                    <span>
                                        Avance
                                    </span>

                                    <span>
                                        {
                                            record.progressPercentage
                                        }
                                        %
                                    </span>

                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-4">

                                    <div
                                        className="bg-green-500 h-4 rounded-full"
                                        style={{
                                            width: `${record.progressPercentage}%`,
                                        }}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default ProgressPanel;