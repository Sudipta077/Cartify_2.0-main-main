import React from "react";
import './Order.css';
import image from '../images/printer.jpeg';
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
const Order = () =>{
    toast.success("Order placed.")
    return(
        <>
            <div className="lead">
                <img className="picture" src={image} alt="" />
                <h1>Order Placed</h1>
                <NavLink to='/'><button className="Payment-switch" >Go to Home</button></NavLink>
            </div>
        </>
    )
}
export default Order;