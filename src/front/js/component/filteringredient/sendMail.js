import React, { Component, useState } from "react";
import "./filteringredient.css";

export const SendMail = () => {

  return (
    
    <div className="container py-5">
      
      {/* Submit */}
      <div className="d-flex justify-content-center">
        <form action="/mail" method="POST">
          <button class="button-82-pushable" role="button">
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span class="button-82-front text">
              SEND MAIL
            </span>
        </button>
    </form>
      
      </div>
        
    </div>
  );
};
