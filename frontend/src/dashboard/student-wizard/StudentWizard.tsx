import { useState } from "react";

import AcademicStep from "./AcademicStep";
import PersonalStep from "./PersonalStep";
import DocumentStep from "./DocumentStep";
import AddressStep from "./AddressStep";
import DisabilityStep from "./DisabilityStep";
import GuardianStep from "./GuardianStep";
import SocioeconomicStep from "./SocioeconomicStep";
import ConfirmationStep from "./ConfirmationStep";

import { createStudent } from "../../services/studentService";

function StudentWizard() {
    const [step, setStep] =
        useState(1);

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({
            academicInfo: {
                comesFromAnotherMunicipality:
                    false,

                comesFromPrivateSchool:
                    false,

                previousAcademicStatus:
                    "",

                grade: "",
            },

            personalInfo: {

                fullName: "",

                birthDepartment: "",

                birthMunicipality: "",

                birthDate: "",

                age: "",

                bloodType: "",

                gender: "",
            },

            documentInfo: {
                documentType: "",

                documentNumber: "",

                expeditionDepartment: "",

                expeditionMunicipality: "",
            },

            addressInfo: {
                socioeconomicLevel: "",

                address: "",

                neighborhood: "",

                landlinePhone: "",

                cellphone: "",
            },

            disabilityInfo: {
                disability: "",

                exceptionalAbility: "",

                displacementStatus: "",
            },

            guardianInfo: {
                fullName: "",

                documentType: "",

                documentNumber: "",

                expeditionDepartment: "",

                expeditionMunicipality: "",

                relationship: "",

                address: "",

                neighborhood: "",

                cellphone: "",
            },

            socioeconomicInfo: {
                sisbenCard: "",

                eps: "",
            },

            observations: "",
        });

    const totalSteps = 8;

    function nextStep() {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    }

    function prevStep() {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    async function handleSubmit() {
        try {
            setLoading(true);

            await createStudent(
                formData
            );


            setStep(1);

        } catch (error) {
            console.error(error);

            alert(
                "Error registrando estudiante"
            );
        } finally {
            setLoading(false);
        }
    }

    const progress =
        (step / totalSteps) * 100;

    return (
        <div className="bg-white rounded-3xl shadow-lg p-10">

            {/* Header */}
            <div className="mb-10">

                <h1 className="text-4xl font-bold text-gray-800">
                    Registro de Estudiante
                </h1>

                <p className="text-gray-500 mt-2">
                    Paso {step} de {totalSteps}
                </p>

            </div>

            {/* Progress Bar */}
            <div className="w-full h-4 bg-gray-200 rounded-full mb-12 overflow-hidden">

                <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{
                        width: `${progress}%`,
                    }}
                />

            </div>

            {/* STEP 1 */}
            {step === 1 && (
                <AcademicStep
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

            {/* STEP 2 */}
            {step === 2 && (
                <PersonalStep
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

            {/* STEP 3 */}
            {step === 3 && (
                <DocumentStep
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

            {/* STEP 4 */}
            {step === 4 && (
                <AddressStep
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

            {/* STEP 5 */}
            {step === 5 && (
                <DisabilityStep
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

            {/* STEP 6 */}
            {step === 6 && (
                <GuardianStep
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

            {/* STEP 7 */}
            {step === 7 && (
                <SocioeconomicStep
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

            {/* STEP 8 */}
            {step === 8 && (
                <ConfirmationStep
                    formData={formData}
                />
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-12">

                <button
                    onClick={prevStep}
                    disabled={step === 1}
                    className="bg-gray-200 hover:bg-gray-300 px-8 py-4 rounded-2xl transition disabled:opacity-50"
                >
                    Anterior
                </button>

                {step < totalSteps ? (
                    <button
                        onClick={nextStep}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl transition"
                    >
                        Siguiente
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl transition"
                    >
                        {loading
                            ? "Guardando..."
                            : "Guardar Estudiante"}
                    </button>
                )}

            </div>

        </div>
    );
}

export default StudentWizard;