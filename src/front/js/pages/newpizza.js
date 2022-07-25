import React, { useContext } from "react";
import Navbar from "../component/navbar.js";
import { CreatePizzaProvisional } from "../component/createpizza/createpizza.js"; 


export const NewPizza = () =>{
    return(
        <>
        <Navbar />
        <CreatePizzaProvisional />
        </>
    )
}