import React, { useContext, useEffect } from "react";
import Navbar from "../component/navbar.js";
import { CreatePizzaProvisional } from "../component/createpizza/createpizza.js"; 
import { Footer } from "../component/footer";
import { Context } from "../store/appContext.js";


export const NewPizza = () =>{

    const {store, actions} = useContext(Context); 

    // obtener userid:
    useEffect(()=>{
        actions.getUserId()}, [])



    return(
        <>
        <Navbar />
        <CreatePizzaProvisional />
        <Footer />
        </>
    )
}