import React from "react";

import ProtectedRoute from "./protected/ProtectedRoute";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import Cases from "./pages/Cases";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import Dashboard from "./dashboard/Dashboard";

import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>

    <AuthProvider>

      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/casos"
            element={<Cases />}
          />

          <Route
            path="/recursos"
            element={<Resources />}
          />

          <Route
            path="/contacto"
            element={<Contact />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>

    </AuthProvider>

  </React.StrictMode>
);