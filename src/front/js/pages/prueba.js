import React, { useContext, useEffect, useState } from "react";
import Navbar from "../component/navbar.js";
import { CreatePizzaProvisional } from "../component/createpizza/createpizza.js"; 
import config from "../config.js";


export const Prueba = () =>{

    const [info, setInfo] = useState([])

    const getPizza = () =>{
        fetch(`${config.hostname}/api/pizza`)
        .then((res) => {
            if (res.status == 200) {
                return res.json();
            }
        })
        .then((data) => {
            setInfo(data);
        })
        .catch((error) => console.log({error}));
    };

    useEffect


    return(
        <>
        <Navbar />
        <h1></h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        </>
    )
}