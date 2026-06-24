interface Props {
    formData: any;
    setFormData: any;
}

function PersonalStep({
    formData,
    setFormData,
}: Props) {
    return (
        <div>

            <h2 className="text-3xl font-bold mb-8">
                Información Personal
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Nombre + Foto */}

                <div className="md:col-span-3 flex gap-8 items-start">

                    {/* Nombre */}

                    <div className="flex-1">

                        <input
                            type="text"
                            placeholder="Nombre completo"
                            className="w-full border border-gray-200 rounded-2xl px-5 py-4"
                            value={formData.personalInfo.fullName}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    personalInfo: {
                                        ...formData.personalInfo,
                                        fullName: e.target.value,
                                    },
                                })
                            }
                        />

                    </div>

                </div>

                {/* Información Básica */}

                <div className="md:col-span-3 bg-gray-50 rounded-3xl p-6">

                    <h3 className="text-lg font-semibold mb-6 text-gray-700">
                        Información Básica
                    </h3>

                    <div className="grid md:grid-cols-3 gap-5">

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">
                                Fecha de nacimiento
                            </label>

                            <input
                                type="date"
                                className="w-full border border-gray-200 rounded-2xl px-5 py-4 bg-white"
                                value={formData.personalInfo.birthDate}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        personalInfo: {
                                            ...formData.personalInfo,
                                            birthDate: e.target.value,
                                        },
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">
                                Edad
                            </label>

                            <input
                                type="number"
                                placeholder="Edad"
                                className="w-full border border-gray-200 rounded-2xl px-5 py-4 bg-white"
                                value={formData.personalInfo.age}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        personalInfo: {
                                            ...formData.personalInfo,
                                            age: e.target.value,
                                        },
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">
                                Género
                            </label>

                            <select
                                className="w-full border border-gray-200 rounded-2xl px-5 py-4 bg-white"
                                value={formData.personalInfo.gender}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        personalInfo: {
                                            ...formData.personalInfo,
                                            gender: e.target.value,
                                        },
                                    })
                                }
                            >
                                <option value="">
                                    Seleccione
                                </option>

                                <option value="MASCULINO">
                                    Masculino
                                </option>

                                <option value="FEMENINO">
                                    Femenino
                                </option>

                                <option value="OTRO">
                                    Otro
                                </option>
                            </select>
                        </div>

                    </div>

                </div>

                {/* Lugar de Nacimiento */}

                <div className="md:col-span-3 bg-gray-50 rounded-3xl p-6">

                    <h3 className="text-lg font-semibold mb-6 text-gray-700">
                        Lugar de Nacimiento
                    </h3>

                    <div className="grid md:grid-cols-2 gap-5">

                        <input
                            type="text"
                            placeholder="Departamento"
                            className="border border-gray-200 rounded-2xl px-5 py-4 bg-white"
                            value={formData.personalInfo.birthDepartment}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    personalInfo: {
                                        ...formData.personalInfo,
                                        birthDepartment: e.target.value,
                                    },
                                })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Municipio"
                            className="border border-gray-200 rounded-2xl px-5 py-4 bg-white"
                            value={formData.personalInfo.birthMunicipality}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    personalInfo: {
                                        ...formData.personalInfo,
                                        birthMunicipality: e.target.value,
                                    },
                                })
                            }
                        />

                    </div>

                </div>

                {/* Información Médica */}

                <div className="md:col-span-3 bg-gray-50 rounded-3xl p-6">

                    <h3 className="text-lg font-semibold mb-6 text-gray-700">
                        Información Médica
                    </h3>

                    <div className="grid md:grid-cols-2 gap-5">

                        <select
                            className="border border-gray-200 rounded-2xl px-5 py-4 bg-white"
                            value={formData.personalInfo.bloodType}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    personalInfo: {
                                        ...formData.personalInfo,
                                        bloodType: e.target.value,
                                    },
                                })
                            }
                        >
                            <option value="">
                                Tipo de sangre
                            </option>

                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default PersonalStep;