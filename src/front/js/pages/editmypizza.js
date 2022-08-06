import React, { useState, useEffect } from "react";
import Navbar from "../component/navbar.js";
import { Footer } from "../component/footer";
import { useParams } from "react-router-dom";
import config from "../config.js";

export const Editmypizza = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("/api/validatoken", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res);
        if (res.status !== 200) {
          // return res.json();
          navigate("/home");
        }
      });
    }
  }, []);

  const params = useParams();
  const id = params.id;
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${config.hostname}/api/pizza/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);
  console.log(data);

  return (
    <>
      <Navbar />

      <h1>Editar pizza</h1>

      <div className="div-editar-imagen">
        <div className="avatar-upload">
          <div className="avatar-edit">
            <input
              type="file"
              id="imageUpload"
              accept=".png, .jpg, .jpeg"
              className=""
              // onChange={onImageChange}
            />
            <label className="imageUpload" for="imageUpload">
              +
            </label>
          </div>
          <div className="avatar-preview">
            <img src={data.pizza_image} id="imagePreview" />
          </div>
        </div>
      </div>

      <div className="div-editar-ingredientes">
    <h2>Editar ingredientes</h2>
    <p>{data.recipe}</p>

      </div>

      <Footer />
    </>
  );
};
