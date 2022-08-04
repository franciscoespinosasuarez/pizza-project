import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../component/navbar";
import config from "../config";
import { Link } from "react-router-dom";
import banner from "../../img/banner.jpg";
import { Footer } from "../component/footer";

export const Mypizzas = () => {
  const navigate = useNavigate();
  const [loading, SetLoading] = useState(true);
  const id = localStorage.user_id;
  const [data, setData] = useState([]);
  const [pizzas, SetPizzas] = useState([]);
  const token = localStorage.token;
  const params = useParams();
  console.log(id);

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

  useEffect(() => {
    fetch(`${config.hostname}/api/user/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res));

    //obtener pizzas de usuario
    fetch(`${config.hostname}/api/pizza/user/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        SetPizzas(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
      <div className="div-img-banner">
        <h2 className=" h1-my-pizzas">Mis pizzas</h2>
      </div>


        <div className="grill-pizza-user">
          <div className="pizzacard-user">
            <div className="pizzacard-user-img-div">
              <Link to="/newpizza">
                <img
                  className="pizzacard-user-img"
                  src="https://sopranospizzaca.com/wp-content/uploads/2018/11/placeholder.png"
                ></img>
              </Link>
            </div>
            <Link to="/newpizza">
              <button className="addpizza-button">Añadir pizza</button>
            </Link>
          </div>
          {pizzas.map((pizza, i) => {
            return (
              <div className="pizzacard-user" key={i}>
                <div className="pizzacard-user-img-div">
                  <img
                    className="pizzacard-user-img"
                    src={pizza.pizza_image}
                  ></img>
                </div>

                <p className="pizzacard-texto">{pizza.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* fin container */}
      <Footer />
    </>
  );
};
