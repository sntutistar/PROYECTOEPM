import { connectDB } from "@/lib/mongodb";
import Student from "@/models/Student";

export async function OPTIONS() {
    return Response.json({});
}

export async function GET() {
    try {
        await connectDB();

        const students =
            await Student.find();

        return Response.json(students);
    } catch (error) {
        console.error(error);

        return Response.json(
            {
                message:
                    "Error obteniendo estudiantes",
            },
            {
                status: 500,
            }
        );
    }
}

export async function POST(
    req: Request
) {
    try {
        await connectDB();

        const body = await req.json();

        const student =
            await Student.create(body);

        return Response.json(
            {
                message:
                    "Estudiante registrado correctamente",
                student,
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        console.error(error);

        return Response.json(
            {
                message:
                    "Error registrando estudiante",
            },
            {
                status: 500,
            }
        );
    }
}