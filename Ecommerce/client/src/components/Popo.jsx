import Navbar from '../components/Navbar';
import Rating from '@mui/material/Rating';
import './Popo.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Chatbot from './Chatbot';
import { toast } from 'react-toastify';
const Popo = () => {
    const navigate = useNavigate();
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


    const onAdd = (e, title) => {

        if (e.target.className == "Popo-bttn1") {
            navigate('/checkoutme');
            let newItem = title;
            const items = localStorage.getItem('cartList');
            let updatedItems = [];

            if (items) {
                updatedItems = JSON.parse(items);
            }

            updatedItems.push(newItem);
            localStorage.setItem('cartList', JSON.stringify(updatedItems));

        }
        else {
            if (localStorage.getItem('jwtecomm')) {

                e.preventDefault();
                let newItem = title;
                const items = localStorage.getItem('cartList');
                let updatedItems = [];

                if (items) {
                    updatedItems = JSON.parse(items);
                }

                updatedItems.push(newItem);
                localStorage.setItem('cartList', JSON.stringify(updatedItems));

            }
            else {
                toast.warn('You need to log in !')
                navigate('/users/sign_in');
            }
        }
    }

    return (
        <>
            <Navbar />
            <Chatbot />
            {
                state.filter((fil) => {

                    if (fil.title.includes(product)) {
                        return (
                            <>

                            </>
                        );
                    }
                }).map((ele) => {
                    return (
                        <div className="main my-3">
                            <div className="image">
                                <img id='pic' src={ele.image} alt="" />
                                <div className="Popo-butt">
                                    <button className='Popo-bttn1' onClick={(e) => { onAdd(e, ele.title) }}>Buy Now</button>
                                    <button className='Popo-bttn2' onClick={(e) => { onAdd(e, ele.title) }}>Add to Cart</button>
                                </div>
                            </div>
                            <div className="details">
                                <li><h2>{ele.title}</h2></li>
                                <li style={{ color: '#666' }}><h4>{ele.category}</h4></li>
                                <li style={{ color: '#666' }}>{ele.description}</li>
                                <li style={{ marginTop: '20px', fontSize: '30px' }}><b>Price - ${ele.price}</b></li>
                                <Rating name="read-only" value={ele.rating.rate} readOnly />
                            </div>
                          
                        </div>

                    );
                })
            }

        </>
    );
}
export default Popo;