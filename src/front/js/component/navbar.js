import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import LogOut from "../../img/log-out.png";
import PizzaFav from "../../img/corazon.png";
import addPizza from "../../img/pizzaRedonda.png";
import { Mypizzas } from "../pages/my-pizzas";
import Logo from "../../img/logo2.png";
import myUser from "../../img/my-user.png";

export const Navbar = () => {
  const exit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  };

  return (
    <nav className="navbar navbar-ofi">
      <div className="container ">
        <Link to="/">
          <img className="logo" src={Logo} title="inicio"/>
        </Link>
        <div className="ml-auto">
          {/* <Link to="/demo">
            <img className="pizza-fav icons" src={PizzaFav} />
          </Link> */}
          <Link to="/my-pizzas">
            <img className="pizza-fav icons" src={addPizza} title="mis pizzas" />
          </Link>
          <Link to="/my-account">
            <img className="my-user" src={myUser} title="mi usuario"/>
          </Link>
          <Link to="/" onClick={exit}>
            <img className="log-out icons" src={LogOut} title="salir"/>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
