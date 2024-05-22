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
import Order from './components/Order.jsx';
import UserContextProvider from './context/userContextProvider.jsx';
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
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/order' element={<Order/>}/>  
      {/* <Route path='/error' element={<Error/>}/>  */}
      <Route  element={<Error/>}/>  
    </Routes>
    </UserContextProvider>
  );
}

export default App;