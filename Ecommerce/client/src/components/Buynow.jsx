import React,{useState} from "react";
import './Buynow.css';
import { useNavigate } from "react-router-dom";
import qr from "../images/qrcode.jpg";
import axios from "axios";

const Buynow = () => {
    const navigate = useNavigate();
    const [values,setValues] = useState("")
    const handleIntput=(e)=>{
        e.preventDefault();
        const{name,value} =e.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const token = localStorage.getItem('jwtecomm');
        const cartList = JSON.parse(localStorage.getItem('cartList'));
        const data = {
            ...values,
            cartList
        };
        console.log(data);
        
        try{
            
             const response = await axios.post('/buynow',data,{
                headers:{
                'Content-Type' :'application/json',
                'Authorization': `Bearer ${token}`
                }
            });
            if(response.status===200){
                window.alert("Order placed");
                localStorage.removeItem('cartList');
                navigate('/order');
            }
    }
    catch(err){
        if (err.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            window.alert(err.response.data.message || "Server Error Occurred !");
            console.log(err.response.data.message || err.response.data);
        } else if (err.request) {
            // The request was made but no response was received
            window.alert("No response received from the server");
            console.log(err.request);
        } else {
            // Something happened in setting up the request that triggered an Error
           
            console.log('Error', err.message);
        }
    }
}

    const onSearch = (e) => {
        const selectedOption = e.target.id;
        const qrCodeContainer = document.querySelector('.Payment-wow');
        
        if (selectedOption === "Payment-wo1") {
            qrCodeContainer.style.display = "block";
        } else {
            qrCodeContainer.style.display = "none";
        }
    }
    
    return (
        <>
            <div className="Payment-leader">
                <div className="Payment-pay">
                    <form onSubmit={handleSubmit} className="Payment-from" action="">
                        <div className="Payment-head mt-4"><h2>Payment</h2></div>
                        <div className="Payment-box">
                            <input className="Payment-yo" name="name" type="text" placeholder="Full Name" required  onChange={handleIntput}/><br />
                            <input className="Payment-yo" name="address" type="text" placeholder="Address" required onChange={handleIntput} /><br />
                            <input className="Payment-yo" name="contact" type="number" placeholder="Contact No." required  onChange={handleIntput}/><br />
                            <h2 className="Payment-label text-center mt-3" style={{ fontSize: "20px", fontWeight: "bold" }}>Payment Options</h2>
                            <div className="Payment-option d-flex justify-content-evenly">
                                <div className="googlepay">
                                    <input type="radio" id="Payment-wo1" value="Gpay" name="payment" onChange={handleIntput} onClick={(e) => { onSearch(e) }} className="Payment-wo" />
                                    <label for="Payment-wo1"  style={{ marginRight: "1vw" }}>Google Pay</label>

                                    <div className="Payment-wow text-center" >
                                        <img src={qr} alt="" height={100} width={100} />
                                    </div>
                                </div>
                                <div className="cod">
                                    <input type="radio"  onChange={handleIntput} value="cod" onClick={(e) => { onSearch(e) }} id="Payment-wo2" name="payment" className="Payment-wo" />
                                    <label for="Payment-wo2" style={{ marginRight: "1vw" }}>Cash On Delivery</label>
                                </div>
                            </div>



                            <button type="submit" className="Payment-switch" >Confirm Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Buynow;