
import { useState } from 'react';
import image from '../assets/ado.avif'
import {RegisterUser} from '../repository/network/service.js'


export default function Register() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipo_de_identificacion, setTipo_de_identificacion] = useState("");
  const [nu_identificacion, setNu_identificacion] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [password, setPassword] = useState("");
  const [Re_password, setRe_password] = useState("");




  const handleSubmit = async(e) => {
    
    e.preventDefault();

    console.log(nombre, apellido, tipo_de_identificacion, nu_identificacion, email, celular, password, Re_password);

    if (nombre == "" || apellido == "" || tipo_de_identificacion == "" || nu_identificacion == "" || email == "" || celular == "" || password == "" || Re_password == "") {
      return alert("Por favor llena todos los campos");
    }

    if (password !== Re_password) {
      return alert("Las contraseñas no coinciden");
    }

    const user = {
      nombres: nombre,
      apellidos: apellido,
      tipoIdentificacion: tipo_de_identificacion,
      numerodeIdentificacion: nu_identificacion,
      email: email,
      telefono: celular,
      password: password,
    };
    

    const response = await RegisterUser(user);



    console.log(response)


  }





  return (
    <div>
      <section className="my-2 d-flex justify-content-center mx-5 ">
        <div className="col-6 align-items-center ">
          <img
            src={image}
            alt=""
            className="img-fluid w-75 h-75 "
          />
        </div>
        <div className="col-6">
          <div className="text-black">
            <div className="mx-5 align-items-center ">
              <form>
                <div className="d-flex justify-content-center  ">
                    <div className="align-items-center">
                    <h3 className="fw-bold fs-2 my-4 text-center "> Registrate</h3>
                <h5 className="my-4 text-center fw-light">Ingresa tus datos para registrarte.</h5>
                    </div>
                
                </div>
             

                <div className="form-outline mb-4">
                <label className="form-label fw-bolder fs-6 " htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    className="form-control form-control-lg border-secondary "
                    placeholder="Pedro Ramon"
                  />
 
                </div>

                <div className="form-outline mb-4">
                <label className="form-label fw-bolder fs-6" htmlFor="apellido">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    onChange={(e) => setApellido(e.target.value)}
                    className="form-control form-control-lg border-secondary "
                    placeholder="Perez Perez"
                  />
  
                </div>

                <div className="form-outline mb-4">

                  <select
                    name="tipo_de_identificacion"
                    id="ti_identifiacion"
                    onChange={(e) => setTipo_de_identificacion(e.target.value)}
                    placeholder="Selecciona tu tipo de identificacion"
                    className="form-select form-select-lg mb-3 border-secondary "
                  >
                    <option value="select">
                      Selecciona tu tipo de identificacion
                    </option>
                    <option value="c.c">Cedula de Ciudadania</option>
                    <option value="c.e">Cedula de extrangeria</option>
                  </select>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label fw-bolder fs-6" htmlFor="nu_identificacion">
                    Numero de identificacion
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setNu_identificacion(e.target.value)}
                    id="nu_identificacion"
                    className="form-control form-control-lg border-secondary "
                    placeholder="Debes ser mayor de edad"
                  />
 
                </div>

                <div className="form-outline mb-4">
                <label className="form-label fw-bolder fs-6" htmlFor="email">
                    Correo Electronico
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="form-control form-control-lg border-secondary "
                    placeholder="name@mail.com"
                  />
   
                </div>

                <div className="form-outline mb-4">
                <label className="form-label fw-bolder fs-6" htmlFor="celular">
                    Numero de telefono/celular
                  </label>
                  <input
                    type="number"
                    onChange={(e) => setCelular(e.target.value)}
                    id="celular"
                    className="form-control form-control-lg border-secondary "
                    placeholder="300-456-7890"
                  />
       
                </div>

                <div className="form-outline mb-4">

                <label className="form-label fw-bolder fs-6"

                htmlFor="password">
                    Escribe tu Contraseña
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    className="form-control form-control-lg border-secondary "
                    placeholder="*********"
                  />
     
                </div>

                <div className="form-outline mb-4">
                <label className="form-label fw-bolder fs-6" htmlFor="Re_password">
                    Confirma tu Contraseña
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setRe_password(e.target.value)}
                    id="Re_password"
                    className="form-control form-control-lg border-secondary "
                    placeholder="*********"
                  />
    
                </div>
                <div className="form-check d-flex mb-4">
                    <input
                      className="form-check-input me-2 text-white border-black  "
                      type="checkbox"

                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-dark fw-medium "
                      htmlFor="flexCheckDefault"
                    >
                      Aceptas los términos y condiciones
                    </label>
                  </div>

                <div className="pt-1 mb-4 w-100">
                  <button
                    className="btn btn-dark btn-lg  w-100"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    REGISTRATE AHORA
                  </button>
                </div>

                <p>
                  Ya tienes cuenta
                  <a href="/login" className="link-info">
                    {" "}
                    Inicia sesion aqui
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
