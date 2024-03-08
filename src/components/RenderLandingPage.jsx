import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function RenderLandingPage() {
  return (
    <div className="containerRenderv">
      <Navbar />

        <Outlet />

      <Footer />
    </div>
  );
}
