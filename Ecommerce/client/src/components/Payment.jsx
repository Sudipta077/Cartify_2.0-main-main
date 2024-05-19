import React from "react";
import './Payment.css';
import { useNavigate } from "react-router-dom";

const Payment = () =>{
    const navigate = useNavigate();
    return(
        <>
            <div className="leader">
                <div className="pay">
                    <form className="from" action="">
                        <div className="head"><h2>Payment</h2></div>
                        <div className="box">
                            <input className="yo" type="text" placeholder="Full Name" required /><br />
                            <input className="yo" type="number" placeholder="Card Number" required /><br />
                            <input className="yo" type="calender" placeholder="Expiry" required /><br />
                            <input className="yo" type="password" placeholder="CVV/CVC" required /><br />
                            <button className="switch" onClick={() => navigate('/order')}>Pay</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Payment;