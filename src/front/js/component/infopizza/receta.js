import React from "react";
import "./infopizza.css";
import RECIPE from "./examples/recipe"

export const RecetaPizza = () => {



    return( 
        <div className="container py-3 recipe-pizza">
        <h2>Receta:</h2>
        {RECIPE.map((val, key) => {
            return(
              <div>
                <div className="" key={key}>
                  <p>{val} </p>
                </div>
              </div>
            )
          })}
      </div>
    )
}