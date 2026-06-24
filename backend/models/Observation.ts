import mongoose from "mongoose";

const ObservationSchema =
    new mongoose.Schema(
        {
            student: {
                type:
                    mongoose.Schema.Types.ObjectId,
                ref: "Student",
            },

            content: {
                type: String,
                required: true,
            },

            teacher: {
                type:
                    mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        },
        {
            timestamps: true,
        }
    );

export default mongoose.models.Observation ||
    mongoose.model(
        "Observation",
        ObservationSchema
    );