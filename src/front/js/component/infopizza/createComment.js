import React, { Component, useState } from "react";
import { Rating } from 'react-simple-star-rating'

export const CreateComment = () =>{


  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }

    return(
        <>
            <div className="container ">
                <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
                <input></input>
            </div>
        </>
    )
}