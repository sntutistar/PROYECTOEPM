import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI no definida");
}

export async function connectDB() {
    try {
        await mongoose.connect(MONGODB_URI);

        console.log("MongoDB conectado");
    } catch (error) {
        console.error(error);
    }
}