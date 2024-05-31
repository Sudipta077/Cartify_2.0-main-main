import React, { useEffect, useState } from "react";
import './Admin.css';
import axios from "axios";
import home from '../images/home.png';
import Ecommerce from '../images/shopping.png';
import Add from '../images/add-list.png';
import Logout from '../images/logout.png';
import Button from '@mui/material/Button';
import Customer from '../images/service.png';
import Order from '../images/order.png';
import Alert from '@mui/material/Alert';
import { NavLink, useNavigate } from "react-router-dom";
const Admin = () => {
    const navigate = useNavigate();
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [list, setList] = useState([]);
    const [disableShipped, setDisableShipped] = useState({});
    const [disableDelivered, setDisableDelivered] = useState({});

    const onLogout=(e)=>{
        localStorage.removeItem('jwtecomm');
        localStorage.removeItem('tokenExpiration');
        navigate('/users/sign_in');
    }

    

    const handleClick = async (e, id) => {
        const { id: buttonId } = e.target;

        if (buttonId === "shipped") {
            setDisableShipped(prevState => ({ ...prevState, [id]: true }));
            try {
                console.log(id);
                const res = await axios.post('/sendemail', { userId: id });
                if (res.status === 200) {
                    // (res.data.message);
                    <Alert severity="success">{res.data.message}</Alert>
                }
            } catch (err) {
                if (err.response) {
                    window.alert(err.response.data.message || "Incorrect credentials");
                }
                setDisableShipped(prevState => ({ ...prevState, [id]: false }));
            }
        } else if (buttonId === "delivered") {
            setDisableDelivered(prevState => ({ ...prevState, [id]: true }));
            try {
                await axios.post('/delivered', { id });
                window.location.reload();
            } catch (err) {
                console.error(err);
                setDisableDelivered(prevState => ({ ...prevState, [id]: false }));
            }
        }
    };

    const showData = async () => {
        try {
            const response = await axios.get('/admin');
            setTotalCustomers(response.data.data);
            setTotalOrders(response.data.orders);
            setList(response.data.list);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        showData();
    }, []);

    const onSearch = () => {
        const x = document.querySelector('.Admin-one');
        x.style.display = x.style.display === "none" ? "block" : "none";
    };

    return (
        <>
            <div className="Admin-gain">
                <div className="Admin-one">
                    <div className="Admin-options">
                        <img className="Admin-pic" src={home} height={15} width={15} alt="home" />
                        <p>Dashboard</p>
                    </div>
                    <div className="Admin-options">
                        <img className="Admin-pic" src={Ecommerce} height={15} width={15} alt="eCommerce" />
                        <NavLink to='/' style={{textDecoration: 'none' , color:"black"}}>Go to home</NavLink>
                    </div>
                    <div className="Admin-options">
                        <img className="Admin-pic" src={Add} height={20} width={20} alt="add items" />
                        <NavLink to='/addproduct' style={{textDecoration: 'none', color:"black"}}>Add Items</NavLink>
                    </div>
                    <div className="Admin-options">
                        <img className="Admin-pic" src={Logout} height={15} width={15} alt="logout" />
                        <p onClick={(e)=>{onLogout()}} >Logout</p>
                    </div>
                </div>

                <div className="Admin-two">
                    <div className="Admin-head">
                        <h4 className="Admin-Hamburger" onClick={onSearch}>|||</h4>
                        <h4>Dashboard</h4>
                    </div>
                    <div className="Admin-information">
                        <div className="Admin-card">
                            <div className="Admin-card-box">
                                <h5>Total Customers</h5>
                                <img className="Admin-logo" src={Customer} alt="customers" height={20} width={20} /><br />
                            </div><br />
                            <h2>{totalCustomers}</h2>
                        </div>
                        <div className="Admin-card">
                            <div className="Admin-card-box">
                                <h5>Total Orders</h5>
                                <img className="Admin-logo" src={Order} alt="orders" height={20} width={20} /><br />
                            </div><br />
                            <h2>{totalOrders}</h2>
                        </div>
                    </div>
                    <div className="Admin-data">
                        {list.map((row, i) => (
                            <div className="Admin-product container-fluid col-lg-12" key={i}>
                                <h5>Order id: {row._id}</h5>
                                <h5>Name: {row.name}</h5>
                                <h5>Address: {row.address}</h5>
                                <div className="orderSHow d-flex flex-column">
                                    {row.mappedData.orders.map((order, k) => (
                                        <div className="product" key={k}>
                                            <h6>Order {k + 1}: {JSON.stringify(order.order)}</h6>
                                            <h6>Product id: {JSON.stringify(order._id)}</h6>
                                        </div>
                                    ))}
                                </div>
                                <div className="admin-buttons d-flex justify-content-evenly">
                                    <Button
                                        variant="contained"
                                        className="text-center"
                                        id="shipped"
                                        onClick={(e) => handleClick(e, row._id)}
                                        disabled={disableShipped[row._id] || false}
                                    >
                                        Shipped
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className="text-center"
                                        id="delivered"
                                        onClick={(e) => handleClick(e, row._id)}
                                        color="success"
                                        disabled={disableDelivered[row._id] || false}
                                    >
                                        Delivered
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
