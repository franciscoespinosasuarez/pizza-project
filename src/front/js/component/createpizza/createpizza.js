import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./createpizza.css";
import { FilterIngredient } from "../filteringredient/filteringredientCreate";
import config from "../../config.js";

export const CreatePizzaProvisional = () => {
  const [name, setName] = useState("");
  const [recipe, setRecipe] = useState("");
  const [img, setImg] = useState();
  const [images, setImages] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [imageURLs, setImageURLs] = useState([
    "https://sopranospizzaca.com/wp-content/uploads/2018/11/placeholder.png",
  ]);

  const { store, actions } = useContext(Context);

  //token
  

  //formdata

  // const [data, setData] = useState()

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const token = localStorage.getItem("token")

  //   const formData = new FormData();
  //   formData.append("file", img);
  //   formData.append("name", name);
  //   formData.append("recipe", recipe);
  //   console.log(formData.get("name"))


  //   let resp = await fetch(`${config.hostname}/api/pizza`, {
  //     method: "POST", 
  //     body: formData,
  //     headers: {
  //       "Content-Type": "Multipart/form-data",
  //       "Authorization": "Bearer " + token
  //     }
  //   })

  // } 

  // imagenes reactivas

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  const onImageChange = (e) => {
    setImages([...e.target.files]);
    setImg(e.target.files[0]);
  };

  //revisa el form y te envía al inicio
  const goHome = () =>{
    navigate("/home")
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setMensaje("");

    if (
      name === undefined ||
      name === "" ||
      images === undefined ||
      images === "" ||
      recipe === undefined ||
      recipe === "" ||
      store.createPizza.length === 0 
    ) {
      console.log("todos los campos son obligatorios");
      setMensaje(
        "Rellene todos los campos y añada al menos 1 ingrediente"
      );
  } else {
    setMensaje("Su pizza ha sido creada \(◦'⌣'◦)/")
    setTimeout(goHome,1500)
  }
}
  // const sendData = (name, recipe, email, password, pizza_image) => {
  //   fetch(`${config.hostname}api/pizza`, {
  //     method: "POST",
  //     body: JSON.stringify({ name, recipe, email, password, pizza_image }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res)
  //     .then((data) => data)
  //     .catch((error) => error);
  // };
  const asd = false

  return (
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

      {/* FORM  */}
      <form
        className="form-create-pizza"
        // onSubmit={handleSubmit}
        target="frame"
        action={`${config.hostname}/api/pizza`}
        method="post"
        encType="multipart/form-data"
      >
        <div className="py-3"></div>
        <div className="container container-create-pizza">
          <h2 className="create-pizza-tittle">Creando una nueva pizza</h2>
          <input
            type="text"
            onChange={(e) => {setName(e.target.value)}}
            value={name}
            name="name"
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
                name="file"
                className=""
                onChange={onImageChange}
              />
              <label className="imageUpload" htmlFor="imageUpload">
                +
              </label>
            </div>
            <div className="avatar-preview">
              {imageURLs.map((imageSrc,i) => (
                <img key={i} src={imageSrc} id="imagePreview" />
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
              return (
                <div className="container col-3 py-2 d-flex justify-content-center">
                  <button
                    className="ingredient-btn"
                    type="button"
                    key={key}
                    onClick={() => actions.eliminate_ingredient(val)}
                  >
                    {val.name}
                  </button>
                </div>
              );
            })}
          </div>

          <input 
              type="hidden"
              name="user_id"
              value={store.user_id} />
          {/* <!-- Text area --> */}

          <div>
            <textarea
              className="m-2 p-1 pizza-textarea"
              rows="4"
              cols="40"
              type="text"
              placeholder="Inserte aquí la receta"
              onChange={(e) => setRecipe(e.target.value)}
              value={recipe}
              name="recipe"
            ></textarea>
          </div>

          {/* input oculto */}

          <input type="hidden" value={store.createPizza} name="ingredients">{}</input>

          <input onClick={() => window.location.href = `https://3000-franciscoes-pizzaprojec-x0tpt809jri.ws-eu59.gitpod.io/home`} type="submit" value="Submit request" target="" className="create-pizza-btn" />
        </div>
      </form>
            <div>
              <p>{mensaje}</p>
            </div>
      <iframe name="frame" id="frame"></iframe>
    </>
  );
};
