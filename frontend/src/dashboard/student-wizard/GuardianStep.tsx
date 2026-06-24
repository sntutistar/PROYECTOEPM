interface Props {
    formData: any;
    setFormData: any;
}

function GuardianStep({
    formData,
    setFormData,
}: Props) {
    return (
        <div>

            <h2 className="text-3xl font-bold mb-8">
                Información del Acudiente
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

                <input
                    type="text"
                    placeholder="Nombre completo"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={formData.guardianInfo.fullName}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            guardianInfo: {
                                ...formData.guardianInfo,
                                fullName: e.target.value,
                            },
                        })
                    }
                />

                <select
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={formData.guardianInfo.documentType}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            guardianInfo: {
                                ...formData.guardianInfo,
                                documentType: e.target.value,
                            },
                        })
                    }
                >
                    <option value="">Tipo documento</option>
                    <option value="CC">CC</option>
                    <option value="TI">TI</option>
                    <option value="RC">RC</option>
                </select>

                <input
                    type="text"
                    placeholder="Número documento"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={formData.guardianInfo.documentNumber}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            guardianInfo: {
                                ...formData.guardianInfo,
                                documentNumber: e.target.value,
                            },
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Parentesco"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={formData.guardianInfo.relationship}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            guardianInfo: {
                                ...formData.guardianInfo,
                                relationship: e.target.value,
                            },
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Departamento expedición"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={
                        formData.guardianInfo.expeditionDepartment
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            guardianInfo: {
                                ...formData.guardianInfo,
                                expeditionDepartment:
                                    e.target.value,
                            },
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Municipio expedición"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={
                        formData.guardianInfo.expeditionMunicipality
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            guardianInfo: {
                                ...formData.guardianInfo,
                                expeditionMunicipality:
                                    e.target.value,
                            },
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Dirección"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={formData.guardianInfo.address}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            guardianInfo: {
                                ...formData.guardianInfo,
                                address: e.target.value,
                            },
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Barrio"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={formData.guardianInfo.neighborhood}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            guardianInfo: {
                                ...formData.guardianInfo,
                                neighborhood: e.target.value,
                            },
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Celular"
                    className="border border-gray-200 rounded-2xl px-5 py-4 md:col-span-2"
                    value={formData.guardianInfo.cellphone}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            guardianInfo: {
                                ...formData.guardianInfo,
                                cellphone: e.target.value,
                            },
                        })
                    }
                />

            </div>

        </div>
    );
}

export default GuardianStep;