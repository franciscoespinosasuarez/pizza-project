import React from "react";


function Register () {
    return (
        <>
        <form>
        <label>Nombre</label>
        <input type="text" />

        <label>Nombre de usuario</label>
        <input type="text" />

        <label>Email</label>
        <input type ="email" placeholder="email" />
        
        <label>Contraseña</label>
        <input type ="password" placeholder="password" />

        <label>Repetir contraseña</label>
        <input type ="password" placeholder="password" />

        <button>Registrate</button>


        </form>
        
        </>
    )
}
export default Register;