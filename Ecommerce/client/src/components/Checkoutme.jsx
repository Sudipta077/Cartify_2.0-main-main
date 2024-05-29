import React, { useEffect, useState } from "react";
import './Checkoutme.css';
import Navbar from '../components/Navbar';
import axios from "axios";
import Chatbot from "./Chatbot";
import { NavLink } from "react-router-dom";
const Checkoutme = () => {


    const getItems = () => {
        const list = localStorage.getItem('cartList');
        if (list) {
            return JSON.parse(list);
        } else {
            return [];
        }
    };

    const [items, setItems] = useState(getItems());
    const [state, setState] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const deleteItem=(id)=>{
            const updatedItems = items.filter((ele,index)=>{
            return index !== id;
        })

        setItems(updatedItems);
        localStorage.setItem('cartList', JSON.stringify(updatedItems));
    }

    useEffect(() => async () =>  {
        setItems(getItems());
        const response = await axios.get("https://fakestoreapi.com/products") 
        console.log(response)
        setState(response.data)
    }, []);
   
    const calculateTotalPrice = () => {
        
        const price = items.reduce((total,item)=>{
            const product =state.find(product=> product.title ===item);
            return product ? total + product.price :total;
        },0);
        
        setTotalPrice(price);
    };

    useEffect(() => {
        calculateTotalPrice();
    },[items,state]);
    const discount = totalPrice * 0.05;
    const deliveryCharges = totalPrice === 0 ? 0 : 5;
    const payableAmount = totalPrice - discount + deliveryCharges;

    return (
        <>
            <Chatbot/>
            <Navbar />
            <div className="checkout-main container-fluid col-10 d-flex mt-5 justify-content-between">
                <div className="checkout-orders text-start col-lg-8 col-sm-12 container-fluid">
                    <h1>Your Orders...</h1>
                    
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            
                            
                            state.filter((fil)=>{
                                if(fil.title.includes(item)){
                                    return(
                                        <></>
                                    )
                                }
                            }).map((ele)=>{
                               
                                return(
                                    <>
                                    <div className="orderList d-flex justify-content-between">
                                        <img src={ele.image} alt="" />
                                        <p key={index} className="orders">{item}</p>
                                        <i className="zmdi zmdi-delete zmdi-hc-2x" onClick={()=>deleteItem(index)}></i>
                                    </div>
                                    </>
                                );
                            })


                           
                        ))
                    ) : (
                        <p>No items in the cart</p>
                    )}
                </div>

                <div className="bill-container container col-lg-4 col-sm-10">
                    <div className="checkout-bill">
                        <h4>PRICE DETAILS</h4>
                        <hr />
                       <table className="col-12 text-start">
                            <tr>
                                <td>Total Price -</td>
                                <td>$ {totalPrice.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Discount -</td>
                                <td>$ {discount.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Delivery Charges -</td>
                                <td>$ {deliveryCharges}</td>
                            </tr>
                            <hr />
                            <tr>
                                <td>You pay -</td>
                                <td>$ {payableAmount.toFixed(2)}</td>
                            </tr>
                            
                       </table>
                       {totalPrice > 0 ? (
    <NavLink to='/buynow'><button className="button-28 m-5">Buy Now</button></NavLink>
) : (
    <button
        className="button-28 m-5"
        onClick={() => window.alert("Add some items to the cart.")}
        
    >
        Buy Now
    </button>
)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkoutme;
