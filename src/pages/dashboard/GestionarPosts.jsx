import { useEffect, useState } from "react";
import { deleteNoticia, getNoticia, getNoticias } from "../../repository/network/service";
import DetallesPosts from "../../components/DetallesPosts";

export default function GestionarPosts() {
  const [posts, setPosts] = useState([]);
    const [Data,setData] = useState([ ]);
  useEffect(() => {
    console.log("GestionarPosts");
    obtenerPosts();
  }, []);

  const obtenerPosts = async () => {
    try {
      const response = await getNoticias();
      setPosts(response);
    } catch (error) {
      console.error(error);
    }
  };

    const verDetalles = async(id) => {
        try {
            const noticia = await getNoticia(id)
            setData(noticia)

        }catch (error) {
            console.error(error)
        }
    }

  const eliminarPost = async (id) => {
    try {
      await deleteNoticia(id);
      obtenerPosts();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <div className="container-fluid">
        <div className="row bg-primary opacity-75 text-white">
          <div className="col-12">
            <h1 className="text-center my-5">Bienvenido a tu dashboard</h1>
          </div>
        </div>

        <div className="container">
          <table className="table table-striped table-borderless ">
            <thead>
              <tr>
                <th className="fs-3">Nombre</th>
                <th className="fs-3">Descripcion</th>
                <th className="fs-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return (
                  <tr key={post.nombre}>
                    <td>{post.nombre}</td>
                    <td className="w-75">{post.descripcion}</td>
                    <td>
                      <button
                        className="btn "
                        data-bs-toggle="modal"
                        data-bs-target="#ModalDetallesPost"
                        onClick={() => {
                            verDetalles(post._id)
                        }}
                      >
                        <i className="bi bi-eye fs-3 mx-3"></i>
                      </button>
                      <button
                        className="btn "
                        onClick={() => {
                          eliminarPost(post._id);
                        }}
                      >
                        <i className="bi bi-trash-fill fs-3 mx-3 text-danger" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <DetallesPosts dataPost={Data}/>
    </>
  );
}
