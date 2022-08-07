import React, { useContext } from "react";
import { SendMail } from "../component/sendMail";
import Navbar from "../component/navbar";

export const Mail = () =>{

    
    return(
        <>
        <Navbar />
        <SendMail />
        </>

    )
}