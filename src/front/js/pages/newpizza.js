import React, { useContext } from "react";
import Navbar from "../component/navbar.js";
import { CreatePizzaProvisional } from "../component/createpizza/createpizza.js"; 
import { Footer } from "../component/footer";


export const NewPizza = () =>{
    return(
        <>
        <Navbar />
        <CreatePizzaProvisional />
        <Footer />
        </>
    )
}