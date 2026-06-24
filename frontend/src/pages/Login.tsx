import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import Navbar from "../components/Navbar";

import logo from "../assets/logo_solo.png";

import card_informativa from "../assets/card_informativa.png";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const success = await login(
      email,
      password
    );

    if (success) {
      navigate("/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-[#F7FAFC]">

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="pt-36 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div className="hidden lg:flex flex-col items-center justify-center">

            <h1 className="text-5xl font-bold text-gray-800 mt-10 text-center leading-tight">
              Bienvenido a
              <span className="block text-blue-500">
                Educación Para el Mundo
              </span>
            </h1>

            <img
              src={card_informativa}
              alt="EPM"
              className="w-[350px] drop-shadow-2xl"
            />

            <p className="mt-8 text-xl text-gray-600 text-center max-w-xl leading-relaxed">
              Plataforma inteligente para apoyar a docentes
              y estudiantes mediante inteligencia artificial
              inclusiva.
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">

            <form
              onSubmit={handleLogin}
              className="bg-white p-12 rounded-[40px] shadow-2xl w-full max-w-md border border-gray-100"
            >

              <div className="flex justify-center mb-8">

                <img
                  src={logo}
                  alt="EPM"
                  className="w-24"
                />

              </div>

              <h1 className="text-4xl font-bold text-center text-blue-500">
                Iniciar Sesión
              </h1>

              <p className="text-center text-gray-500 mt-3 mb-10">
                Accede a la plataforma EPM
              </p>

              {/* Email */}
              <div className="mb-6">

                <label className="block mb-2 text-gray-700 font-medium">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  placeholder="correo@epm.com"
                  className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

              </div>

              {/* Password */}
              <div className="mb-8">

                <label className="block mb-2 text-gray-700 font-medium">
                  Contraseña
                </label>

                <input
                  type="password"
                  placeholder="********"
                  className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl text-lg font-semibold transition shadow-lg shadow-blue-200"
              >
                Iniciar Sesión
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;