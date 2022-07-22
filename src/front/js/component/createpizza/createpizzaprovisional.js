import React, {useReducer, useState, useEffect} from "react";
import "./createpizza.css"


export const  CreatePizzaProvisional = () => {
    const [name, setName] = useState("")
    const [recipe, setRecipe] = useState("")
    const [img, setImg] = useState();
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs]= useState(["https://sopranospizzaca.com/wp-content/uploads/2018/11/placeholder.png"])
    
    // imagenes reactivas
    
    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    }


    const sendData = (name,recipe,email,password,pizza_image) => {
        fetch('https://3001-franciscoes-pizzaprojec-ikiaax2lpsm.ws-eu54.gitpod.io/api/pizza', {
            method: 'POST',
            body: JSON.stringify({name,recipe,email,password,pizza_image}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res)
        .then(data => data)
        .catch(error => error)
    }

    

    return (
        <>
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
        
        <div className="avatar-upload">
        <div className="avatar-edit">
            <input 
            type='file' 
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
                { imageURLs.map(imageSrc => <img src={imageSrc} id="imagePreview"/>) }
        </div>
        </div>
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
        
            <button
            className="create-pizza-btn"
            onClick={() => {
                sendData(name,recipe,img)
            }}
            >Crear pizza</button>
        </div>
        
        </>
    )
}