interface Props {
    formData: any;
    setFormData: any;
}

function AcademicStep({
    formData,
    setFormData,
}: Props) {
    return (
        <div>

            <h2 className="text-3xl font-bold mb-8">
                Información Personal
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

                {/* Municipio */}
                <div>
                    <label className="block mb-2 font-medium">
                        ¿Proviene de otro municipio?
                    </label>

                    <select
                        className="w-full border border-gray-200 rounded-2xl px-5 py-4"
                        value={
                            formData.academicInfo
                                .comesFromAnotherMunicipality
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                academicInfo: {
                                    ...formData.academicInfo,
                                    comesFromAnotherMunicipality:
                                        e.target.value === "true",
                                },
                            })
                        }
                    >
                        <option value="false">
                            No
                        </option>

                        <option value="true">
                            Sí
                        </option>
                    </select>
                </div>

                {/* Privado */}
                <div>
                    <label className="block mb-2 font-medium">
                        ¿Proviene del sector privado?
                    </label>

                    <select
                        className="w-full border border-gray-200 rounded-2xl px-5 py-4"
                        value={
                            formData.academicInfo
                                .comesFromPrivateSchool
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                academicInfo: {
                                    ...formData.academicInfo,
                                    comesFromPrivateSchool:
                                        e.target.value === "true",
                                },
                            })
                        }
                    >
                        <option value="false">
                            No
                        </option>

                        <option value="true">
                            Sí
                        </option>
                    </select>
                </div>

                {/* Estado académico */}
                <div>
                    <label className="block mb-2 font-medium">
                        Situación académica año anterior
                    </label>

                    <select
                        className="w-full border border-gray-200 rounded-2xl px-5 py-4"
                        value={
                            formData.academicInfo
                                .previousAcademicStatus
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                academicInfo: {
                                    ...formData.academicInfo,
                                    previousAcademicStatus:
                                        e.target.value,
                                },
                            })
                        }
                    >
                        <option value="">
                            Seleccione
                        </option>

                        <option value="NO_ESTUDIOS">
                            No estudio
                        </option>

                        <option value="APROBO">
                            Aprobó
                        </option>

                        <option value="REPROBO">
                            Reprobó
                        </option>
                    </select>
                </div>

                {/* Curso */}
                <div>
                    <label className="block mb-2 font-medium">
                        Curso actual
                    </label>

                    <input
                        type="text"
                        placeholder="Ej: 5°"
                        className="w-full border border-gray-200 rounded-2xl px-5 py-4"
                        value={
                            formData.academicInfo.grade
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                academicInfo: {
                                    ...formData.academicInfo,
                                    grade:
                                        e.target.value,
                                },
                            })
                        }
                    />
                </div>

            </div>

        </div>
    );
}

export default AcademicStep;