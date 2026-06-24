import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

import bcrypt from "bcryptjs";

export async function OPTIONS() {
    return Response.json({});
}

export async function POST(req: Request) {
    try {
        await connectDB();

        const body = await req.json();

        const { name, email, password, role } = body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return Response.json(
                {
                    message: "El usuario ya existe",
                },
                {
                    status: 400,
                }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });

        return Response.json(
            {
                message: "Usuario creado",
                user,
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        console.error(error);

        return Response.json(
            {
                message: "Error del servidor",
            },
            {
                status: 500,
            }
        );
    }
}