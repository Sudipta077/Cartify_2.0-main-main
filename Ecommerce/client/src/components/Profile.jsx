import React, { useEffect, useState } from "react";
import axios from 'axios';
import image from "../images/avatar.svg";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import Chatbot from "./Chatbot";

const Profile = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    const callProfilePage = async () => {
        try {
            const token = localStorage.getItem('jwtecomm');
            if (!token) {
                // Handle case when token is not available
                navigate("/users/Sign_in");
                return;
            }
    
            const res = await axios.post(
                '/profile',
                {}, // Empty body if no data is needed for the request
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
    
            if (res.status === 200) {
                setData(res.data.data); // Update state with profile data
                console.log(res.data.data);
                window.alert("Profile loaded successfully");
            } else {
                throw new Error(res.statusText);
            }
        } catch (error) {
            if (error.response) {
                window.alert(error.response.data.message || "Incorrect credentials");
                console.log(error.response.data.error || error.response.data);
            } else if (error.request) {
                window.alert("No response received from the server");
                console.log(error.request);
            } else {
                window.alert("Error in setting up the request");
                console.log('Error', error.message);
            }
        }
    };

    useEffect(() => {
        callProfilePage();
    }, []);

    return (
        <>
        <Chatbot/>
            <div className="profile-main">
                <div className="container-profile">
                    <div className="profile-card1">
                        <img src={image} className="profile-card-img-top" alt="Avatar" height={120} width={120} />
                        <div className="profile-card-body">
                        
                        </div>
                    </div>
                    {data && (
                        <div className="profile-card2">
                            <p>Name: {data.name}</p>
                            <p>Contact No.: {data.contact}</p>
                            <p>Email: {data.email}</p>
                            <div className="profile-card-body ">
                                <NavLink className="nav-link skin btn btn-primary" to='/'>Continue Shopping</NavLink>
                                <NavLink className="nav-link skin btn btn-primary" to='/'>Go to your cart</NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Profile;
