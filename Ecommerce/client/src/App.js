import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Index from './components/Index.jsx';
import Product from './components/Product';
import { Routes, Route } from 'react-router-dom';
import List from '../src/components/List';
import Electronics from './components/Electronics';
import Clothing from '../src/components/Clothing';
import Popo from './components/Popo';
import Error from './components/Error.jsx';
import Profile from './components/Profile.jsx';
import Payment from './components/Payment.jsx';
import Checkout from './components/Checkout.jsx';
import Checkoutme from './components/Checkoutme.jsx';
import Order from './components/Order.jsx';
import UserContextProvider from '../src/context/UserContextProvider.jsx';
import Admin from './components/Admin.jsx';
import Chatbot from './components/Chatbot.jsx';
import Buynow from './components/Buynow.jsx';
import Addproduct from './components/Addproduct.jsx';
function App() {
  return (
    <UserContextProvider>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/navbar' element={<Navbar/>}></Route>
      <Route path='/users/sign_up' element={<Index isSignInPage={false}/>}/>
      <Route path='/users/sign_in' element={<Index isSignInPage={true}/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/clothing' element={<Clothing/>}/>  
      <Route path='/popo' element={<Popo/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/checkoutme' element={<Checkoutme/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/order' element={<Order/>}/> 
      <Route path='/admin' element={<Admin/>}/>  
      <Route path='/chatbot' element={<Chatbot/>}/> 
      <Route path='/buynow' element={<Buynow/>}/>  
      <Route path='/addproduct' element={<Addproduct/>}/>  
     
      <Route path='*' element={<Error />} />
    </Routes>
    </UserContextProvider>
  );
}

export default App;