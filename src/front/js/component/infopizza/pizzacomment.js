import React, { Component, useState } from "react";

export const PizzaComment = (props) =>{

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
            <div className="container comment-container">
                <div className="card mb-3 card-comment" >
                    <div className="row g-0">
                        <div className="col-md-1">
                            <img src="https://sopranospizzaca.com/wp-content/uploads/2018/11/placeholder.png" className="img-fluid rounded-start img-card img-comment t" />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <div className="row">
                                <h5 className="card-title col">{props.user}</h5>
                                <p className="pizza-rate col">{props.rate}</p>
                            </div>
                            
                            <p className="card-text">{props.comment}</p>
                            <div className="text-date" >
                                <p className="card-text"><small className="text-muted ">{props.date}</small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}