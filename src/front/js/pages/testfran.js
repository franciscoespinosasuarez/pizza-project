import React, { useState, useEffect } from "react";
import config from "../config";
import { Link } from "react-router-dom";


export const TestFran = () => {
const [data, setData] = useState([]);

useEffect ( ()=>{
    fetch (`${config.hostname}/api/user`, {
        method: "GET"
    }).then(res => res.json())
    .then(res => setData(res))

},[] )



    return (
        <>
        {console.log(data)}
        <h2>usuarios</h2>
        <ul>
            {
                data.map((user)=>{
                    return <Link to = {`/user/${user["id"]}`} ><li> {user["name"] }  {user["id"]} </li></Link>
                })
            }
        </ul>
        </>
    )
}