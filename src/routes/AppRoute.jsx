import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import RenderLandingPage from "../components/RenderLandingPage";
import HomeDashboard from "../pages/dashboard/HomeDashboard";
import Perfil from "../pages/Perfil";
import GestionarPosts from "../pages/dashboard/GestionarPosts";

export default function AppRoute() {
  return (
    <Routes>
      <Route element={<RenderLandingPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>

      <Route path="/dashboard" element={<HomeDashboard />} />
      <Route path="/gestionarPost" element={<GestionarPosts />} />

      <Route path="login" element={<LogIn />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}
