import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useState } from "react";
import Login from "../component/loginform/loginform";
import Register from "../component/registerform/registerform";
import { Navbar } from "../component/navbar";
import config from "../config";
import ingredientesfront from "../../img/ingredientesfront.png";
import dibujopizza from "../../img/dibujopizza.png";
import estrellas from "../../img/estrellas.jpg";
import { Footer } from "../component/footer";
import { Cabecera } from "../component/cabecera/cabecera";

export const Main = () => {
  const { store, actions } = useContext(Context);
  const token = localStorage.token;

  const navigate = useNavigate();
  const [loading, SetLoading] = useState(false);

  const exit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  };
  console.log(token)

  const validatetoken = () => {
 
      fetch(`${config.hostname}/api/validatoken`, {
        headers: {
          method: "GET",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.status == 200) {
          // return res.json();
          navigate("/home");
        }else {
          exit();
          navigate("/")
        }
    })

}



      // obtener userid:
  // useEffect(() => {
  //   actions.getUserId()}, [])

  // useEffect(() => {
  //   if (token) {
  //     SetLoading(true);
  //     setTimeout(validatetoken, 1000);
  //     // const validatetoken = () => {fetch(`${config.hostname}/api/validatoken`, {
  //     //   headers: {
  //     //     method: "GET",
  //     //     Authorization: `Bearer ${token}`,
  //     //   },
  //     // })
  //     //   .then((res) => {
  //     //     if (res.status == 200) {
  //     //       // return res.json();
  //     //       navigate("/home");

  //     //     }
  //     //   })}
  //   }
  // }, []);

  // if (loading) {
  //   return (
  //     <>
  //       <div className="loading-container">
  //         <div className="spinner"></div>
  //         <p className="loading-text">Cargando</p>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <Cabecera />
      {/* <div className="imagen-cabecera">
        <div className="container">
          <div className="cabecera">
            <div className="row cabecera-izq">
              <div className="col">
                <h1 className="h1cabecera mb-4">
                  Las mejores pizzas para hacer en casa
                </h1>
                <a className="boton-registrate" href="#prueba1">Registrate</a>
              </div>
            </div>

            <div className="col">
              <Login />
            </div>
          </div>
        </div>
      </div> */}
      {/* fin cabecera */}

      <section className="seccion-descripcion">
        <h2 className="h2home">Encuentra tu pizza en un par de clics</h2>
        <div className="show-info">
          <div className="row">
            <div className="col col-show-info">
              <div className="">
                <img
                  src={ingredientesfront}
                  className="card-img-top"
                  alt="..."
                />
                <div className="texto-info">
                  <p className="">Marca los ingredientes que tienes</p>
                </div>
              </div>
              {/* fin card */}
            </div>
            {/* fin columna */}

            <div className="col">
              <div className="">
                <img src={dibujopizza} className="card-img-top" alt="..." />
                <div className="texto-info">
                  <p className="">Elige la pizza que más te guste</p>
                </div>
              </div>
              {/* fin card */}
            </div>
            {/* fin columna */}

            <div className="col">
              <div className="">
                <img src={estrellas} className="card-img-top" alt="..." />
                <div className="texto-info">
                  <p className="">Valora la pizza</p>
                </div>
              </div>
              {/* fin card */}
            </div>
            {/* fin columna */}
          </div>
          {/* fin show info */}
        </div>
      </section>

      <section className="login-section">
        <h2 className="h2home" id="prueba1">
          Regístrate y encuentra de tu pizza ideal
        </h2>
        <Register />
      </section>

      <Footer />
    </>
  );
};
