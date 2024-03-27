import PropTypes from 'prop-types'

export default function DetallesPosts({dataPost}) {

  return (
    <>
     
     <div className="modal fade" id="ModalDetallesPost" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ModalDetallesPostLabel" aria-hidden="true">
       <div className="modal-dialog">
         <div className="modal-content">
           <div className="modal-header">
             <h5 className="modal-title" id="ModalDetallesPostLabel">Detalles Post</h5>
             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div className="modal-body">
                <div className="container">
                <div className="row my-3">
                    <div className="col-12">
                    <div className="card border-0">
                        <div className="card-body">
                        <h5 className="card-title">Nombre</h5>
                        <p className="card-text">{dataPost.nombre}</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12">
                    <div className="card border-0">
                        <div className="card-body">
                        <h5 className="card-title">Descripcion</h5>
                        <p className="card-text">{dataPost.descripcion}</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12">
                    <div className="card border-0">
                        <div className="card-body">
                        <h5 className="card-title m-5">Foto</h5>
                        <img src={dataPost.foto} className="img-fluid" alt="..."/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
           </div>
           <div className="modal-footer">
             <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">cerrar</button>
           </div>
         </div>
       </div>
     </div> 
    </>
  )
}

//definition props

DetallesPosts.propTypes = {
    dataPost: PropTypes.object.isRequired
}
