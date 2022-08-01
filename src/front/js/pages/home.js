import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { PizzaCard } from "../component/pizzacard/pizzacard";
import { FilterIngredient } from "../component/filteringredient/filteringredient";
import Navbar from "../component/navbar";
import config from "../config";
import "../component/createpizza/createpizza.css"



export const Home = () =>{
    const {store, actions } = useContext(Context);

    useEffect(() =>{
        actions.getPizzas();
        // actions.filter_function();
    }, [])




    //funciones:
    const filtroPizza = () =>{

    }

    return(
        <>
        
         {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title" id="staticBackdropLabel">Ingredientes</h5> */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <FilterIngredient />
            </div>
          </div>
        </div>
      </div>

        <Navbar />
        
        {/* {Mostrar modal} */}
    <div className="container">
      <div className="d-flex justify-content-center">
            <button
              type="button"
              className="create-pizza-btn mb-3"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Elige los ingredientes
            </button>
          </div>

          {/* muestra los ingredientes seleccionados */}
         
          <div className="container row selected py-2">
            {store.itemArray.map((val, key) => {
              console.log(val);
              return (
                <div className="container col-3 py-2 d-flex justify-content-center">
                  <button
                    className="ingredient-btn"
                    type="button"
                    onClick={() => actions.eliminate_ingredient(val)}
                  >
                    {val.name}
                  </button>
                </div>
              );
            })}
          </div>
        {/* mostrar información */}
        <div className="row d-flux">
                  {store.pizzas.length > 0 ? (
                    store.pizzas.map((element, i) => {
                      return (
                        <PizzaCard
                          name={element.name}
                          key={i}
                          img={element.pizza_image}
                          user={element.user_id}
                          ingredient={element.recipe}
                          val={element.id}
                        />
                      );
                    })
                  ) : (
                    <div
                      className=""
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                </div>

        </div>
        </>

    )
}