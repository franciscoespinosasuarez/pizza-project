import React, { useState, useEffect, useContext } from "react";
import "./pizzacard.css";
import { Context } from "react";
import config from "../../config"

export const PizzaCard = (props) => (
  <div className="container col-5 ">
    <div className="card mb-3 container-card" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={"https://kauricoastpizzeria.co.nz/site/images/ni-build-your-pizza.jpg"} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">PIZZA TITULO</h5>
            <p className="card-text">NOTA</p>
            <div className="footer">
              <p className="card-text"><small className="text-muted">Recipe</small></p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
</div>
);


