import { useState } from "react";

import { generateRecommendation } from "../services/aiService";

import { useEffect } from "react";

import {
    getObservations,
} from "../services/observationService";

import {
    getProgress,
} from "../services/progressService";

interface Props {
    student: any;
}

function AIPanel({
    student,
}: Props) {
    const [recommendation, setRecommendation] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [observations, setObservations] =
        useState<any[]>([]);

    const [progress, setProgress] =
        useState<any[]>([]);


    async function loadData() {
        try {
            const obs =
                await getObservations(
                    student._id
                );

            const prog =
                await getProgress(
                    student._id
                );

            setObservations(obs);

            setProgress(prog);

        } catch (error) {
            console.error(error);
        }
    }

    async function handleGenerate() {
        try {
            setLoading(true);

            const response =
                await generateRecommendation({
                    student,
                    observations,
                    progress,
                });

            setRecommendation(
                response.recommendation
            );

        } catch (error) {
            console.error(error);

            alert(
                "Error generando recomendación"
            );
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h2 className="text-3xl font-bold">
                        IA Educativa
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Genera estrategias pedagógicas personalizadas.
                    </p>

                </div>

                <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl transition"
                >
                    {loading
                        ? "Generando..."
                        : "Generar Recomendación"}
                </button>

            </div>

            {!recommendation && (

                <div className="bg-gray-50 rounded-2xl p-8 text-gray-500">

                    La IA analizará:

                    <ul className="mt-4 space-y-2">

                        <li>
                            • Edad del estudiante
                        </li>

                        <li>
                            • Curso actual
                        </li>

                        <li>
                            • Discapacidad
                        </li>

                        <li>
                            • Observaciones registradas
                        </li>

                        <li>
                            • Progreso académico
                        </li>

                    </ul>

                </div>

            )}

            {recommendation && (

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">

                    <h3 className="text-xl font-bold text-blue-700 mb-4">
                        Recomendación Generada
                    </h3>

                    <div className="whitespace-pre-wrap leading-relaxed text-gray-700">
                        {recommendation}
                    </div>

                </div>

            )}

        </div>
    );
}

export default AIPanel;