interface Props {
    formData: any;
    setFormData: any;
}

function SocioeconomicStep({
    formData,
    setFormData,
}: Props) {
    return (
        <div>

            <h2 className="text-3xl font-bold mb-8">
                Información Socioeconómica
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

                <input
                    type="text"
                    placeholder="Número SISBEN"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={
                        formData.socioeconomicInfo.sisbenCard
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            socioeconomicInfo: {
                                ...formData.socioeconomicInfo,
                                sisbenCard:
                                    e.target.value,
                            },
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="EPS"
                    className="border border-gray-200 rounded-2xl px-5 py-4"
                    value={
                        formData.socioeconomicInfo.eps
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            socioeconomicInfo: {
                                ...formData.socioeconomicInfo,
                                eps: e.target.value,
                            },
                        })
                    }
                />

            </div>

        </div>
    );
}

export default SocioeconomicStep;