import React from "react";
import "./infopizza.css";

export const InfoPizza = (props) => {

    

    return( 
        <div className="d-flex justify-content-center row">
        <div className="text-center mt-4">
          <img src={props.img} className="rounded"/> {/*fuente de la imagen*/}
        </div>
        <h1 className="text-center mt-3">{props.name}</h1>

      </div>
    )
}