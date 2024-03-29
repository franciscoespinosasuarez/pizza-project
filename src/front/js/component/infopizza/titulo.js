import React from "react";
import "./infopizza.css";

export const TituloPizza = (props) => {

    let imgSrc = "https://sopranospizzaca.com/wp-content/uploads/2018/11/placeholder.png"
    let titulo = "tittle-fuente"

    return( 
        <div className="d-flex justify-content-center row">
        <div className="text-center mt-4">
          <img src={props.img} className="img-fluid rounded-start img-card img-card-tittle"/> {/*fuente de la imagen*/}
        </div>
        <h1 className="text-center mt-3 titulopizza">{props.titulo}</h1>

      </div>
    )
}