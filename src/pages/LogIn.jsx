import Madre from "../assets/madre.jpg";
import { useState } from "react";
import {logInfetch} from '../repository/network/service.js';

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    if (email == "" || password == "") {
       return alert("Por favor llena todos los campos"); 
    }

   {/* if (email == "confiappadm2024@gmail.com"  && password == "confiapp2024") {
      localStorage.setItem("token", "admin");
      window.location.href = "/dashboard";
    
      
    }else{
      return alert("Usuario o contraseña incorrectos");
    }*/}
    const user = {
      email: email,
      password: password
    }
    const autenticate = login(user);

    if (autenticate.token) {
      localStorage.setItem("token", autenticate.token);
      window.location.href = "/dashboard";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
    


  };

  const login = async (user) => {
    try {
      const response = await logInfetch(user);
return response;

    } catch (error) {
      console.error(error);

    }
  }

  return (
    <div>
      <section className="text-center ">
        <div className="container  d-flex justify-content-center">
          <div className="row align-items-center">
            <div className="col-6 px-5">
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bolder mb-5">Iniciar Sesión</h2>
                <form>
                  <div className="form-floating mb-4 ">
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control border-secondary"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control border-secondary"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="form-check d-flex mb-4">
                    <input
                      className="form-check-input me-2 text-white border-black  "
                      type="checkbox"
                      onChange={(e) => setCheck(e.target.checked)}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-dark fw-medium "
                      htmlFor="flexCheckDefault"
                    >
                      Aceptas{" "}
                      <a href="#" className=" text-dark">
                        {" "}
                        Términos y condiciones
                      </a>
                    </label>
                  </div>

                  {check ? (
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg w-100 btn-block mb-4 "
                      onClick={handleSubmit}
                    >
                      Iniciar Sesión
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg w-100 btn-block mb-4 "
                      disabled
                    >
                      Iniciar Sesión
                    </button>
                  )}

                  <p className="small mb-5 pb-lg-2">
                    <a
                      className="text-muted text-decoration-none  "
                      href="/register"
                    >
                      No estas registrado?{" "}
                      <span className="text-black fw-bold ">
                        Registrate aquí
                      </span>
                    </a>
                  </p>
                </form>
              </div>
            </div>

            <div className="col-6">
              <img
                src={Madre}
                className=" rounded-4 shadow-4"
                alt=""
                style={{ height: "100vh" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
