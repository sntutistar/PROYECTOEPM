interface Props {
    formData: any;
    setFormData: any;
}

function DocumentStep({
    formData,
    setFormData,
}: Props) {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-8">
                Documento de Identidad
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

                <select
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={formData.documentInfo.documentType}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            documentInfo: {
                                ...formData.documentInfo,
                                documentType: e.target.value,
                            },
                        })
                    }
                >
                    <option value="">
                        Tipo documento
                    </option>

                    <option value="RC">
                        Registro Civil (RC)
                    </option>

                    <option value="TI">
                        Tarjeta de Identidad (TI)
                    </option>

                    <option value="CC">
                        Cédula de Ciudadanía (CC)
                    </option>
                </select>

                <input
                    type="text"
                    placeholder="Número documento"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={formData.documentInfo.documentNumber}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            documentInfo: {
                                ...formData.documentInfo,
                                documentNumber:
                                    e.target.value,
                            },
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Departamento expedición"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={
                        formData.documentInfo
                            .expeditionDepartment
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            documentInfo: {
                                ...formData.documentInfo,
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
                        formData.documentInfo
                            .expeditionMunicipality
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            documentInfo: {
                                ...formData.documentInfo,
                                expeditionMunicipality:
                                    e.target.value,
                            },
                        })
                    }
                />

            </div>
        </div>
    );
}

export default DocumentStep;