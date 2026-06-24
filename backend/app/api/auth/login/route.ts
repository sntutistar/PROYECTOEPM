import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

import bcrypt from "bcryptjs";

import { generateToken } from "@/lib/jwt";

export async function OPTIONS() {
    return Response.json({});
}

export async function POST(req: Request) {
    try {
        await connectDB();

        const body = await req.json();

        const { email, password } = body;

        const user = await User.findOne({ email });

        if (!user) {
            return Response.json(
                {
                    message: "Usuario no encontrado",
                },
                {
                    status: 404,
                }
            );
        }

        const validPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!validPassword) {
            return Response.json(
                {
                    message: "Contraseña incorrecta",
                },
                {
                    status: 401,
                }
            );
        }

        const token = generateToken({
            id: user._id,
            role: user.role,
        });

        return Response.json({
            token,
            user,
        });
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