
export default function FormularioReportar() {
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
              <input type="text" className="form-control border-secondary " id="nombre" placeholder="Nombre" />
              <label htmlFor="nombre">Nombre</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control border-secondary " id="lugarResidencia" placeholder="Lugar de Residencia" />
              <label htmlFor="lugarResidencia">Lugar de Residencia</label>
            </div>
            <div className="form-floating mb-3">
              <textarea className="form-control border-secondary " id="descripcion" placeholder="Descripción" style={{ height: "150px" }}></textarea>
              <label htmlFor="descripcion">Descripción</label>
            </div>
            
              <button type="submit" className="btn btn-dark w-100 my-4 fw-bold btn-block btn-lg ">ENVIAR REPORTE</button>
        
          </form>
        </div> 
    </>
  )
}
