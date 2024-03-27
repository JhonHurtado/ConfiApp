import { useEffect, useState } from "react";
import background5 from "../assets/background-5.png";
import Cards from "../widgets/Cards";
import FormularioReportar from "../widgets/FormularioReportar";
import Nosotros from "../widgets/Nosotros";
import { getNoticias } from "../repository/network/service";

export default function Home() {
  const [Desaparecidos, setDesaparecidos] = useState([]);

  useEffect(() => {
    obtenerDesaparecidos();
  }, []);

  const slider = Desaparecidos.map((desaparecido, index) => {
    return (
      <div
        key={index}
        className={`carousel-item w-100 ${index === 0 ? "active" : ""}`}
      >
        <div className="d-flex justify-content-center">
          <img src={desaparecido.foto} className="d-block w-50" alt="..." />
        </div>
        <div className="carousel-caption d-md-block bg-body-secondary text-black">
          <h5>{desaparecido.nombre}</h5>
          <p>{desaparecido.descripcion}</p>
        </div>
      </div>
    );
  });

  const buttonIndicators = Desaparecidos.map((_, index) => {
    return (
      <button
        type="button"
        key={index}
        data-bs-target="#Desaparecidos"
        data-bs-slide-to={index}
        className="active text-black"
        aria-current="true"
        aria-label={`Slide ${index + 1}`}
      ></button>
    );
  });


  const obtenerDesaparecidos = async () => {
    const response = await getNoticias();
    setDesaparecidos(response);
    console.log(response);
  };

  return (
    <>
      <div
        className="welcome text-center"
        style={{ backgroundImage: background5 }}
      >
        <div className="containerImage p-5 align-items-center  ">
          <h1 className="text-white fw-bold ">Sientete Seguro Con ConfiApp</h1>
          <p>
            Cada vez llegamos a muchas mas personas brindandoles nuestro
            servicio
          </p>
        </div>
      </div>
      <div
        className="container d-flex justify-content-around  h-auto w-100 "
        style={{ marginTop: "-80px" }}
      >
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="containerNosotros container h-auto my-5  " id="nosotros">
        <Nosotros />
      </div>

      <div className="personasDesaparecidas">
        <h1 className="text-center fw-bold">Personas Desaparecidas</h1>
        <div className="d-flex justify-content-center ">
          <p className="text-center fs-3 align-items-center w-50 ">
            Las personas acontinuacion se encuantran desaparecidas, si tienes
            informacion comunicate con nosotros.
          </p>
        </div>
        <div className="container  justify-content-around  h-auto w-50 my-2">
          <div
            id="Desaparecidos"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">{buttonIndicators}</div>
            <div className="carousel-inner">{slider}</div>
            <button
              className="carousel-control-prev text-bg-danger"
              type="button"
              data-bs-target="#Desaparecidos"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next text-bg-danger"
              type="button"
              data-bs-target="#Desaparecidos"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon "
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="reportarDesaparecido my-5 container my-5 py-5">
        <FormularioReportar />
      </div>
    </>
  );
}
