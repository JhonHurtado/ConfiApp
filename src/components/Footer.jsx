export default function Footer() {
  return (
    <div className="bg-black pt-5">
        <footer className="text-center text-white  mt-xl-5 pt-4 d-flex justify-content-around ">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="fs-1 mb-4">ConfiApp</h5>
            <p>Encuentrenos en redes sociales:</p>
            <div className="d-flex justify-content-center ">
              <a href="#!" className="me-4 text-white">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#!" className="me-4 text-white">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#!" className="me-4 text-white">
                <i className="bi bi-google fs-4"></i>
              </a>
              <a href="#!" className="me-4 text-white">
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Enlaces Utiles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Play Store
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Otros recursos</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  MIT ÑLicense
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Contribute
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Change Log
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

        </footer>
        <hr className="text-white mx-5 border-white bg-white"/>
        <div className="text-center p-5 text-white ">
              
            © {  new Date().getFullYear()} Copyright : {  } <span className="fw-bold">ConfiApp</span>
 
          </div>
      </div>
  );
}
