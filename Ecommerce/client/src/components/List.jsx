import React, { useState, useEffect,useContext } from "react";

import axios from "axios";
import Navbar from "./Navbar";
import { useLocation,useNavigate } from "react-router-dom";
import Chatbot from "./Chatbot";
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
    
    const onSearch=(e,title)=>{
        let name = title; 
        navigate('/popo',{ state:{id : name}});
    } 
    

    return (
        <>
        <Navbar />
        <Chatbot/>
        
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
                                <div className="list-product d-flex justify-content-evenly mt-5" onClick={(e)=>{onSearch(e,ele.title)}}>
                                    <div className="product-image d-flex align-self-center">
                                        <img src={ele.image} style={{ width: "10vw", height: "10vw" }}></img>
                                    </div>
                                    <div className="details">
                                        <li><h5>{ele.title}</h5></li>
                                        <li>{ele.category}</li>
                                        
                                        <li>{ele.description}</li>                                    
                                       
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