import { useEffect, useState } from 'react';
import Madre from '../assets/team-3.jpg';
import RegistroMenor from '../widgets/RegistroMenor';
import { getMenores } from '../repository/network/service';


export default function Perfil() {

  const [menores, setMenores] = useState([]);

  const isauthenticated = ()=>{
    if(!localStorage.getItem('token')){
      //redirec /home
      window.location.href = "/"

    }
  
  }


  useEffect(() => {
    isauthenticated()
    obtenerMenores()

  }, [])


  const obtenerMenores = async () => {
    const response = await getMenores()
    setMenores(response)
    console.log(response)
  }


  return (

    <div className=' bg-dark '  style={{height:"100vh", width:"100%"}}>
    <div className="container d-flex justify-content-center h-100 w-100 bg-dark row ">
      <div className="align-items-center d-flex">
      <div className="container col-3 card h-75 ms-5 align-items-center ">
        <img src={Madre} className='w-50 mt-3 ' style={{borderRadius: "50%", objectFit: "cover"}} />

        <div className="align-items-start mt-5">
        <h4>samanta palacios</h4>
        <h4>312 222 2222</h4>
        <h4>samanta@gemail.com</h4>
      </div>

      </div>
      <div className="container col-9 card bg-white h-75 mx-5">
        <div className="row m-5">
          <div className="col-9">
            <h2>Menores a cargo {menores.length}</h2>

            {menores.map((menor) => {
              return (
                <>
                <p className=''>{menor.nombres}</p>
                </>
              )
            })}

            
          </div>
          <div className="col-3">
            <button className="btn btn-dark w-100" 
            data-bs-toggle="modal"
            data-bs-target="#modalRegistroMenor"

            >Agregar Menor</button>
          </div>
          <RegistroMenor />
        </div>

      </div>
      </div>
    </div>
    </div>
  )
}
