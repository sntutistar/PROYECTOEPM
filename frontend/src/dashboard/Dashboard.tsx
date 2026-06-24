import { useAuth } from "../context/AuthContext";

import AdminDashboard from "./AdminDashboard";

import TeacherDashboard from "./TeacherDashboard";

import StudentDashboard from "./StudentDashboard";

function Dashboard() {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-[#F4F7FB]">

            {/* Topbar */}
            <header className="bg-white border-b border-gray-100 px-12 py-6 flex items-center justify-between shadow-sm">

                <div>

                    <h1 className="text-4xl font-bold text-gray-800">
                        Bienvenido,
                        <span className="text-blue-500 ml-3">
                            {user?.name}
                        </span>
                    </h1>

                    <p className="text-gray-500 mt-2 text-lg">
                        {user?.email}
                    </p>

                </div>

                {/* Logout */}
                <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl transition shadow-lg"
                >
                    Cerrar sesión
                </button>

            </header>

            {/* Content */}
            <main>

                {user?.role === "admin" && (
                    <AdminDashboard />
                )}

                {user?.role === "teacher" && (
                    <TeacherDashboard />
                )}

                {user?.role === "student" && (
                    <StudentDashboard />
                )}

            </main>

        </div>
    );
}

export default Dashboard;