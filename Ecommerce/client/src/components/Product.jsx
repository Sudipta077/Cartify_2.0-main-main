import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import './List.css';

const Product = () => {
    const [state, setState] = useState([]);


    useEffect(() => async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response)
        setState(response.data)

    }, []);

    return (
        <>
            <Navbar/>

            {
                state.map((ele) =>{
                    return(
                        <>
                            <li>{ele.id}</li>
                            <li>{ele.title}</li>
                            <li>{ele.name}</li>
                            <li>{ele.price}</li>
                            <li>{ele.description}</li>
                            <img src={ele.image} style={{width: "80px", height:"80px"}}></img>
                            <button>Add to cart</button>
                        </>
                    )
                })
            }

            
        </>
    );
}
export default Product;