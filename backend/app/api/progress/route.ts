import { connectDB } from "@/lib/mongodb";
import Progress from "@/models/Progress";

export async function GET(
    req: Request
) {
    try {
        await connectDB();

        const url =
            new URL(req.url);

        const studentId =
            url.searchParams.get(
                "student"
            );

        const progress =
            await Progress.find({
                student: studentId,
            }).sort({
                createdAt: -1,
            });

        return Response.json(progress);

    } catch (error) {
        return Response.json(
            {
                message:
                    "Error obteniendo progreso",
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

        const body =
            await req.json();

        const progress =
            await Progress.create(body);

        return Response.json(
            progress,
            {
                status: 201,
            }
        );

    } catch (error) {
        return Response.json(
            {
                message:
                    "Error guardando progreso",
            },
            {
                status: 500,
            }
        );
    }
}