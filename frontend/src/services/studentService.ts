const API =
    "http://localhost:3000/api/students";

export async function getStudents() {
    const response = await fetch(API);

    return response.json();
}

export async function createStudent(
    student: any
) {
    const response = await fetch(API, {
        method: "POST",

        headers: {
            "Content-Type":
                "application/json",
        },

        body: JSON.stringify(student),
    });

    return response.json();
}