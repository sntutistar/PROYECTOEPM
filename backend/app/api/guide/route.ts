import OpenAI from "openai";

const openai = new OpenAI({
    apiKey:
        process.env.OPENAI_API_KEY,
});

export async function POST(
    req: Request
) {
    try {

        const {
            student,
            area,
            topic,
        } = await req.json();

        const prompt = `
            Eres un docente experto en educación inclusiva.

            Genera una guía de aprendizaje personalizada para el siguiente estudiante.

            DATOS DEL ESTUDIANTE:

            Nombre: ${student.personalInfo.fullName}
            Edad: ${student.personalInfo.age}
            Discapacidad: ${student.disabilityInfo.disability}
            Grado: ${student.academicInfo.grade}

            ÁREA:
            ${area}

            TEMA:
            ${topic}

            La guía debe ser práctica, dinámica, motivadora y adaptada a la discapacidad del estudiante.

            RESPONDE ÚNICAMENTE EN JSON.

            {
            "title": "",
            "objective": "",
            "motivation": "",
            "materials": [],
            "explanation": "",
            "illustrationSuggestions": [],
            "activities": [],
            "game": "",
            "evaluation": [],
            "adaptations": [],
            "homework": ""
            }

            REGLAS:

            - Usa lenguaje sencillo.
            - Diseña actividades apropiadas para la edad.
            - Incluye materiales concretos cuando sea posible.
            - Incluye sugerencias de imágenes o ilustraciones educativas.
            - Incluye una actividad lúdica.
            - Incluye una tarea para realizar en casa.
            - Adapta todas las actividades a la discapacidad del estudiante.
            - No agregues texto fuera del JSON.

            NO agregues texto antes.
            NO agregues texto después.
            NO uses markdown.
            NO uses \`\`\`.
        `;

        const response =
            await openai.chat.completions.create({
                model: "gpt-4.1-mini",
                response_format: {
                    type: "json_object",
                },
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            });

        return Response.json({
            guide:
                response.choices[0]
                    .message.content,
        });

    } catch (error) {
        console.error(error);

        return Response.json(
            {
                message:
                    "Error generando guía",
            },
            {
                status: 500,
            }
        );
    }
}