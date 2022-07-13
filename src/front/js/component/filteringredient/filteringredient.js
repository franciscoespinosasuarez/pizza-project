import React, { Component, useState } from "react";
import "./filteringredient.css";
import EXAMPLE from "./example.js";

export const FilterIngredient = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemArray, setItemArray] = useState([]);

  const selected = (ingredient) => {
    const aux = [...itemArray, ingredient]
    setItemArray(aux)
    console.log(ingredient)
  };


  const eliminateIngredient = (ingredient) => {
    let index = -1;
    for (let i = 0; i < itemArray.length; i++) {
      const aux = itemArray[i];
      if (aux.id === ingredient.id) {
        index = i;
        break;
      }
    }

    if (index > -1) {
      const aux = itemArray.filter((obj, i) => {
        if (i !== index) {
          return obj;
        }
      });
      setItemArray(aux);
    }
  };

  const exist = (ingredient) => {
    for (let i = 0; i < itemArray.length; i++){
        const aux = itemArray[i]
        if ( aux.id === ingredient.id){
            return true
        }
    }
    return false
  };

  return (
    <div className="container">
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
        {itemArray.map((val,key)=> {
          console.log(val)
            return(
                <div className="container col-3 py-2 d-flex justify-content-center">
                    <button className="ingredient-btn" onClick={() => eliminateIngredient(val)}>{val.first_name}</button>
                </div>
            )
        }
        )}
      </div>

      {/*----------------------- lista de ingredientes ---------------------*/}
      {/* Poner para que se ordene alfabéticamente, hacer que en otro componente te salga una lista orednada del database*/}
      <div className="container row list py-3">
        {EXAMPLE.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
            if ( exist(val) ){
                return 
            }
          return (
            <div className="col-3" key={key}>
              <button className="ingredient-btn my-1" onClick={()=> selected(val) }>{val.first_name} </button>
            </div>
          );
        })}
      </div>
      {/* Submit */}
      <div className="d-flex justify-content-center">
      <button class="button-82-pushable" role="button">
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text">
          Filtrar
        </span>
    </button>
      </div>
        
    </div>
  );
};
