import React from "react";
import "./infopizza.css";
import RECIPE from "./examples/recipe"

export const RecetaPizza = (props) => {



    return( 
        <div className="container py-3 recipe-pizza">
        <h2>Receta:</h2>
        <p>{props.recipe}</p>
      </div>
    )
}