
import React, {useState, useContext } from "react";
import {Context} from "../../store/appContext";

import "./loginform.css";


function Login() {
  const {store, actions} = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleClick = () => {
    actions.login(email, password);
  };



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
