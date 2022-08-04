import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext"
import "./filteringredient.css";
import EXAMPLE from "./example.js";

export const FilterIngredient = () => {
  const { store, actions } = useContext(Context)
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    actions.getIngredient();
  }, [])


  return (
    <div className="container filter-container">
      {/*------------- input donde metes el filtro de ingredientes -----------*/}
      <div className="d-flex justify-content-center">
        <input
          type="text"
          placeholder="ingrediente"
          className="filter-ingredient d-flex justify-content-center"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      {/*----------------- lista de ingredientes seleccionados --------------*/}
      <div className="container row selected py-2">
        {store.itemArray.map((val,key)=> {
          console.log(val)
            return(
                <div className="container col-3 py-2 d-flex justify-content-center">
                    <button className="ingredient-btn" onClick={() => actions.eliminate_ingredient(val)}>{val.name}</button>
                </div>
            )
        }
        )}
      </div>

      {/*----------------------- lista de ingredientes ---------------------*/}
      <div className="container row list py-3">
        {store.ingredient.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
            if ( actions.exist(val) ){
                return 
            }
          return (
            <div className="col-3" key={key}>
              <button className="ingredient-btn my-1" onClick={() => actions.filter_function(val) }>{val.name} </button>
            </div>
          );
        })}
      </div>
      {/* Submit */}
      <div className="d-flex justify-content-center">
        <div>
          <button className="button-82-pushable">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">
              Filtrar
            </span>
        </button>
    </div>
      
      </div>
        
    </div>
  );
};
