import Tutor from "../../assets/tutor.png";
import Posts from "../../assets/posts.png";
import { useEffect } from "react";

export default function HomeDashboard() {
  const isauthenticated = () => {
    if (!localStorage.getItem("token")) {
      //redirec /home
      window.location.href = "/";
    }
  };

  useEffect(() => {
    isauthenticated();
  }, []);


  
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-black opacity-75 text-white">
          <div className="col-12">
            <h1 className="text-center my-5">Bienvenido a tu dashboard</h1>
          </div>
        </div>
        <div className="d-flex justify-content-center content-card  ">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 col-md-12 px-5 ">
              <div className="card px-2 py-5" style={{ width: "30rem" }}>
                <img src={Tutor} className="card-img-top img-fluid" alt="..." />
                <div className="card-body bg-white">
                  <h5 className="card-title text-black fw-bold">
                    Gestionar Tutores
                  </h5>
                  <p className="card-text">
                    En este apartado podrás gestionar a los tutores que se
                    encuentran en la plataforma.
                  </p>
                  <a href="#" className="btn btn-outline-primary fw-bold ">
                    Gestionar
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12 px-5">
              <div className="card px-2 py-5" style={{ width: "28rem" }}>
                <img src={Posts} className="card-img-top img-fluid" alt="..." />
                <div className="card-body bg-white">
                  <h5 className="card-title text-black fw-bold">
                    Gestionar Posts
                  </h5>
                  <p className="card-text">
                    En este apartado podrás gestionar los posts de desaparecidos
                    que se han publicado en la plataforma.
                  </p>
                  <a
                    href="/gestionarPost"
                    className="btn btn-outline-primary fw-bold"
                  >
                    Gestionar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
