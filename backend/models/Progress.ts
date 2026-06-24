import mongoose from "mongoose";

const ProgressSchema =
    new mongoose.Schema(
        {
            student: {
                type:
                    mongoose.Schema.Types.ObjectId,
                ref: "Student",
                required: true,
            },

            area: {
                type: String,
                required: true,
            },

            objective: {
                type: String,
                required: true,
            },

            activity: {
                type: String,
                required: true,
            },

            status: {
                type: String,
                enum: [
                    "PENDIENTE",
                    "EN_PROGRESO",
                    "COMPLETADO",
                ],
            },

            progressPercentage: {
                type: Number,
                default: 0,
            },
        },
        {
            timestamps: true,
        }
    );

export default mongoose.models.Progress ||
    mongoose.model(
        "Progress",
        ProgressSchema
    );