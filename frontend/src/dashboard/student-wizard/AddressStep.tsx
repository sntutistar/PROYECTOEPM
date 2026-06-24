interface Props {
    formData: any;
    setFormData: any;
}

function AddressStep({
    formData,
    setFormData,
}: Props) {
    return (
        <div>

            <h2 className="text-3xl font-bold mb-8">
                Información de Residencia
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

                <select
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={
                        formData.addressInfo
                            .socioeconomicLevel
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            addressInfo: {
                                ...formData.addressInfo,
                                socioeconomicLevel:
                                    e.target.value,
                            },
                        })
                    }
                >
                    <option value="">
                        Estrato
                    </option>

                    <option value="1">
                        Estrato 1
                    </option>

                    <option value="2">
                        Estrato 2
                    </option>

                    <option value="3">
                        Estrato 3
                    </option>

                    <option value="4">
                        Estrato 4
                    </option>

                    <option value="5">
                        Estrato 5
                    </option>

                    <option value="6">
                        Estrato 6
                    </option>
                </select>

                <input
                    type="text"
                    placeholder="Dirección"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={formData.addressInfo.address}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            addressInfo: {
                                ...formData.addressInfo,
                                address:
                                    e.target.value,
                            },
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Barrio"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={
                        formData.addressInfo.neighborhood
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            addressInfo: {
                                ...formData.addressInfo,
                                neighborhood:
                                    e.target.value,
                            },
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Teléfono fijo"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={
                        formData.addressInfo.landlinePhone
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            addressInfo: {
                                ...formData.addressInfo,
                                landlinePhone:
                                    e.target.value,
                            },
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Celular"
                    className="border border-gray-200 rounded-2xl px-5 py-4 md:col-span-2"
                    value={
                        formData.addressInfo.cellphone
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            addressInfo: {
                                ...formData.addressInfo,
                                cellphone:
                                    e.target.value,
                            },
                        })
                    }
                />

            </div>

        </div>
    );
}

export default AddressStep;