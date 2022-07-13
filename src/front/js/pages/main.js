import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PizzaCard } from "../component/pizzacard/pizzacard";
import rigoImageUrl from "../../img/rigo-baby.jpg";

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
            <div className="row cabecera-izq">
              <div className="col">
                <h1 className="h1cabecera">
                  Las mejores pizzas para hacer en casa
                </h1>
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

      <section>
        <h2 className="h2home">Encuentra tu pizza en un par de clics</h2>
        <div className="show-info">
          <div className="row">
            <div className="col col-show-info">
              <div className="">
                <img
                  src="https://pbs.twimg.com/profile_images/732346720479248389/x106Whv9_400x400.jpg"
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
                <img
                  src="https://pbs.twimg.com/profile_images/732346720479248389/x106Whv9_400x400.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="texto-info">
                  <p className="">Elige la pizza que más te guste</p>
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
                <div className="texto-info">
                  <p className="">Valora la receta y comparte tu opinión</p>
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
        <h2 className="h2home">Regístrate y encuentra de tu pizza ideal</h2>
        <Register />
      </section>
    </>
  );
};
