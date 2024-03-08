import background5 from "../assets/background-5.png";
import Cards from "../widgets/Cards";
import FormularioReportar from "../widgets/FormularioReportar";
import Nosotros from "../widgets/Nosotros";

export default function Home() {
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
        <div className="container d-flex justify-content-around  h-auto w-100 my-4">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>

      <div className="reportarDesaparecido my-5 container my-5 py-5">
        <FormularioReportar />
      </div>
    </>
  );
}
