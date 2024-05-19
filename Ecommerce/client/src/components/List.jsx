import React, { useState, useEffect } from "react";

import axios from "axios";
import Navbar from "./Navbar";
import { useLocation,useNavigate } from "react-router-dom";
const List = () => {
    const [state, setState] = useState([]);
    const location = useLocation();
    let filname = location.state.id;
    const navigate = useNavigate();
    useEffect(() => async () => {
        const response = await axios.get("https://fakestoreapi.com/products") 
        console.log(response)
        setState(response.data)
        
    }, []);
    
    const onSearch=(e)=>{
        let name = e.target.innerText; 
        navigate('/popo',{ state:{id : name}});
    }


    return (
        <>
        <Navbar />
        
            {
                state.filter((fil)=>{
                    if(fil.title.includes(filname)){return(
                        <></>
                    )}
                    else if(fil.category.includes(filname)){
                        return (
                            <>  

                            </>
                        );
                    }
                    else if(fil.catergory==""){
                        return(
                            <></>
                        )
                    }
                    
                }).map((ele) => {
                    return (
                        <>
                            <div  className="list-body container-fluid p-2"  >
                                <div className="list-product d-flex justify-content-evenly mt-5">
                                    <div className="product-image d-flex align-self-center">
                                        <img src={ele.image} style={{ width: "10vw", height: "10vw" }}></img>
                                    </div>
                                    <div className="details">
                                        <li onClick={(e)=>{onSearch(e)}} ><h5>{ele.title}</h5></li>
                                        <li>{ele.category}</li>
                                        
                                        <li>{ele.description}</li>                                    
                                        <button className="button-28 m-2" role="button">Add to cart</button>
                                    </div>
                                    <div className="price  . list-unstyled fs-4">
                                    <li><b>Price - ${ele.price}</b></li>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }


        </>
    );
}
export default List;