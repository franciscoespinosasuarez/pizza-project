import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { IngredientesPizza } from "../component/infopizza/ingredientes.js";
import Navbar from "../component/navbar.js";
import { PizzaComment } from "../component/infopizza/pizzacomment"; 
import COMENTARIO from "../component/infopizza/examples/commentarios";
import { TituloPizza } from "../component/infopizza/titulo";
import { RecetaPizza } from "../component/infopizza/receta.js";
import { Footer } from "../component/footer";
import config from "../config.js";
import { CreateComment } from "../component/infopizza/createComment.js";


export const ShowPizza = () =>{
  const {store, actions} = useContext(Context);

  const params = useParams();

  //useffect para cargar los datos del usuario

  const [data, setData] = useState([]);
  const [pizzas, SetPizzas] = useState([]);
  const id = params.id;
  console.log(">>>>>" + id);

  useEffect(() => {
    fetch(`${config.hostname}/api/pizza/${params.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res));


  }, []);



  // useEffect(() => {
  //   actions.getPizza(id);
  // }, [])

  // useEffect(() => {
  //   fetch(`${config.hostname}/api/pizza/${store.pizza_id}`)
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .catch((error) => console.log({ error }));
  // })

  // const thepizza = store.pizza_id;

  // console.log(thepizza)

    return(
        <>
        {console.log("receta " + data.recipe)}
        <Navbar />
        {/* ----------titulo---------- */}

        <TituloPizza 
        titulo={data.name}
        img={data.pizza_image}/>

        {/* ----------ingredientes---------- */}

        <IngredientesPizza />

        {/* ----------receta---------- */}

        <RecetaPizza
        recipe={data.recipe} />

        {/* ----------comentarios---------- */}

        <div className="container py-4">
            <h2>Comentarios:</h2>

            <CreateComment />

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
          <Footer />
        </>
    )
}