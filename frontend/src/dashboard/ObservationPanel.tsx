import { useEffect, useState } from "react";

import {
    getObservations,
    createObservation,
} from "../services/observationService";

interface Props {
    studentId: string;
}

function ObservationPanel({
    studentId,
}: Props) {
    const [observations, setObservations] =
        useState<any[]>([]);

    const [content, setContent] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    async function loadObservations() {
        try {
            const data =
                await getObservations(
                    studentId
                );

            setObservations(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleSave() {
        if (!content.trim()) {
            alert(
                "La observación es obligatoria"
            );
            return;
        }

        try {
            setLoading(true);

            await createObservation({
                student: studentId,
                content,
            });

            setContent("");

            await loadObservations();

        } catch (error) {
            console.error(error);

            alert(
                "Error guardando observación"
            );
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadObservations();
    }, []);

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

            <h2 className="text-3xl font-bold mb-8">
                Observaciones Pedagógicas
            </h2>

            {/* Nueva observación */}

            <div className="mb-10">

                <textarea
                    rows={5}
                    value={content}
                    onChange={(e) =>
                        setContent(
                            e.target.value
                        )
                    }
                    placeholder="Escribe una observación..."
                    className="w-full border border-gray-200 rounded-2xl p-5 outline-none focus:border-blue-500"
                />

                <button
                    onClick={handleSave}
                    disabled={loading}
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-2xl transition"
                >
                    {loading
                        ? "Guardando..."
                        : "Guardar Observación"}
                </button>

            </div>

            {/* Historial */}

            <div className="space-y-8">

                {observations.length === 0 && (
                    <div className="bg-gray-50 p-6 rounded-2xl text-gray-500">
                        No hay observaciones registradas.
                    </div>
                )}

                {observations.map(
                    (observation) => (
                        <div
                            key={
                                observation._id
                            }
                            className="border border-gray-100 rounded-2xl p-6 bg-gray-50"
                        >

                            <div className="text-sm text-gray-500 mb-3">

                                {new Date(
                                    observation.createdAt
                                ).toLocaleDateString(
                                    "es-CO"
                                )}

                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                {
                                    observation.content
                                }
                            </p>

                        </div>
                    )
                )}

            </div>

        </div>
    );
}

export default ObservationPanel;