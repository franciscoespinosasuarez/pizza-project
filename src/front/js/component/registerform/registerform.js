import React from "react";
import { useState, useContext } from "react";
import "./registerform.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

function Register() {
  const [data, setData] = useState({});
  const [mensaje, setMensaje] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    //VALIDACIÓN DE FORMULARIO
    e.preventDefault();
    setMensaje("");
    let repeat = document.querySelector("#repeat").value;

    if (
      data["name"] === undefined ||
      data["name"] === "" ||
      data["user_name"] === undefined ||
      data["user_name"] === "" ||
      data["email"] === undefined ||
      data["email"] === "" ||
      data["password"] === undefined ||
      data["password"] === "" ||
      repeat === ""
    ) {
      console.log("todos los campos son obligatorios");
      setMensaje(
        <p className="mensaje mensaje-error">
          Todos los campos son obligatorios
        </p>
      );
    } else if (data["password"] !== repeat) {
      console.log(repeat)
      return setMensaje(
        <p className="mensaje mensaje-error">La contraseña no coincide</p>
      );
    }

    if (data["email"]) {
      //expresión regular para comprobar que es un email
      const er =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (er.test(data["email"])) {
        //para comprobar si el email existe en la base de datos
        fetch(
          "https://3001-franciscoes-pizzaprojec-p6abymg56kx.ws-eu54.gitpod.io/api/user",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((resp) => {
            return resp.json();
          })
          .then((resp) => {
            const listaEmail = resp.map((user) => {
              return user.email;
            });
            if (listaEmail.includes(data["email"])) {
              setMensaje(
                <p className="mensaje mensaje-error">
                  Ya hay una cuenta con este email.
                </p>
              );
            } else {
              //Si es un email válido, conecta con la base de datos
              console.log(data);
              fetch(
                "https://3001-franciscoes-pizzaprojec-p6abymg56kx.ws-eu54.gitpod.io/api/user",
                {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              ).then((resp) => {
                console.log(resp);
              });

              setMensaje(
                <p className="mensaje mensaje-exito">
                  Cuenta creada correctamente.
                </p>
              );

              actions.login(data["email"], data["password"]).then(() => {
                navigate("/filter");
              });
            }
          });
      } else {
        setMensaje(
          <p className="mensaje mensaje-error">Introduce un email válido</p>
        );
      }
    }
  };

  return (
    <>
      <form className="login-form">
        <label className="login-label">Nombre</label>
        <input
          className="login-input"
          type="text"
          placeholder="Escribe tu nombre"
          name="name"
          onChange={handleChange}
        />

        <label className="login-label">Nombre de usuario</label>
        <input
          className="login-input"
          type="text"
          name="user_name"
          placeholder="Escribe tu nombre de usuario"
          onChange={handleChange}
        />

        <label className="login-label">Email</label>
        <input
          className="login-input"
          type="email"
          placeholder="Escribe tu email"
          name="email"
          onChange={handleChange}
        />

        <label className="login-label">Contraseña</label>
        <input
          className="login-input"
          type="password"
          placeholder="Escribe tu contraseña"
          name="password"
          onChange={handleChange}
        />

        <label className="login-label">Repetir contraseña</label>
        <input
          className="login-input"
          type="password"
          placeholder="Repite tu contraseña"
          id="repeat"
        />

        {mensaje}

        <button
          className="login-button"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Registrate
        </button>
      </form>
    </>
  );
}
export default Register;
