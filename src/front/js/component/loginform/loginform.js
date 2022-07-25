import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

import "./loginform.css";

function Login() {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    actions.login(email, password);
  };

  useEffect(() => {
    const token = localStorage.token;
    if (token) {
      setLoading(true);
      fetch("/api/validatoken", { //TODO: check it.
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }) //TODO: check it
        .then((res) => {
          if (res.status == 200) {
            return res.json();
          } else {
            setLoading(false);
          }
        })
        .then((_) => {
          navigate("/cualquierpagina"); //TODO: check it
        });
    }
  }, []);

  if (loading) {
    return (
      <>
        <div>Cargando...</div>
      </>
    );
  }

  return (
    <>
      <div className="login">
        {store.token && store.token != "" && store.token != undefined ? (
          "You are logged in with this token " + store.token
        ) : (
          <form>
            <label>Email</label>
            <input
              type="email"
              placeholder="Escribe tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Escribe tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick}>Login</button>
          </form>
        )}
      </div>
    </>
  );
}
export default Login;
