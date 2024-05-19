import Navbar from '../components/Navbar';
import pic from '../images/dress1.jpeg';
import './Popo.css';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
const Popo=()=>{
    
    const [state, setState] = useState([]);
// -----------------------------------
    const location = useLocation();
    let product = location.state.id;
    
// -----------------------------------
    useEffect(() => async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response)
        setState(response.data)

    }, []);
    
    return(
        <>
            <Navbar/>
            {
                 state.filter((fil)=>{
                    
                    if(fil.title.includes(product)){
                        return (
                            <>  

                            </>
                        );
                    }
                }).map((ele)=>{
                    return(
                        <div className="main">
                            <div className="image">
                                <img id='pic' src={ele.image} alt="" />
                                <div className="butt">
                                    <button className='bttn1'>Buy Now</button>
                                    <button className='bttn2'>Add to Cart</button>
                                </div>
                            </div>
                            <div className="details">
                                <li><h2>{ele.title}</h2></li>
                                <li style={{color: '#666'}}><h4>{ele.category}</h4></li>
                                <li style={{color: '#666'}}>{ele.description}</li> 
                                <li style={{marginTop: '20px', fontSize:'30px'}}><b>Price - ${ele.price}</b></li>
                            </div>
                        </div>
                    
                    );
                })
            }
            
        </>
    );
}
export default Popo;