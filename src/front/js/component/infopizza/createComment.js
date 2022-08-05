import React, { Component, useState } from "react";

export const CreateComment = (props) =>{

    let show_rate = (num) =>{
        let star = Math.floor(num)
        let a =  `<i class="fa fa-star" aria-hidden="true"></i>`
        let star_array = []
          for(i = 0; i < star; i++){
          array.push(a)
        }
        return star_array
    }

    return(
        <>
            <div className="container ">
                <input></input>
            </div>
        </>
    )
}