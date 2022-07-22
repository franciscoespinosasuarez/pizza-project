import React, {useState, useContext } from "react";
import {Context} from "../../store/appContext";
import "./loginform.css";
import { useNavigate } from 'react-router-dom';





function Login() {
  const {store, actions} = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();


  const handleClick = (e) => {
    e.preventDefault();
    actions.login(email, password).then( () =>{

      if (token && token != null){
        navigate("/filter")
      }
      
    });
    console.log(token)
 

    }




  return (
    <>
      <div className="login">
 
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
        
      </div>
    </>
  );
}
export default Login;
