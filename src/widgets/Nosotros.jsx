
import Equipo from '../assets/equipo.jpg'


export default function Nosotros() {
  return (
    <>


    <section className="container h-auto my-5 " >
      <div className="row justify-content-around my-5 py-5">
        <div className="col-md-4 mx-4">
          <div className="container">
            <h2 className=" fw-bold fs-1">NOSOTROS</h2>
            <h5 className='text-secondary'>Cada integrante de nuestro equipo aporta su talento y dedicación para desarrollar una aplicación que prioriza la seguridad y la tranquilidad de tu familia. Desde el diseño de funciones hasta la implementación de medidas de seguridad, trabajamos juntos para ofrecerte una experiencia fluida y confiable. Nuestro compromiso es asegurarnos de que cada aspecto de la aplicación esté cuidadosamente diseñado para brindarte la mejor experiencia posible.</h5>
          </div>
        </div>
        <div className="col-md-5">
          <div className="container">
            <div className="card" style={{width:"18rem"}}>
              <img src={Equipo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Porque elegirnos?</h5>
                <p className="card-text">Unir a padres responsables con sus hijos mediante la confianza</p>
                b5
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      

    </>
  )
}
