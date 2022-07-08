import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Login from "../component/loginform/loginform";
import Register from "../component/registerform/registerform";
import { Navbar } from "../component/navbar";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="imagen-cabecera">
        <Navbar />
        <div className="container">
          <div className="cabecera">
            <div className="row">
              <div className="col cabecera-izq">
                <h1 className="text-center">TITULO DE PROYECTO PIZZA</h1>
                <button className="boton-registrate">Registrate</button>
              </div>
            </div>

            <div className="col">
              <Login />
            </div>
          </div>
        </div>
      </div>
      {/* fin cabecera */}

      <div className="show-info">
        <div className="row">
          <div className="col">
            <div className="">
              <img
                src="https://pbs.twimg.com/profile_images/732346720479248389/x106Whv9_400x400.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Texto explicando el proceso</p>
              </div>
            </div>
            {/* fin card */}
          </div>
          {/* fin columna */}

          <div className="col">
            <div className="">
              <img
                src="https://pbs.twimg.com/profile_images/732346720479248389/x106Whv9_400x400.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Texto explicando el proceso</p>
              </div>
            </div>
            {/* fin card */}
          </div>
          {/* fin columna */}

          <div className="col">
            <div className="">
              <img
                src="https://pbs.twimg.com/profile_images/732346720479248389/x106Whv9_400x400.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Texto explicando el proceso</p>
              </div>
            </div>
            {/* fin card */}
          </div>
          {/* fin columna */}
        </div>
      </div>
      {/* fin show info */}

      <div>
        <Register />
      </div>
    </>
  );
};
