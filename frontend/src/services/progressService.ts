const API =
    "http://localhost:3000/api/progress";

export async function getProgress(
    studentId: string
) {
    const response =
        await fetch(
            `${API}?student=${studentId}`
        );

    return response.json();
}

export async function createProgress(
    data: any
) {
    const response =
        await fetch(API, {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json",
            },

            body: JSON.stringify(data),
        });

    return response.json();
}