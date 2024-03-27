import { useState } from "react";
import { createNoticia } from "../repository/network/service";
import Swal from "sweetalert2";

export default function FormularioReportar() {
  const [nombre, setNombre] = useState("");
  const [foto, setFoto] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const noticia = {
      nombre: nombre,
      foto: foto,
      descripcion: descripcion,
    };

    const response = await createNoticia(noticia);

    if (response) {
      //alerta con sweetalert
      Swal.fire({
        icon: "success",
        title: "Reporte enviado",
        showConfirmButton: false,
        timer: 2000,
      });

      //redireccionar despues de 2 segundos
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);

    }

  };

  return (
    <>
      <h1 className="text-center fw-bold">Reportar Desaparecido</h1>
      <div className="d-flex justify-content-center ">
        <p className="text-center fs-3 align-items-center w-50 ">
          haz tu reporte enviando los datos de la persona desaparecida y una
          descripcion del lugar donde fue vista por ultima vez.
        </p>
      </div>
      <div className="d-flex justify-content-center my-5 ">
        <form className="w-50">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control border-secondary "
              id="nombre"
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
            />
            <label htmlFor="nombre">Nombre completo</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="file"
              className="form-control border-secondary"
              onChange={(e) => setFoto(e.target.value)}
              id="foto"
            />
            <label htmlFor="foto">Foto</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control border-secondary "
              id="descripcion"
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Descripción"
              style={{ height: "150px" }}
            ></textarea>
            <label htmlFor="descripcion">Descripción</label>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-dark w-100 my-4 fw-bold btn-block btn-lg "
          >
            ENVIAR REPORTE
          </button>
        </form>
      </div>
    </>
  );
}
