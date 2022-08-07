import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../component/navbar";
import Login from "../component/loginform/loginform";
//30/07
import config from "../config";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";

export const Account = () => {
  //verifiacación del token 31/07
  const navigate = useNavigate();
  const [loading, SetLoading] = useState(true);
  const token = localStorage.token;

  const {store, actions} = useContext(Context); 

  // obtener userid:
  useEffect(
      () => {actions.getUserId()}, [])

  useEffect(() => {
    if (token) {
      fetch(`${config.hostname}/api/validatoken`, {
        headers: {
          method: "GET",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.status == 200) {
          // return res.json();
          SetLoading(false);
        } else {
          SetLoading(false);
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, []);

  //He cambiado sessionStorage por localStorage 30/07
  // const token = localStorage.getItem("token");
  const id = localStorage.getItem("user_id");
  const params = useParams();

  const [data, setData] = useState({});

  //30/07
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [img, setImg] = useState();
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU",
  ]);

  //He descomentado este useEffect ()
  useEffect(() => {
    fetch(
      //url anterior no tenía separacion entre user y id. La buena es user/${id} 30/07
      `${config.hostname}/api/user/${id}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  //funcion para cambiar nombre 30/07

  const cambiarNombre = () => {
    if (nuevoNombre !== "") {
      const opts = {
        method: "PUT",
        headers: {
          
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: id,
          name: nuevoNombre,
        }),
      };

      fetch(`${config.hostname}/api/user/${id}`, opts).then((resp) => {
        if (resp.status === 200) {
          window.location.reload();
        }
      });
    }
  };

  /*imagen*/
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);



  const onImageChange = (e) => {
    setImages([...e.target.files]);
    setImg(e.target.files[0]);
  };


  return (
    <>
      <Navbar />
      <div className="">
        <h2 className=" h2user">Mi cuenta</h2>
      </div>

      <div className="avatar-upload">
        <div className="avatar-edit">
          <input
            type="file"
            id="imageUpload"
            accept=".png, .jpg, .jpeg"
            className=""
            onChange={onImageChange}
          />
          <label className="imageUpload" for="imageUpload">
            +
          </label>
        </div>
        <div className="avatar-preview">
          {imageURLs.map((imageSrc) => (
            <img src={imageSrc} id="imagePreview" />
          ))}
        </div>
      </div>

      <div className="infouser">
        <p>
          <span className="infolabel">Nombre:</span> {data.name}
        </p>
        <p>
          <span className="infolabel">Nombre de usuario:</span> {data.user_name}
        </p>
        <p>
          <span className="infolabel">Email:</span> {data.email}
        </p>
        <button
          className="editarinfo-button"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Editar info
        </button>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title infolabel" id="exampleModalLabel">
                Editar información
              </h5>
              <button
                type="button"
                className="botoncerrar"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* cuerpo del body */}
              <form className="">
                <label className="login-label">Nuevo nombre</label>
                <input
                  className="login-input"
                  type="text"
                  placeholder="Escribe tu nuevo nombre"
                  name="name"
                  onChange={(e) => {
                    setNuevoNombre(e.target.value);
                  }}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="editarinfo-button"
                onClick={cambiarNombre}
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
