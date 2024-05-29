import Navbar from '../components/Navbar';
import pic from '../images/dress1.jpeg';
import './Popo.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Chatbot from './Chatbot';
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

        if (e.target.className == "bttn1") {
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
                window.alert('You need to log in !')
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
                        <div className="main">
                            <div className="image">
                                <img id='pic' src={ele.image} alt="" />
                                <div className="butt">
                                    <button className='bttn1' onClick={(e) => { onAdd(e, ele.title) }}>Buy Now</button>
                                    <button className='bttn2' onClick={(e) => { onAdd(e, ele.title) }}>Add to Cart</button>
                                </div>
                            </div>
                            <div className="details">
                                <li><h2>{ele.title}</h2></li>
                                <li style={{ color: '#666' }}><h4>{ele.category}</h4></li>
                                <li style={{ color: '#666' }}>{ele.description}</li>
                                <li style={{ marginTop: '20px', fontSize: '30px' }}><b>Price - ${ele.price}</b></li>
                            </div>
                            <div className="rating">
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>

                    );
                })
            }

        </>
    );
}
export default Popo;