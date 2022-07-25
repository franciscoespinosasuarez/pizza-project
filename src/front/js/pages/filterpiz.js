import React, { useContext } from "react";
import { FilterIngredient } from "../component/filteringredient/filteringredient";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar";
import config from "../config.js";

export const Filterpiz = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

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
  };
  try {
    fetch(`${config.hostname}/api/user`, opts)
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log(resp);
      });
  } catch {
    console.log("errorsito papi");
  }

  return (
    <>
      <Navbar />
      <FilterIngredient />
    </>
  );
};
