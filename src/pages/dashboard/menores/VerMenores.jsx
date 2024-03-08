
export default function VerMenores() {
  return (
    <>
      <div className="container w-75">
        <h2 className="text-center my-5 fw-bold">Gestionar Menores</h2>
        <div className="row">
          <div className="col-12">
            <div className="card bg-white">
              <div className="card-body bg-white">
                <table className="table table-striped">
                  <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">Correo</th>
                      <th scope="col">Numero Id</th>
                      <th scope="col">Telefono</th>
                      <th scope="col">Edad</th>
                      <th scope="col">Acciones</th>

                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
