import openai from "@/lib/openai";

export async function POST(
    req: Request
) {
    try {
        const body =
            await req.json();

        const {
            student,
            observations,
            progress,
        } = body;

        const prompt = `
Eres un experto en educación inclusiva.

Genera recomendaciones pedagógicas.

Información estudiante:

Nombre:
${student.personalInfo?.fullName}

Edad:
${student.personalInfo?.age}

Curso:
${student.academicInfo?.grade}

Discapacidad:
${student.disabilityInfo?.disability}

OBSERVACIONES DEL DOCENTE:

${observations
                .map(
                    (o: any) =>
                        `- ${o.content}`
                )
                .join("\n")}

PROGRESO ACADÉMICO:

${progress
                .map(
                    (p: any) => `
Área: ${p.area}
Objetivo: ${p.objective}
Actividad: ${p.activity}
Estado: ${p.status}
Avance: ${p.progressPercentage}%
`
                )
                .join("\n")}

Responde únicamente:

1. Estrategias pedagógicas
2. Actividades sugeridas
3. Adaptaciones curriculares
4. Recomendaciones para el docente

No hables de temas distintos a educación.
`;

        const response =
            await openai.chat.completions.create(
                {
                    model: "gpt-4.1-mini",

                    messages: [
                        {
                            role: "system",
                            content:
                                "Eres especialista en educación inclusiva.",
                        },
                        {
                            role: "user",
                            content: prompt,
                        },
                    ],
                }
            );

        return Response.json({
            recommendation:
                response.choices[0]
                    .message.content,
        });

    } catch (error) {
        console.error(error);

        return Response.json(
            {
                message:
                    "Error generando recomendación",
            },
            {
                status: 500,
            }
        );
    }
}