import React, {useReducer, useState} from "react";


function Register () {
    const [nombre, setNombre] = useState("")
    const [usuario, setUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [img, setImg] = useState()

    const sendData = (nombre,usuario,email,password,perfil_image) => {
        fetch('https://3001-franciscoes-pizzaprojec-ikiaax2lpsm.ws-eu54.gitpod.io/api/user', {
            method: 'POST',
            body: JSON.stringify({nombre,usuario,email,password,perfil_image}),
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
        <form>
            <label>Nombre</label>
            <input 
            type="text"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
            />

            <label>Nombre de usuario</label>
            <input 
            type="text"
            onChange={(e) => setUsuario(e.target.value)}
            value={usuario}
            />

            <label>Email</label>
            <input 
            type ="email" 
            placeholder="email" 
            onChange={(e) => setEmail(e.target.value)}
            />

            <label>Contraseña</label>
            <input 
            type ="password" 
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />

            <label>Repetir contraseña</label>
            <input type="password" placeholder="password" />

            <label>Imagen</label>
            <input 
            type="file"
            onChange={(e) => setImg(e.target.files)}
            />

            <button
            onClick={() => {
                sendData(nombre,usuario,email,password,img)
            }}
            >Registrate</button>
        </form>
        
        </>
    )
}
export default Register;