const API =
    "http://localhost:3000/api/ai";

export async function generateRecommendation(
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