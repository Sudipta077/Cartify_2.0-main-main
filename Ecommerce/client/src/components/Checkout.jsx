import React,{ useState, useEffect ,useContext} from "react";
// import './Checkout.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () =>{
    const navigate = useNavigate();
    const [state, setState] = useState([]);

    const location = useLocation();
    let product = location.state.id;

    

    useEffect(() => async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response)
        setState(response.data)

    }, []);

    return(
        <>
            {
                state.filter((fil)=>{
                    
                    if(fil.title.includes(product)){
                        return (
                            <>  

                            </>
                        );
                    }
                }).map((ele) => {
                    return(
                        <div className="main">
                          
                            <div className="container2">
                                <div className="navbar2">
                                    <div className="title2"><h4>Order Summary</h4></div>
                                </div>
                                <div className="schema">
                                    <div className="card">
                                        <div className="card-box">
                                            <div className="prod">
                                                <img src={ele.image} alt={ele.image} />
                                            </div>
                                            <div className="til">
                                                <h2>{ele.title.substring(0, 20)}...</h2>
                                                <h3>${ele.price}</h3>
                                            </div><hr />
                                            <div className="total">
                                                <div className="name"><p>subtotal</p></div>
                                                <div className="price"><p>${ele.price}</p></div>
                                            </div>
                                            <div className="total" style={{color:"grey", marginBottom:"0.5rem"}}>
                                                <div className="name"><p>Delivery Fee</p></div>
                                                <div className="price"><p>$00.00</p></div>
                                            </div><hr />
                                            <div className="total">
                                                <div className="name"><p>Total to pay</p></div>
                                                <div className="price"><p>${ele.price}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </>
    )
}
export default Checkout;




