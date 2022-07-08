import React from "react";
import "./loginform.css";
function Login() {
  return (
    <>
      <div className="login">
        
        <form>
          <label>Email</label>
          <input type="email" placeholder="Escribe tu email" />
          <label>Contraseña</label>
          <input type="password" placeholder="Escribe tu contraseña" />
          <button>Login</button>
        </form>
      </div>
    </>
  );
}
export default Login;
