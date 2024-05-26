import React from "react";
import logo from '../images/logo.png';
import { NavLink,useNavigate } from "react-router-dom";
import './Navbar.css';
import { useState } from "react";
const Navbar=()=>{
  const[search, setSearch] = useState("");
  const onChange=(e)=>{
      setSearch(e.target.value);
  }
  const navigate = useNavigate();
  const onSearch =()=>{
    navigate('/list',{ state:{id : search}});
  }
  const onSignUp=()=>{
    if(localStorage.getItem('jwtecomm')){
      window.alert("You need to log out first !");
   }else{
    navigate('/users/sign_up');
   }
    
  }
  const onLogin=()=>{
    if(localStorage.getItem('jwtecomm')){
       window.alert("You are already logged in !");
    }else{
      navigate('/users/sign_in');
    }
  }

  const onLogout=()=>{
    if(localStorage.getItem('jwtecomm')){
       localStorage.removeItem('jwtecomm');
       window.alert("You have been logged out successfully.")
       navigate('/');
    }else{
      window.alert("You are not logged in !")
      navigate('/users/sign_in');
    }
  }

  const onProfile=()=>{
    navigate('/profile');
  }
    return (
        <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
      <NavLink className="nav-link navbar-brand skin d-flex" to='/'>
          <img src={logo} width="50" height="50" class="d-inline-block align-text-top"/>
          <h1>CARTIFY</h1>
          </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link skin" to='/admin'>Become a seller</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle skin" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sign-in
              </a>
              <ul className="dropdown-menu">
              <li onClick={(e)=>{onProfile(e)}} ><a className="dropdown-item" href="#"> <i class="zmdi zmdi-account"></i> My profile</a></li>
                <li onClick={(e)=>{onSignUp(e)}}><a className="dropdown-item" href="#"><i class="zmdi zmdi-account-add"></i> Sign-up</a> </li>
                <li  onClick={(e)=>{onLogin(e)}}><a className="dropdown-item" href="#"> <i class="zmdi zmdi-sign-in"></i> Login</a></li>
                <li onClick={(e)=>{onLogout(e)}} ><a className="dropdown-item" href="#"><i class="zmdi zmdi-close"></i> Logout</a></li>
              </ul>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link skin" to='/checkoutme'><i class="zmdi zmdi-shopping-cart"></i> Cart</NavLink>
            </li>
          </ul>
          <form className="d-flex search" role="search">
            <input className="form-control navbar-input me-2" value={search} onChange={onChange} type="search" placeholder="Search products, brands and more" aria-label="Search"/>
          
            <button className="btn btn-outline-success" type="submit" onClick={()=>onSearch(search)}>Search</button>
    
          </form>
        </div>
      </div>
    </nav>
        </>
      );

}
export default Navbar;