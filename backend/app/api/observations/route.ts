import { connectDB } from "@/lib/mongodb";
import Observation from "@/models/Observation";

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

        const observations =
            await Observation.find({
                student: studentId,
            }).sort({
                createdAt: -1,
            });

        return Response.json(
            observations
        );
    } catch (error) {
        return Response.json(
            {
                message:
                    "Error obteniendo observaciones",
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

        const observation =
            await Observation.create(
                body
            );

        return Response.json(
            observation,
            {
                status: 201,
            }
        );
    } catch (error) {
        return Response.json(
            {
                message:
                    "Error creando observación",
            },
            {
                status: 500,
            }
        );
    }
}