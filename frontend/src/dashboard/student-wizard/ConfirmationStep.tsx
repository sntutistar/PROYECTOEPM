interface Props {
    formData: any;
}

function ConfirmationStep({
    formData,
}: Props) {
    return (
        <div>

            <h2 className="text-3xl font-bold mb-8">
                Confirmación de Registro
            </h2>

            <div className="space-y-6">

                <div className="bg-gray-50 p-6 rounded-2xl">

                    <h3 className="font-bold text-xl mb-4">
                        Información Académica
                    </h3>

                    <p>
                        Curso:
                        {" "}
                        {formData.academicInfo.grade}
                    </p>

                    <p>
                        Situación anterior:
                        {" "}
                        {
                            formData.academicInfo
                                .previousAcademicStatus
                        }
                    </p>

                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">

                    <h3 className="font-bold text-xl mb-4">
                        Información Personal
                    </h3>

                    <p>
                        Nombre:
                        {" "}
                        {
                            formData.personalInfo
                                .fullName
                        }
                    </p>

                    <p>
                        Edad:
                        {" "}
                        {
                            formData.personalInfo
                                .age
                        }
                    </p>

                    <p>
                        Género:
                        {" "}
                        {
                            formData.personalInfo
                                .gender
                        }
                    </p>

                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">

                    <h3 className="font-bold text-xl mb-4">
                        Documento
                    </h3>

                    <p>
                        {
                            formData.documentInfo
                                .documentType
                        }
                        {" "}
                        -
                        {" "}
                        {
                            formData.documentInfo
                                .documentNumber
                        }
                    </p>

                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">

                    <h3 className="font-bold text-xl mb-4">
                        Acudiente
                    </h3>

                    <p>
                        {
                            formData.guardianInfo
                                .fullName
                        }
                    </p>

                    <p>
                        {
                            formData.guardianInfo
                                .relationship
                        }
                    </p>

                </div>

            </div>

        </div>
    );
}

export default ConfirmationStep;
