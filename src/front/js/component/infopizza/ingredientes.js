import React, { Component, useState } from "react";
import "./infopizza.css";
import INGREDIENTS from "./examples/ingredientsEx"
import RECIPE from "./examples/recipe"



export const IngredientesPizza = () => {

    {/*variables según la pizza, sacar info con fetch*/}


    return (
        <div className="container">

          {/*----------------- ingredientes --------------*/}
          <div className="container  list py-4 ingredient-container">
            <h2>Ingredientes:</h2>
            <div className="row">
                {INGREDIENTS.map((val, key) => {
                  return(
                      <div className="col-3 py-3 mx-auto" key={key}>
                        <button className="ingredient-btn my-1" onClick={()=> selected(val) }>{val.name} </button>
                      </div>
                  )
                })}
            </div>
            
          </div>
            
        </div>
      );
    };
    