import { useState } from "react";
import { crearmenor } from "../repository/network/service";
import Swal from "sweetalert2";

export default function RegistroMenor() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipo_de_identificacion, setTipo_de_identificacion] = useState("");
  const [nu_identificacion, setNu_identificacion] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [Edad, setEdad] = useState("");
  const  [check, setCheck] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      nombre,
      apellido,
      tipo_de_identificacion,
      nu_identificacion,
      email,
      celular,
      Edad
    );

    if (
      nombre == "" ||
      apellido == "" ||
      tipo_de_identificacion == "" ||
      nu_identificacion == "" ||
      email == "" ||
      celular == "" ||
      Edad == ""
    ) {
      return alert("Por favor llena todos los campos");
    }

    const menor = {
      nombres: nombre,
      apellidos: apellido,
      tipoIdentificacion: tipo_de_identificacion,
      numeroIdentificacion: nu_identificacion,
      edad: Edad,
      correo: email,
      telefono: celular,
    };

    console.log(menor);

    const response = await crearmenor(menor);

    if (response) {
        
        Swal.fire({
            icon: "success",
            title: "Menor registrado",
            showConfirmButton: false,
            timer: 2000,

        })

        setTimeout(() => {
            window.location.href = "/perfil";
        }, 2000);
    }

  };

  return (
    <>
      <div
        className="modal fade"
        id="modalRegistroMenor"
        data-bs-backdrop="static"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog        ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Registrar Menor
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="col-12">
                <div className="text-black">
                  <div className="mx-5 align-items-center ">
                    <form>
                      <div className="d-flex justify-content-center  ">
                        <div className="align-items-center">
                          <h3 className="fw-bold fs-2 my-4 text-center ">
                            {" "}
                            Registrar Menor
                          </h3>
                          <h5 className="my-4 text-center fw-light">
                            Ingresa los datos a registrar.
                          </h5>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          className="form-label fw-bolder fs-6 "
                          htmlFor="nombre"
                        >
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
                        <label
                          className="form-label fw-bolder fs-6"
                          htmlFor="apellido"
                        >
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
                        <label
                          className="form-label fw-bolder fs-6"
                          htmlFor="ti_identifiacion"
                        >
                          Tipo de identificacion
                        </label>
                        <select
                          name="tipo_de_identificacion"
                          id="ti_identifiacion"
                          onChange={(e) =>
                            setTipo_de_identificacion(e.target.value)
                          }
                          placeholder="Selecciona tu tipo de identificacion"
                          className="form-select form-select-lg mb-3 border-secondary "
                        >
                          <option value="select">
                            Selecciona tu tipo de identificacion
                          </option>
                          <option value="T.I">Tarjeta de identidad</option>
                          <option value="R.C">
                            Registro Civil de nacimiento
                          </option>
                        </select>
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          className="form-label fw-bolder fs-6"
                          htmlFor="nu_identificacion"
                        >
                          Numero de identificacion
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setNu_identificacion(e.target.value)}
                          id="nu_identificacion"
                          className="form-control form-control-lg border-secondary "
                          placeholder="Numero de identificacion"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          className="form-label fw-bolder fs-6"
                          htmlFor="Edad"
                        >
                          Edad
                        </label>
                        <input
                          type="number"
                          id="Edad"
                          onChange={(e) => setEdad(e.target.value)}
                          className="form-control form-control-lg border-secondary "
                          placeholder="15"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          className="form-label fw-bolder fs-6"
                          htmlFor="email"
                        >
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
                        <label
                          className="form-label fw-bolder fs-6"
                          htmlFor="celular"
                        >
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
                          Aceptas los términos y condiciones
                        </label>
                      </div>

                      <div className="pt-1 mb-4 w-100">
                      {check ? (
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg w-100 btn-block mb-4 "
                      onClick={handleSubmit}
                    >
                      Registrar Menor
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg w-100 btn-block mb-4 "
                      disabled
                    >
                      Registrar Menor
                    </button>
                  )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
