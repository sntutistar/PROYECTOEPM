import { useState } from "react";
import jsPDF from "jspdf";

interface Props {
    student: any;
}

function GuideGenerator({
    student,
}: Props) {
    const [area, setArea] =
        useState("");

    const [topic, setTopic] =
        useState("");

    const [guide, setGuide] =
        useState<any>(null);

    const [loading, setLoading] =
        useState(false);

    async function generateGuide() {
        try {
            setLoading(true);

            const response =
                await fetch(
                    "http://localhost:3000/api/guide",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify({
                            student,
                            area,
                            topic,
                        }),
                    }
                );

            const data = await response.json();

            console.log("GUIDE:", data.guide);

            try {

                setGuide(
                    JSON.parse(data.guide)
                );

            } catch (error) {

                console.error(
                    "Error parseando JSON",
                    error
                );

                console.log(
                    "Respuesta IA:",
                    data.guide
                );
            }

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    function getBase64Image(
        imgUrl: string
    ): Promise<string> {

        return new Promise(
            (resolve) => {

                const img =
                    new Image();

                img.crossOrigin =
                    "anonymous";

                img.onload = () => {

                    const canvas =
                        document.createElement(
                            "canvas"
                        );

                    canvas.width =
                        img.width;

                    canvas.height =
                        img.height;

                    const ctx =
                        canvas.getContext(
                            "2d"
                        );

                    ctx?.drawImage(
                        img,
                        0,
                        0
                    );

                    resolve(
                        canvas.toDataURL(
                            "image/png"
                        )
                    );
                };

                img.src = imgUrl;
            }
        );
    }

    function addSection(
        doc: jsPDF,
        title: string,
        content: string,
        y: number
    ) {

        y = checkPage(doc, y);

        doc.setFillColor(
            52,
            152,
            219
        );

        doc.rect(
            15,
            y,
            180,
            10,
            "F"
        );

        doc.setTextColor(
            255,
            255,
            255
        );

        doc.setFontSize(12);

        doc.text(
            title,
            20,
            y + 7
        );

        y += 15;

        doc.setTextColor(
            0,
            0,
            0
        );

        const text =
            doc.splitTextToSize(
                content,
                170
            );

        doc.text(
            text,
            20,
            y
        );

        return (
            y +
            text.length * 6 +
            10
        );
    }

    function checkPage(
        doc: jsPDF,
        y: number
    ) {

        if (y > 250) {

            doc.addPage();

            return 20;
        }

        return y;

    }

    async function downloadPDF() {

        console.log("GUIDE PDF:", guide);

        if (!guide) {
            alert("No hay guía para exportar");
            return;
        }


        const doc = new jsPDF();

        const logo =
            await getBase64Image(
                "/Logo_principal.png"
            );

        doc.addImage(
            logo,
            "PNG",
            75,
            10,
            60,
            60
        );

        let y = 80;

        // Título institucional

        doc.setFontSize(20);
        doc.setFont(
            "helvetica",
            "bold"
        );

        doc.text(
            "EDUCACIÓN PARA EL MUNDO",
            105,
            y,
            { align: "center" }
        );

        y += 10;

        doc.setFontSize(14);

        doc.text(
            "GUÍA DE APRENDIZAJE PERSONALIZADA",
            105,
            y,
            { align: "center" }
        );

        y += 15;

        // Caja información estudiante

        doc.setFillColor(
            240,
            248,
            255
        );

        doc.roundedRect(
            15,
            y,
            180,
            35,
            3,
            3,
            "F"
        );

        y += 8;

        doc.setFontSize(11);
        doc.setFont(
            "helvetica",
            "normal"
        );

        doc.text(
            `Estudiante: ${student.personalInfo.fullName}`,
            20,
            y
        );

        y += 7;

        doc.text(
            `Edad: ${student.personalInfo.age}`,
            20,
            y
        );

        doc.text(
            `Grado: ${student.academicInfo.grade}`,
            100,
            y
        );

        y += 7;

        doc.text(
            `Área: ${area}`,
            20,
            y
        );

        doc.text(
            `Tema: ${topic}`,
            100,
            y
        );

        y += 25;

        // OBJETIVO

        y = addSection(
            doc,
            "🎯 OBJETIVO",
            guide.objective || "",
            y
        );

        // MOTIVACIÓN

        y = addSection(
            doc,
            "💡 MOTIVACIÓN",
            guide.motivation || "",
            y
        );

        // EXPLICACIÓN

        y = addSection(
            doc,
            "📚 EXPLICACIÓN",
            guide.explanation || "",
            y
        );

        // MATERIALES

        const materiales =
            guide.materials?.join("\n• ") || "";

        y = addSection(
            doc,
            "📦 MATERIALES",
            "• " + materiales,
            y
        );

        // ACTIVIDADES

        const actividades =
            guide.activities
                ?.map(
                    (
                        item: string,
                        index: number
                    ) =>
                        `${index + 1}. ${item}`
                )
                .join("\n\n") || "";

        y = addSection(
            doc,
            "📝 ACTIVIDADES",
            actividades,
            y
        );

        // JUEGO

        y = addSection(
            doc,
            "🎲 JUEGO PEDAGÓGICO",
            guide.game || "",
            y
        );

        // EVALUACIÓN

        const evaluacion =
            guide.evaluation
                ?.map(
                    (
                        item: string
                    ) =>
                        `• ${item}`
                )
                .join("\n") || "";

        y = addSection(
            doc,
            "📊 EVALUACIÓN",
            evaluacion,
            y
        );

        // ADAPTACIONES

        const adaptaciones =
            guide.adaptations
                ?.map(
                    (
                        item: string
                    ) =>
                        `• ${item}`
                )
                .join("\n") || "";

        y = addSection(
            doc,
            "🧩 ADAPTACIONES",
            adaptaciones,
            y
        );

        // TAREA

        y = addSection(
            doc,
            "🏠 TAREA PARA CASA",
            guide.homework || "",
            y
        );

        // Pie de página

        doc.setFontSize(10);

        doc.setTextColor(
            120,
            120,
            120
        );

        doc.text(
            `Generado por EPM IA - ${new Date().toLocaleDateString()}`,
            105,
            285,
            {
                align: "center",
            }
        );

        doc.save(
            `Guia-${student.personalInfo.fullName}.pdf`
        );

    }

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

            <h2 className="text-2xl font-bold mb-6">
                Generador de Guías IA
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

                <input
                    type="text"
                    placeholder="Área"
                    value={area}
                    onChange={(e) =>
                        setArea(e.target.value)
                    }
                    className="border rounded-xl p-4"
                />

                <input
                    type="text"
                    placeholder="Tema"
                    value={topic}
                    onChange={(e) =>
                        setTopic(e.target.value)
                    }
                    className="border rounded-xl p-4"
                />

            </div>

            <button
                onClick={generateGuide}
                className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl"
            >
                {loading
                    ? "Generando..."
                    : "Generar Guía"}
            </button>

            {guide && (
                <>
                    <div className="mt-8 space-y-6">

                        {/* Título */}

                        <div className="bg-linear-to-r from-blue-500 to-purple-600 text-white p-8 rounded-3xl">

                            <h2 className="text-3xl font-bold">
                                {guide.title}
                            </h2>

                            <p className="mt-2 opacity-90">
                                Guía personalizada para {student.personalInfo.fullName}
                            </p>

                        </div>

                        {/* Objetivo */}

                        <div className="bg-white border rounded-2xl p-6">

                            <h3 className="text-xl font-bold mb-3">
                                🎯 Objetivo
                            </h3>

                            <p>{guide.objective}</p>

                        </div>

                        {/* Motivación */}

                        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">

                            <h3 className="text-xl font-bold mb-3">
                                💡 Motivación
                            </h3>

                            <p>{guide.motivation}</p>

                        </div>

                        {/* Materiales */}

                        <div className="bg-white border rounded-2xl p-6">

                            <h3 className="text-xl font-bold mb-4">
                                📦 Materiales
                            </h3>

                            <ul className="space-y-2">

                                {guide.materials?.map(
                                    (
                                        material: string,
                                        index: number
                                    ) => (

                                        <li
                                            key={index}
                                            className="bg-gray-50 p-3 rounded-xl"
                                        >
                                            ✓ {material}
                                        </li>

                                    )
                                )}

                            </ul>

                        </div>

                        {/* Explicación */}

                        <div className="bg-white border rounded-2xl p-6">

                            <h3 className="text-xl font-bold mb-3">
                                📚 Explicación
                            </h3>

                            <p>{guide.explanation}</p>

                        </div>

                        {/* Recursos visuales */}

                        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">

                            <h3 className="text-xl font-bold mb-4">
                                🖼️ Recursos Visuales Sugeridos
                            </h3>

                            <ul className="space-y-2">

                                {guide.illustrationSuggestions?.map(
                                    (
                                        item: string,
                                        index: number
                                    ) => (

                                        <li
                                            key={index}
                                            className="bg-white p-3 rounded-xl"
                                        >
                                            {item}
                                        </li>

                                    )
                                )}

                            </ul>

                        </div>

                        {/* Actividades */}

                        <div className="bg-white border rounded-2xl p-6">

                            <h3 className="text-xl font-bold mb-4">
                                📝 Actividades
                            </h3>

                            <div className="space-y-4">

                                {guide.activities?.map(
                                    (
                                        activity: string,
                                        index: number
                                    ) => (

                                        <div
                                            key={index}
                                            className="bg-gray-50 p-4 rounded-xl"
                                        >
                                            <strong>
                                                Actividad {index + 1}
                                            </strong>

                                            <p className="mt-2">
                                                {activity}
                                            </p>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                        {/* Juego */}

                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">

                            <h3 className="text-xl font-bold mb-3">
                                🎲 Juego Pedagógico
                            </h3>

                            <p>{guide.game}</p>

                        </div>

                        {/* Evaluación */}

                        <div className="bg-white border rounded-2xl p-6">

                            <h3 className="text-xl font-bold mb-4">
                                📊 Evaluación
                            </h3>

                            <ul className="space-y-2">

                                {guide.evaluation?.map(
                                    (
                                        item: string,
                                        index: number
                                    ) => (

                                        <li
                                            key={index}
                                            className="bg-gray-50 p-3 rounded-xl"
                                        >
                                            ✓ {item}
                                        </li>

                                    )
                                )}

                            </ul>

                        </div>

                        {/* Adaptaciones */}

                        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">

                            <h3 className="text-xl font-bold mb-4">
                                🧩 Adaptaciones
                            </h3>

                            <ul className="space-y-2">

                                {guide.adaptations?.map(
                                    (
                                        item: string,
                                        index: number
                                    ) => (

                                        <li
                                            key={index}
                                            className="bg-white p-3 rounded-xl"
                                        >
                                            ✓ {item}
                                        </li>

                                    )
                                )}

                            </ul>

                        </div>

                        {/* Tarea */}

                        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">

                            <h3 className="text-xl font-bold mb-3">
                                🏠 Tarea para Casa
                            </h3>

                            <p>{guide.homework}</p>

                        </div>

                    </div>



                    <button
                        onClick={downloadPDF}
                        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
                    >
                        Descargar PDF
                    </button>
                </>
            )}
        </div>
    );
}

export default GuideGenerator;