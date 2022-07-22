import React, { useContext } from "react";
import { FilterIngredient } from "../component/filteringredient/filteringredient";
import { useNavigate } from 'react-router-dom';

export const Filterpiz = () =>{
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token")

	// if (token && token!= "" && token != undefined && token != null){
    //     console.log('token válido')
        
    // }
    // else{
    //     navigate("/")
    // }
    const opts = {
        method: "GET",
        // headers: {
        //     "Authorization": "Bearer " + token
        // }

    }
    try{
        fetch("https://3001-franciscoes-pizzaprojec-p6abymg56kx.ws-eu54.gitpod.io/api/user",opts)
        .then((resp) =>{
            return resp.json();
        }).then((resp)=>{
            console.log(resp)
        })
            
        
    } catch{
        console.log('errorsito papi')
    }



    return(
        <FilterIngredient />
    )
}