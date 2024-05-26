import React from "react";
import './Admin.css';
import { useEffect, useState } from "react";
import axios from "axios";
import home from '../images/home.png';
import Ecommerce from '../images/shopping.png'
import Add from '../images/add-list.png';
import Logout from '../images/logout.png';
import Revenue from '../images/revenue.png';
import Customer from '../images/service.png';
import Order from '../images/order.png';

const Admin = () => {
    const[search, setSearch] = useState("")
    const[data, setData] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((response) =>{
            console.log(response);
            setData(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
    const onSearch=(e)=>{
        const x = document.querySelector('.Admin-one');;
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    } 

    return(
        <>
            <div className="Admin-gain">
                <div className="Admin-one">
                    <div className="Admin-options">
                        <img className="Admin-pic" src={home} height={15} width={15}/>
                        <p>Dashboard</p>
                    </div>
                    <div className="Admin-options">
                        <img className="Admin-pic" src={Ecommerce} height={15} width={15}/>
                        <p>eCommerce</p>
                    </div>
                    <div className="Admin-options">
                        <img className="Admin-pic" src={Add} height={20} width={20}/>
                        <p>Add Items</p>
                    </div>
                    <div className="Admin-options">
                        <img className="Admin-pic" src={Logout} height={15} width={15}/>
                        <p>Logout</p>
                    </div>
                </div>

                <div className="Admin-two">
                    <div className="Admin-head">
                        <h4 className="Admin-Hamburger" onClick={(e)=>{onSearch(e)}}>|||</h4>
                        <h4>Dashboard</h4>
                    </div>
                    <div className="Admin-information">
                        <div className="Admin-card">
                            <div className="Admin-card-box">
                                <h5>Total Revenue</h5>
                                <img className="Admin-logo" src={Revenue} alt="" height={20} width={20}/><br />
                            </div><br />
                            <h2>$92,854</h2>
                        </div>
                        <div className="Admin-card">
                            <div className="Admin-card-box">
                                <h5>Total Customers</h5>
                                <img className="Admin-logo" src={Customer} alt="" height={20} width={20}/><br />
                            </div><br />
                            <h2>210</h2>
                        </div>
                        <div className="Admin-card">
                            <div className="Admin-card-box">
                                <h5>Total Orders</h5>
                                <img className="Admin-logo" src={Order} alt="" height={20} width={20}/><br />
                            </div><br />
                            <h2>536</h2>
                        </div>
                    </div>
                    <div className="Admin-data">
                        {
                            data
                                .filter((row) => {
                                    if(search == ""){
                                        return row;
                                    }
                                    else if(row.title.toUpperCase().includes(search.toUpperCase())){
                                        return row;
                                    }
                                })
                                .map((row, i) => {
                                    return(
                                        
                                        <div className="Admin-product" key={i}>
                                            <img src={row.image} alt={row.image} height={50} width={50} />
                                            <h5>{row.title}</h5>
                                            <h5>${row.price}</h5>
                                        </div>
                                    )
                                })
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;