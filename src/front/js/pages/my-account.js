import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../component/navbar";
import Login from "../component/loginform/loginform";



export const Account = () => {
  
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const id = sessionStorage.getItem("user_id");
  const params = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://3001-franciscoes-pizzaprojec-p6abymg56kx.ws-eu54.gitpod.io/api/user/${id}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  const [imageURLs, setImageURLs] = useState([
    "https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png",
  ]);



  if (token && token !== undefined && token !== null) {
    return (
      <>
        <Navbar />
        <div>
          <h2 className=" h2user">Mi cuenta</h2>
        </div>

        <div className="avatar-upload">
          <div className="avatar-edit">
            <input
              type="file"
              id="imageUpload"
              accept=".png, .jpg, .jpeg"
              className=""
              // onChange={(e) => setImg(e.target.files)}
              //   onChange={onImageChange}
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
            <span className="infolabel">Nombre de usuario:</span>{" "}
            {data.user_name}
          </p>
          <p>
            <span className="infolabel">Email:</span> {data.email}
          </p>
          <button className="editarinfo-button">Editar info</button>
        </div>
      </>
    );
  }else {
    return (
      
      <>
      <Navbar />
      <h2 className=" h2user">Inicia sesión para acceder a tu cuenta</h2>
      <Login />

      </>     

    )

    
    
  }
};
