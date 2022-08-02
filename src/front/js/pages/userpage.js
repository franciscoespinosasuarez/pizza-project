import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../component/navbar";
import config from "../config";

export const Userpage = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("/api/validatoken", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res);
        if (res.status !== 200) {
          // return res.json();
          navigate("/home");
        }
      });
    }
  }, []);

  const params = useParams();

  //useffect para cargar los datos del usuario

  const [data, setData] = useState([]);
  const [pizzas, SetPizzas] = useState([]);
  const id = params.id;
  console.log(id);

  useEffect(() => {
    fetch(`${config.hostname}/api/user/${params.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res));

    //obtener pizzas de usuario
    fetch(`${config.hostname}/api/pizza/user/${params.id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        SetPizzas(data);
      });
  }, []);

  if (data.perfil_image == undefined) {
    data.perfil_image =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
  }

  return (
    <>
      {console.log(params.id)}
      {console.log(data.name)}
      <Navbar />
      <div className="container"> 
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
        <h2 className=" h2user mb-5">Las pizzas de {data.name}</h2>
      </div>
      <div className="grill-pizza-user">
      {pizzas.map((pizza) => {
        return (
          <div className="pizzacard-user">
            <div className="pizzacard-user-img-div">
               <img className="pizzacard-user-img" src={pizza.pizza_image}></img>
            </div>
            
            <p className="pizzacard-texto">{pizza.name}</p>

          </div>
          
        )
        })}
      </div>

        
      </div>
    </>
  );
};
