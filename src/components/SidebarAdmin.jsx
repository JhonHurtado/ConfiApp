
import  { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {dataRouteAdmin,dataRouteTutor} from "../repository/local/dataRoute";


export default function SidebarAdmin() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    handleMenu();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenu = () => {
    const token = localStorage.getItem("token");

    let menuItems = [];

    if (token === "admin") {
      menuItems = dataRouteAdmin.map((item, index) => (
        <li className="nav-item dropdown my-3 dropMenu" key={index}>
          <a
            className={`nav-link dropdown-toggle text-dark `}
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {item.title}
          </a>
          <ul className="dropdown-menu dropItemMenu">
            {item.routes.map((route, routeIndex) => (
              <li key={routeIndex} className="my-3">
                <Link className={`dropdown-item `} to={route.path}>
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ));
    } else {
      menuItems = dataRouteTutor.map((item, index) => (
        <li className="nav-item dropdown dropMenu" key={index}>
          <a
            className="nav-link dropdown-toggle text-dark"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {item.title}
          </a>
          <ul className="dropdown-menu dropItemMenu">
            {item.routes.map((route, routeIndex) => (
              <li key={routeIndex}>
                <Link className="dropdown-item" to={route.path}>
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ));
    }

    return menuItems;
  };

  return (
    <>
      <nav className="navbar bg-navbar position-relative ">
        <div className="container-fluid">
          <button
            className="navbar-toggler btnOpenMenu"
            type="button"
            onClick={toggleSidebar}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-black"></span>
          </button>
          <h1 className="text-black fw-bold ">ConfiApp</h1>
          <a
            className="navbar-brand fw-normal text-decoration-none fst-normal "
            href="#"
          >
            <i className="bi bi-person-circle fs-3 fst-normal"> Perfil </i>
          </a>
          <div
            className={`offcanvas offcanvas-start bg-sidebar ${isSidebarOpen ? 'w-25' : 'w-0'} h-100 `}
            tabIndex="-1"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header mb-5 mt-3">
              <h5
                className="offcanvas-title fs-2 fw-bold text-center"
                id="offcanvasNavbarLabel"
              >
                ConfiApp
              </h5>
              <button
                type="button"
                className="btn-close me-2 text-reset fs-4"
                data-bs-dismiss="offcanvas"
                aria-label="Close"

                onClick={toggleSidebar}
              ></button>
            </div>
            <div className="offcanvas-body me-5">
              <ul className="navbar-nav justify-content-start flex-grow-1 ">
                {handleMenu()}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className={`content-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Outlet />
      </div>
    </>
  );
}
