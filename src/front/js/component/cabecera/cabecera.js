import React from "react";
import ReactPlayer from "react-player";
import "./cabecera.css";
import Login from "../loginform/loginform";

export const Cabecera = () => {
  return (
    <>
      <div className="video-div">
        <div className="overlay">
          <div className="texto-video">
            <h1 className="h1cabecera">Las mejores pizzas para cocinar en casa</h1>
            <a className="boton-registrate" href="#prueba1">Registrate</a>
          </div>
          <div className="div-login">
            <Login />
          </div>
        </div>
        <ReactPlayer
          url="https://res.cloudinary.com/dff57mtn0/video/upload/v1659773508/pizza-project/pizza_video_xweu8x.mp4"
          className="react-player video"
          playing
          width="100%"
          height="100%"
          loop

        />
      </div>
    </>
  );
};
