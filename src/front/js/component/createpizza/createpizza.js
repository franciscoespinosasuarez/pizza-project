import React, {useState, useContext} from "react";
// import { Context } from "../store/appContext";
import "./createpizza.css";

export const CreatePizza = () => {

    // const { store, actions } = useContext(Context);

    //form inputs
    const [name, setName] = useState("");
    const [imagen, setImagen] = useState("");
    const [recipe, setRecipe] = useState("ale");

    //flags
    const [allfill, setAllfill] = useState(false); //flag de "rellenar todos los campos"
    const [allDone, setAllDone] = useState(false); //flag Registro completado

    return( 
        <div className="d-flex justify-content-center row">
        
        <div
      className="modal fade"
      id="createPizza"
      tabIndex="-1"
      aria-labelledby="createPizzaLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-dark rounded">
            <h5 className="modal-title text-white" id="createPizzaLabel">
              Creando pizza
            </h5>
            <button
              type="button"
              className="btn-close white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body color-back">
            <form className="">
              <input
                className="m-2 p-1"
                type="text"
                placeholder="Nombre de la pizza"
                onChange={(e) => setName(e.target.value)}
                autoFocus={true}
                value={name}
                required
              ></input>
              {/* <select
                className="m-2 p-1"
                id="selectCategory"
                name="category"
                placeholder="Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                {store.categories.length >0 ? store.categories.map((elem, i) => {
                  return (
                    <option key={i} value={elem.id}>{elem.name}</option>
                  )
                })
                : 
                  <option>
                    Loading...
                  </option>
                }
              </select>  aquí hacer un select ingredients*/ }
              
              <textarea
                className="m-2 p-1 inputStyle"
                rows="4"
                cols="40"
                placeholder="receta"
                onChange={(e) => setRecipe(e.target.value)}
                value={recipe}
              ></textarea>
              
              <input
              className="m-2 p-1"
              type="text"
              placeholder="url de tu imagen"
              onChange={(e) => setImagen(e.target.value)}
              value={imagen}
              >
              </input>
            </form>
            
          </div>
        
          <div className="modal-footer color-back">
            <div className="modal-footer">
            
              {/* VALIDACIONES DE INPUTS */}

              {allfill == true ? (
                <p className="me-auto text-danger">Rellena todos los campos</p>
              ) : (
                ""
              )}

              {allDone == true ? (
                <p className="d-flex flex-column me-auto text-success">
                  Terminando tu pizza
                </p>
              ) : (
                ""
              )}

              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  // ESTO ES EL SUBMIT que debe enviar los datos de registro
                  if (
                    pizza_imagen == "" ||
                    name == "" ||
                    recipe == ""
                  ) {
                    setAllfill(true);
                  }
                  console.log(imagen)
                  // token = localStorage.getItem('token') //intento conseguir datos del token
                  

                  actions.createpizza(
                    name,
                    pizza_imagen,
                    recipe,
                  ); //Envio al fetch de flux

                  // Reset de variables para que los inputs aparezcan vacios de nuevo

                //   store.myAuthFlag = true;
                }}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

        </div>
    )
}