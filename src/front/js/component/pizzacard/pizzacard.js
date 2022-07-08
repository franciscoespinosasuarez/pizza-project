import React, { Component } from "react";
import "./pizzacard.css";

export const PizzaCard = () => (
  <div className="container">
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={"https://kauricoastpizzeria.co.nz/site/images/ni-build-your-pizza.jpg"} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">PIZZA TITULO</h5>
            <p className="card-text">NOTA</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
</div>
);


