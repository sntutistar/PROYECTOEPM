import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        academicInfo: {
            comesFromAnotherMunicipality: {
                type: Boolean,
                default: false,
            },

            comesFromPrivateSchool: {
                type: Boolean,
                default: false,
            },

            previousAcademicStatus: {
                type: String,
                enum: [
                    "NO_ESTUDIOS",
                    "APROBO",
                    "REPROBO",
                ],
            },

            grade: {
                type: String,
            },
        },

        personalInfo: {
            photo: {
                type: String,
                default: "",
            },
            
            fullName: {
                type: String,
                required: true,
            },

            birthDepartment: String,

            birthMunicipality: String,

            birthDate: Date,

            age: Number,

            bloodType: {
                type: String,
                enum: [
                    "O+",
                    "O-",
                    "A+",
                    "A-",
                    "B+",
                    "B-",
                    "AB+",
                    "AB-",
                ],
            },

            gender: {
                type: String,
                enum: [
                    "MASCULINO",
                    "FEMENINO",
                    "OTRO",
                ],
            },
        },

        documentInfo: {
            documentType: {
                type: String,
                enum: ["RC", "TI", "CC"],
            },

            documentNumber: String,

            expeditionDepartment: String,

            expeditionMunicipality: String,
        },

        addressInfo: {
            socioeconomicLevel: {
                type: String,
                enum: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                ],
            },

            address: String,

            neighborhood: String,

            landlinePhone: String,

            cellphone: String,
        },

        disabilityInfo: {
            disability: {
                type: String,
                enum: [
                    "NINGUNA",
                    "SORDERA_PROFUNDA",
                    "LESION_NEUROMUSCULAR",
                    "HIPOACUSIA",
                    "AUTISMO",
                    "BAJA_VISION",
                    "CEGUERA",
                    "PARALISIS_CEREBRAL",
                    "SINDROME_DOWN",
                    "MULTIPLE",
                ],
            },

            exceptionalAbility: {
                type: String,
                enum: [
                    "NINGUNA",
                    "SUPERDOTADO",
                    "TALENTO_CIENTIFICO",
                    "TALENTO_TECNOLOGICO",
                    "TALENTO_ARTISTICO",
                ],
            },

            displacementStatus: {
                type: String,
                enum: [
                    "NO_APLICA",
                    "DESPLAZADO",
                    "DESVINCULADO_GRUPO_ARMADO",
                    "HIJO_DESMOVILIZADO",
                ],
            },
        },

        guardianInfo: {
            fullName: String,

            documentType: {
                type: String,
                enum: ["RC", "TI", "CC"],
            },

            documentNumber: String,

            expeditionDepartment: String,

            expeditionMunicipality: String,

            relationship: String,

            address: String,

            neighborhood: String,

            cellphone: String,
        },

        socioeconomicInfo: {
            sisbenCard: String,

            eps: String,
        },

        observations: {
            type: String,
            default: "",
        },

        teacher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Student ||
    mongoose.model(
        "Student",
        StudentSchema
    );