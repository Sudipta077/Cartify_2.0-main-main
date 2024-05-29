import React, { useEffect, useState } from "react";
import './Admin.css';
import axios from "axios";
import home from '../images/home.png';
import Ecommerce from '../images/shopping.png';
import Add from '../images/add-list.png';
import Logout from '../images/logout.png';

import Customer from '../images/service.png';
import Order from '../images/order.png';


const Admin = () => {

    
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [totalOrders, setTotalorders] = useState(0);
    const [list, setList] = useState([]);
   
 
   
    const showData = async () => {
        try {
           
            const response = await axios.get('/admin');
            setTotalCustomers(response.data.data);
            setTotalorders(response.data.orders);
            setList(response.data.list);
         
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        showData();
    }, []);

    const onSearch = (e) => {
        const x = document.querySelector('.Admin-one');
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    };

    return (
        <>
            <div className="Admin-gain">
                <div className="Admin-one">
                    <div className="Admin-options">
                        <img className="Admin-pic" src={home} height={15} width={15} />
                        <p>Dashboard</p>
                    </div>
                    <div className="Admin-options">
                        <img className="Admin-pic" src={Ecommerce} height={15} width={15} />
                        <p>eCommerce</p>
                    </div>
                    <div className="Admin-options">
                        <img className="Admin-pic" src={Add} height={20} width={20} />
                        <p>Add Items</p>
                    </div>
                    <div className="Admin-options">
                        <img className="Admin-pic" src={Logout} height={15} width={15} />
                        <p>Logout</p>
                    </div>
                </div>

                <div className="Admin-two">
                    <div className="Admin-head">
                        <h4 className="Admin-Hamburger" onClick={(e) => { onSearch(e) }}>|||</h4>
                        <h4>Dashboard</h4>
                    </div>
                    <div className="Admin-information">
                        <>

                            <div className="Admin-card">
                                <div className="Admin-card-box">
                                    <h5>Total Customers</h5>
                                    <img className="Admin-logo" src={Customer} alt="" height={20} width={20} /><br />
                                </div><br />
                                <h2>{totalCustomers}</h2>
                            </div>
                            <div className="Admin-card">
                                <div className="Admin-card-box">
                                    <h5>Total Orders</h5>
                                    <img className="Admin-logo" src={Order} alt="" height={20} width={20} /><br />
                                </div><br />
                                <h2>{totalOrders}</h2>
                            </div>
                        </>
                    </div>
                    <div className="Admin-data">
                    {
    list.map((row, i) => {
        
        return (
            <>
            <div className="Admin-product container-fluid col-lg-12" key={i}>
                
                <h5>Order id: {row._id}</h5>
                <h5>Name: {row.name}</h5>
                <h5>Address: {row.address}</h5>
                <div className="orderSHow d-flex  flex-column">
                {row.mappedData.orders.map((order, k) => (
                                        <div className="product" key={k}>
                                            <h6>Order {k+1}: {JSON.stringify(order.order)}</h6>
                                            <h6>product id: {JSON.stringify(order._id)}</h6>
                                            
                                        </div>
                                    ))}
                                    </div>
             <button type="submit" className="Payment-switch" >Shipped</button>
            </div>
             </>
        );
    })
}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
