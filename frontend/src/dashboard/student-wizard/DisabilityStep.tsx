interface Props {
    formData: any;
    setFormData: any;
}

function DisabilityStep({
    formData,
    setFormData,
}: Props) {
    return (
        <div>

            <h2 className="text-3xl font-bold mb-8">
                Discapacidad y Capacidades Excepcionales
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

                <select
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={
                        formData.disabilityInfo
                            .disability
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            disabilityInfo: {
                                ...formData.disabilityInfo,
                                disability:
                                    e.target.value,
                            },
                        })
                    }
                >
                    <option value="">
                        Discapacidad
                    </option>

                    <option value="NINGUNA">Ninguna</option>
                    <option value="SORDERA_PROFUNDA">Sordera profunda</option>
                    <option value="LESION_NEUROMUSCULAR">Lesión neuromuscular</option>
                    <option value="HIPOACUSIA">Hipoacusia</option>
                    <option value="AUTISMO">Autismo</option>
                    <option value="BAJA_VISION">Baja visión</option>
                    <option value="CEGUERA">Ceguera</option>
                    <option value="PARALISIS_CEREBRAL">Parálisis cerebral</option>
                    <option value="SINDROME_DOWN">Síndrome de Down</option>
                    <option value="MULTIPLE">Múltiple</option>
                </select>

                <select
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={
                        formData.disabilityInfo
                            .exceptionalAbility
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            disabilityInfo: {
                                ...formData.disabilityInfo,
                                exceptionalAbility:
                                    e.target.value,
                            },
                        })
                    }
                >
                    <option value="">
                        Capacidad excepcional
                    </option>

                    <option value="NINGUNA">Ninguna</option>
                    <option value="SUPERDOTADO">Superdotado</option>
                    <option value="TALENTO_CIENTIFICO">Talento científico</option>
                    <option value="TALENTO_TECNOLOGICO">Talento tecnológico</option>
                    <option value="TALENTO_ARTISTICO">Talento artístico</option>
                </select>

                <select
                    className="border border-gray-200 rounded-2xl px-5 py-4 md:col-span-2"
                    value={
                        formData.disabilityInfo
                            .displacementStatus
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            disabilityInfo: {
                                ...formData.disabilityInfo,
                                displacementStatus:
                                    e.target.value,
                            },
                        })
                    }
                >
                    <option value="">
                        Desplazamiento
                    </option>

                    <option value="NO_APLICA">
                        No aplica
                    </option>

                    <option value="DESPLAZADO">
                        Desplazado
                    </option>

                    <option value="DESVINCULADO_GRUPO_ARMADO">
                        Desvinculado grupo armado
                    </option>

                    <option value="HIJO_DESMOVILIZADO">
                        Hijo de adulto desmovilizado
                    </option>
                </select>

            </div>

        </div>
    );
}

export default DisabilityStep;