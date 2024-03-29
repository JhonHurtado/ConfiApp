export default function Navbar() {

  const isauthenticated = () => {
    if (localStorage.getItem('token')) {
      return(
        <li className="nav-item">
        <a className="nav-link fw-bold fs-5 text-white" href="/Perfil">
          Perfil
        </a>
      </li>
      )
    }
  }


  return (
    <div className="position-absolute  w-100 z-index-2  py-4 px-5 navopacity" >
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold" href="#">
            ConfiApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-bold fs-5 text-white" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold fs-5 text-white" href="/#nosotros">
                  Nosotros
                </a>
              </li>
              {isauthenticated()}
            </ul>
            <div className="d-flex">
              <a className="btn btn-outline-white me-2 text-white btnLogin fw-bold" href="/login">
                INICIAR SESIÓN
              </a>
              <a className="btn btn-dark text-white fw-semibold" href="/register">
                REGISTRARSE
              </a>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
