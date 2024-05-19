import React from "react";
import './Order.css';
import image from '../images/printer.jpeg';

const Order = () =>{
    return(
        <>
            <div className="lead">
                <img className="picture" src={image} alt="" />
                <h1>Order Placed</h1>
            </div>
        </>
    )
}
export default Order;