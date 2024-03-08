export default function Register() {
  return (
    <div>
      <section className="my-2 d-flex justify-content-center mx-5 ">
        <div className="col-6 align-items-center ">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt=""
            className="w-75"
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
                    className="form-control form-control-lg border-secondary "
                    placeholder="Perez Perez"
                  />
  
                </div>

                <div className="form-outline mb-4">

                  <select
                    name="tipo_de_identificacion"
                    id="ti_identifiacion"
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
                    id="celular"
                    className="form-control form-control-lg border-secondary "
                    placeholder="300-456-7890"
                  />
       
                </div>

                <div className="form-outline mb-4">
                <label className="form-label fw-bolder fs-6" htmlFor="password">
                    Escribe tu Contraseña
                  </label>
                  <input
                    type="password"
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
                    type="button"
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
