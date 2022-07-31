import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../component/navbar";
import config from "../config";

export const Userpage = () => {

  useEffect(() => {
    const token = localStorage.token;
    if (token) {
      fetch("/api/validatoken", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }) 
        .then((res) => {
          console.log(res)
          if (res.status !== 200) {
            // return res.json();
            navigate("/home");
          }
        })
    }
  }, []);


    const params = useParams()


      //useffect para cargar los datos del usuario

      const [data, setData] = useState([]);
      const id = params.id
      console.log(id)

      useEffect ( ()=>{
          fetch (`${config.hostname}/api/user/${params.id}`, {
              method: "GET"
          }).then(res => res.json())
          .then(res => setData(res))
      
      },[] )

      if(data.perfil_image==undefined) {
        data.perfil_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU"
      }
      
      
      
 return (
      <>
      {console.log(params.id)}
      {console.log(data.name)}
        <Navbar />
        <div className=" text-center">
          <h2 className=" h2user">{data.name}</h2>
          <p>{data.user_name}</p>
        </div>

        <div className="avatar-upload">

          <div className="avatar-preview">
              <img src={data.perfil_image} id="imagePreview" />
  
          </div>
        </div>

        <div className=" text-center">
        <h2 className=" h2user">Las pizzas de {data.name}</h2>
        </div>
  </>);


};
