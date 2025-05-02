import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import useAuthStore from "../components/ProtectedRoute";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../pages/Profile";
import ProjectDetail from "../pages/ProjectDetail";

export default function AppRoutes() {
    // const {} = useAuthStore((state) => state.user);
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects/:projectId" element={<ProjectDetail />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}