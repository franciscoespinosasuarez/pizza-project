import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import config from "../../config"
import "./loginform.css";
import { useNavigate } from "react-router-dom";


function Login() {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setMensaje("");

    if (email === "" || password === "") {
      setMensaje(
        <p className="mensaje mensaje-error">
          Todos los campos son obligatorios
        </p>
      );
      return console.log("todos los campos son obligatorios");
    }

    if (email !== "") {
      const er =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (er.test(email)) {
        //verificación de que el email está en la database
        fetch(
          `${config}/api/user`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((resp) => {
          return resp.json();
        })
        .then((resp) => {
          const listaEmail = resp.map((user) => {
            return user.email;
          });
          if (listaEmail.includes(email)) {
            //llamada a función login (en flux) y creación de token
            actions.login(email, password).then(()=>{
              const token = sessionStorage.getItem("token");
              //BUSCAR LA FORMA DE QUE HAGA EL REDIRECT CUANDO SE PRESIONA EL BOTÓN LOGIN

              console.log(token)
              if(token &&token!=="" && token!== undefined && token!== null){
                console.log("funciona");
                navigate("/home");
              } else {
                console.log('no funciona')
                setMensaje(<p className="mensaje mensaje-error">Contraseña incorrecta</p>);
              }
            })
            
          } else{
            setMensaje(<p className="mensaje mensaje-error">No existe una cuenta con ese email</p>)
            
          }
        })
       }else {
        setMensaje(
          <p className="mensaje mensaje-error">Introduce un email válido</p>
        );
      }
    }



  };

  return (
    <>
      <div className="login">
        <form className="login-form">
          <label className="login-label">Email</label>
          <input
            className="login-input"
            type="email"
            placeholder="Escribe tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="login-label">Contraseña</label>
          <input
            className="login-input"
            type="password"
            placeholder="Escribe tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleClick}>
            Login
          </button>
          {mensaje}
        </form>
      </div>
    </>
  );
}
export default Login;
