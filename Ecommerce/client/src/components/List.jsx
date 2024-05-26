import React, { useState, useEffect,useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import Navbar from "./Navbar";
import { useLocation,useNavigate } from "react-router-dom";
import Chatbot from "./Chatbot";
const List = () => {
    const [state, setState] = useState([]);
    const {setData} = useContext(UserContext); 
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
    // const onAdd = (e, title) => {
    //     if(localStorage.getItem('jwtecomm')){
        
    //     e.preventDefault();
    //     let newItem = title;
    //     const items = localStorage.getItem('cartList');
    //     let updatedItems = [];
    
    //     if (items) {
    //         updatedItems = JSON.parse(items);
    //     }
    
    //     updatedItems.push(newItem);
    //     localStorage.setItem('cartList', JSON.stringify(updatedItems));        
       
    //   }
    //   else{
    //     window.alert('You need to log in !')
    //     navigate('/users/sign_in');
    //   }
    // }

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
                                <div className="list-product d-flex justify-content-evenly mt-5">
                                    <div className="product-image d-flex align-self-center">
                                        <img src={ele.image} style={{ width: "10vw", height: "10vw" }}></img>
                                    </div>
                                    <div className="details">
                                        <li onClick={(e)=>{onSearch(e)}} ><h5>{ele.title}</h5></li>
                                        <li>{ele.category}</li>
                                        
                                        <li>{ele.description}</li>                                    
                                        {/* <button className="button-28 m-2" role="button" onClick={(e) => { onAdd(e, ele.title) }} >Add to cart</button> */}
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