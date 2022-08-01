import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { IngredientesPizza } from "../component/infopizza/ingredientes.js";
import Navbar from "../component/navbar.js";
import { PizzaComment } from "../component/infopizza/pizzacomment"; 
import COMENTARIO from "../component/infopizza/examples/commentarios";
import { TituloPizza } from "../component/infopizza/titulo";
import { RecetaPizza } from "../component/infopizza/receta.js";
import { ProgressPlugin } from "webpack";


export const ShowPizza = () =>{
  const {store, actions} = useContext(Context);

  const thepizza = store.pizza_id;

  useEffect(() => {
    actions.getPizza(id);
  }, [])

  useEffect(() => {
    fetch(`${config.hostname}/api/pizza/${store.pizza_id}`)
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.log({ error }));
  })

    return(
        <>
        <Navbar />
        {/* ----------titulo---------- */}

        <TituloPizza 
        img={thepizza.pizza_image}
        name={thepizza.name}
        />

        {/* ----------ingredientes---------- */}

        <IngredientesPizza 
        recipe={thepizza.recipe}/>

        {/* ----------ingredientes---------- */}

        <RecetaPizza 
        recipe={thepizza.recipe}
        />

        {/* ----------comentarios---------- */}

        <div className="container py-4">
            <h2>Comentarios:</h2>
            <ul>
                {COMENTARIO.filter((val) => {
          if (COMENTARIO.id_pizza != 1) {
            return val;
          } 
        }).map((val, key) => {
                  return(
                    <div>
                      <div className="" key={key}>
                        <div className="py-2">
                          <PizzaComment 
                            user={val.id_user_comment} 
                            comment={val.comment}
                            date={val.date}
                            rate={val.rate}
                            />
                        </div>
                      </div>
                    </div>
                  )
                })}
            </ul>
          </div>
        </>
    )
}