import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import RenderLandingPage from "../components/RenderLandingPage";
import HomeDashboard from "../pages/dashboard/HomeDashboard";
import PrivateRoute from "./PrivateRoute";
import CrearAdministradores from "../pages/dashboard/administradores/CrearAdministradores";
import VerAdministradores from "../pages/dashboard/administradores/VerAdministradores";
import CrearMenores from "../pages/dashboard/menores/CrearMenores";
import VerMenores from "../pages/dashboard/menores/VerMenores";
import CrearUsaros from "../pages/dashboard/usuarios/CrearUsarios";
import VerUsuarios from "../pages/dashboard/usuarios/VerUsuarios";

export default function AppRoute() {

  return (
    <Routes>
      <Route element={<RenderLandingPage />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="dashboard/*" element={<HomeDashboard />} />

        <Route path="verAdministradores" element={<VerAdministradores />} />
        <Route
          path="agregarAdministradores"
          element={<CrearAdministradores />}
        />
        <Route path="verMenores" element={<VerMenores />} />
        <Route path="agregarMenores" element={<CrearMenores />} />
        <Route path="verUsuarios" element={<VerUsuarios />} />
        <Route path="agregarUsuario" element={<CrearUsaros />} />
      </Route>

      <Route path="login" element={<LogIn />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}
