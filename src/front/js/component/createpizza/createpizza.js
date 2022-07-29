import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import "./createpizza.css";
import { FilterIngredient } from "../filteringredient/filteringredient";
import config from "../../config.js";

export const CreatePizzaProvisional = () => {
  const [name, setName] = useState("");
  const [recipe, setRecipe] = useState("");
  const [img, setImg] = useState();
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([
    "https://sopranospizzaca.com/wp-content/uploads/2018/11/placeholder.png",
  ]);

  const { store, actions } = useContext(Context);

  // imagenes reactivas

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const sendData = (name, recipe, email, password, pizza_image) => {
    fetch(`${config.hostname}api/pizza`, {
      method: "POST",
      body: JSON.stringify({ name, recipe, email, password, pizza_image }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res)
      .then((data) => data)
      .catch((error) => error);
  };

  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
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

      {/* FORM  */}
      <form
        className="form-create-pizza"
        action="https://3001-franciscoes-pizzaprojec-jytudtgtzrc.ws-eu54.gitpod.io/"
        method="post"
        enctype="multipart/form-data"
      >
        <div className="py-3"></div>
        <div className="container container-create-pizza">
          <h2 className="create-pizza-tittle">Creando una nueva pizza</h2>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="input-pizza-name mt-4"
            placeholder="Nombre de la pizza"
          />

          {/* <-- Imagen --> */}
          <div className="avatar-upload">
            <div className="avatar-edit">
              <input
                type="file"
                id="imageUpload"
                accept=".png, .jpg, .jpeg"
                className=""
                // onChange={(e) => setImg(e.target.files)}
                onChange={onImageChange}
              />
              <label className="imageUpload" for="imageUpload">
                +
              </label>
            </div>
            <div className="avatar-preview">
              {imageURLs.map((imageSrc) => (
                <img src={imageSrc} id="imagePreview" />
              ))}
            </div>
          </div>

          {/* <!-- Button trigger modal y mostrar ingredientes --> */}
          <div>
            <button
              type="button"
              className="create-pizza-btn mb-3"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Elige los ingredientes
            </button>
          </div>

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
                    {val.first_name}
                  </button>
                </div>
              );
            })}
          </div>

          {/* <!-- Text area --> */}

          <div>
            <textarea
              className="m-2 p-1 pizza-textarea"
              rows="4"
              cols="40"
              placeholder="Inserte aquí la receta"
              onChange={(e) => setRecipe(e.target.value)}
              value={recipe}
            ></textarea>
          </div>

          <input type="submit" value="Submit" className="create-pizza-btn" />
        </div>
      </form>
    </>
  );
};
