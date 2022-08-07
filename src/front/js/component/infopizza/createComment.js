import React, { Component, useState } from "react";
import { Rating } from 'react-simple-star-rating';
import "./infopizza.css"

export const CreateComment = () =>{


  const [rating, setRating] = useState(0) // initial rating value
  const [comment, setComment] = useState("");

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }

    return(
        <>
            <div className="container ">
              <div className="container-firstcomment">
                <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
                <form>
                <input
                  type="text"
                  className="p-2 pb-0 input-comment rounded"
                  placeholder="Post your comment..."
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  value={comment}
                ></input>
                <input
                  type="button"
                  className={
                    comment == ""
                      ? "btn btn-sm mx-2 align-bottom disabled btn-coment"
                      : "btn btn-sm mx-2 align-bottom btn-coment btn-coment-active"
                  }
                  value="Submit"
                  onClick={() => {
                    if (comment == "") {
                      return "Debes de escribir algo en tu comentario";
                    } else {
                      commentFetch(comment);
                      // setDataComment(...dataComment, comment)
                      setComment("");
                    }
                  }}
                ></input>
              </form>
              </div>
            </div>
        </>
    )
}