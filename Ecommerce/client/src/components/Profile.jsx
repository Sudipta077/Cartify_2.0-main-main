import React, { useEffect, useState } from "react";
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import profilepic from '../images/avatar.svg';
import Chatbot from "./Chatbot";
import { toast } from "react-toastify";
const Profile = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

        const showOrder=(e,title)=>{
            navigate('/list',{state:{id:title}})
        }

    const callProfilePage = async () => {
        try {
            const token = localStorage.getItem('jwtecomm');
            if (!token) {

                navigate("/users/Sign_in");
                return;
            }

            const res = await axios.post(
                '/profile',
                {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            if (res.status === 200) {
                setData(res.data.data);
                console.log(res.data.data);
                // window.alert("Profile loaded successfully");
               toast.success("Profile loaded successfully");
            } else {
                throw new Error(res.statusText);
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "Incorrect credentials");
                console.log(error.response.data.error || error.response.data);
            } else if (error.request) {
                toast.error("No response received from the server");
                console.log(error.request);
            } else {
                toast.error("Error in setting up the request");
                console.log('Error', error.message);
            }
        }
    };

    useEffect(() => {
        callProfilePage();
    }, []);

    return (
        <>
            <Chatbot />

            <div className="profile-main">
                <div className="container-profile">

                    {data && (
                        <div className="profile-card container mt-5">
                           
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt="Remy Sharp" src={profilepic}  sx={{ width: 70, height: 70 }} />
                            </StyledBadge>
                           
                                
                            
                            
                                <h1>{data.name}</h1>
                                <p>{data.email}</p>
                                <p>Contact : {data.contact}</p>
                                <hr />
                            {/* <div className="profile-card-body ">
                                <NavLink className="nav-link skin btn btn-primary" to='/'>Continue Shopping</NavLink>
                                <NavLink className="nav-link skin btn btn-primary" to='/'>Go to your cart</NavLink>
                            </div> */}

                        </div>
                    )}


                </div>
                <div className="container">
                <h2 className="text-start">Your orders: </h2>
                <div className="profile-orders">
                    {data && data.orders && data.orders.length > 0 ? (
                        data.orders.map((item, index) => (
                            
                                <div key={index} className="order-item text-start" onClick={(e)=>{showOrder(e,item.order)}}>
                                    <p>{index+1} : {item.order}</p>

                                </div>
                       
                        ))
                    ) : (
                        <p>No orders found</p>
                    )}
                </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
