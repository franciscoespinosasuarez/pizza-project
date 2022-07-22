import React from "react";
import "./infopizza.css";

export const TituloPizza = () => {

    let imgSrc = "https://sopranospizzaca.com/wp-content/uploads/2018/11/placeholder.png"
    let titulo = "tittle-fuente"

    return( 
        <div className="d-flex justify-content-center row">
        <div class="text-center mt-4">
          <img src={imgSrc} className="rounded"/> {/*fuente de la imagen*/}
        </div>
        <h1 className="text-center mt-3">{titulo}</h1>

      </div>
    )
}