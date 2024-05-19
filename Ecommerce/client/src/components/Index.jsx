import React, { useState } from "react";
import './Index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Index = ({ isSignInPage = true }) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        contact: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const endpoint = isSignInPage ? '/signing_in' : '/signing_up';
        if (validateForm()) {
            try {
                const response = await axios.post(endpoint, values, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = response.data;
                if (response.status === 200) {
                    if (isSignInPage) {
                        localStorage.setItem('jwtecomm', data.token);
                        console.log('User logged in successfully');
                        window.alert("Logged in successfully");
                        navigate("/");
                    } else {
                        alert("Successful registration");
                        navigate("/users/sign_in");
                    }
                }
            } catch (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    window.alert(error.response.data.message || "Incorrect credentials");
                    console.log(error.response.data.error || error.response.data);
                } else if (error.request) {
                    // The request was made but no response was received
                    window.alert("No response received from the server");
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    window.alert("Error in setting up the request");
                    console.log('Error', error.message);
                }
            }
        }
    };
    

    const validateForm = () => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email is invalid';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        if (!isSignInPage) {
            if (!values.name) {
                errors.name = 'Name is required';
            }
            if (!values.contact) {
                errors.contact = 'Contact number is required';
            } else if (!/^\d{10}$/.test(values.contact)) {
                errors.contact = 'Contact number must be 10 digits';
            }
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <>
            <div className="main">
                <div className="signin">
                    <div className="pic"></div>
                    <div className="put">
                        <form method="POST" onSubmit={handleSubmit}>
                            <h2>{isSignInPage ? 'SignIn' : 'SignUp'}</h2>
                            <div className="box">
                                {!isSignInPage && <div className="container">
                                    <label htmlFor="">Name</label><br />
                                    <input type="text" className="fill" name="name" placeholder="Full Name" onChange={handleInput} />
                                    {errors.name && <p className="error">{errors.name}</p>}
                                </div>}
                                {!isSignInPage && <div className="container">
                                    <label htmlFor="">Contact No.</label><br />
                                    <input type="text" className="fill" name="contact" placeholder="Enter 10 digit number" onChange={handleInput} />
                                    {errors.contact && <p className="error">{errors.contact}</p>}
                                </div>}
                                <div className="container">
                                    <label htmlFor="">Email</label><br />
                                    <input type="email" className="fill" name="email" placeholder="Email Address" onChange={handleInput} />
                                    {errors.email && <p className="error">{errors.email}</p>}
                                </div>
                                <div className="container">
                                    <label htmlFor="">Password</label><br />
                                    <input type="password" className="fill" name="password" placeholder="Enter Your Password" onChange={handleInput} />
                                    {errors.password && <p className="error">{errors.password}</p>}
                                </div>
                            </div>
                            <button type="submit" className="putt">{isSignInPage ? 'SignIn' : 'SignUp'}</button>
                            <p>{isSignInPage ? 'Dont have an account? ' : 'Already have an account? '}<a onClick={() => navigate(`/users/${isSignInPage ? 'Sign_up' : 'Sign_in'}`)} href="#">{isSignInPage ? 'Sign up' : 'Sign in'}</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
