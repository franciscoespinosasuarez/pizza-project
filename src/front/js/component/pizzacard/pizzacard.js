import React, { useState, useEffect, useContext } from "react";
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
    <div className="container col-5 m-3" onClick={()=> console.log(props.val)}>
    <div className="card mb-3 container-card" >
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center ">
          <img src={props.img} className="img-fluid rounded-start img-card" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.user}</p>
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


