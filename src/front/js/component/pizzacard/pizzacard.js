import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./pizzacard.css";
import { Context } from "../../store/appContext";
import config from "../../config"

export const PizzaCard = (props) => {

  const idpizza = props.pizza_id;
  const datapizza = props.datapizza;

  const { store, actions } = useContext(Context);
  const [user_id, setUser_id] = useState();

  let nombre = "";
  function userName(id) {
    store.user.map((element)=> {
      if (element.id == id) {
        nombre = element.user_name
      }
    })
  }



  return(
    <div className="container col-5 m-3" onClick={()=> console.log(props.idpizza)}>
    <div className="card mb-3 container-card" >
      <div className="row g-0 ">
        <div className="col-md-4 d-flex align-items-center ">
        <Link to = {`/pizza/${idpizza}`}>
          <img src={props.img} className="img-fluid rounded-start img-card img-carta" alt="..."/>
        </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link to = {`/pizza/${idpizza}`}>
              <h5 className="card-title card-nombre ">{props.name}</h5>
            </Link>

            <Link to = {`/user/${props.userid}`} className="card-usuario">
              <p className="card-text card-usuario">{props.user}</p>
            </Link>
            
            <div className="footer">
              <p className="card-text"><small className="text-muted">{props.ingredient}</small></p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
</div>
  )

  };



