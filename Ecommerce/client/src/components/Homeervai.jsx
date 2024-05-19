import React from "react";
import img from '../images/logo.png';
import { NavLink } from "react-router-dom";
import sale from '../images/sale.jpeg';
import groceries from '../images/groceries.jpeg';
import makeup from '../images/makeup.jpeg';
import mobile from '../images/mobile.jpeg';
import tv from '../images/tv.jpeg';
import utensils from '../images/utensils.jpeg';
import dress1 from '../images/dress1.jpeg';
import dress2 from '../images/dress2.jpeg';
import dress3 from '../images/dress3.jpeg';
import dress4 from '../images/dress4.jpeg';
import bannerback from '../images/bannerback.png';
import pendrive from '../images/pendrive.jpeg';
import powerbank from '../images/powerbank.jpeg';
import printer from '../images/printer.jpeg';
import camera from '../images/camera.jpeg';
import sofa from '../images/sofa.jpeg';
import fashion from '../images/fashion.jpeg';
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.png';
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="card-container justify-content-center flex-wrap mt-2 p-2 d-flex">

                <div className="card m-3 col-lg-1">
                    <img src={sale} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">Top Sales</p>
                    </div>
                </div>
                <div className="card m-3 col-lg-1">
                    <img src={mobile} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">Phones</p>
                    </div>
                </div>
                <div className="card m-3 col-lg-1">
                    <img src={makeup} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">Beauty</p>
                    </div>
                </div>
                <div className="card m-3 col-lg-1">
                    <img src={utensils} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">Utensils</p>
                    </div>
                </div>
                <div className="card m-3 col-lg-1">
                    <img src={tv} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">Television</p>
                    </div>
                </div>

                <div className="card m-3 col-lg-1">
                    <img src={groceries} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">Groceries</p>
                    </div>
                </div>
                <div className="card m-3 col-lg-1">
                    <img src={fashion} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">Fashion</p>
                    </div>
                </div>
                <div className="card m-3 col-lg-1">
                    <img src={sofa} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">Furniture</p>
                    </div>
                </div>
            </div>

            <div className="ads container-fluid">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner1} className="" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banner2} className="" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banner3} className="" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            <div className="container-fluid extra1 electronics my-5">
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/list"><h1>Best of electronics</h1> </NavLink> 
                <div className="card-container flex-wrap container-fluid d-flex justify-content-between mx-1">
                    <div className="card col-lg-3 col-sm-4" >
                        <img src={camera} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Cameras</h5>
                            
                        </div>
                    </div>
                    <div className="card col-lg-3 col-sm-4" >
                        <img src={printer} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Printers</h5>
                            
                        </div>
                    </div>
                    <div className="card col-lg-3 col-sm-4" >
                        <img src={pendrive} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Pendrives</h5>
                        
                        </div>
                    </div>
                    <div className="card col-lg-3 col-sm-4" >
                        <img src={powerbank} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Powerbanks</h5>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid clothing extra1 my-3">
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/clothing"><h1>Best of clothing</h1> </NavLink> 
                <div className="card-container container-fluid d-flex justify-content-between mx-1">
                    <div className="card col-lg-3 col-sm-4" >
                        <img src={dress1} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Winter wear</h5>
                            
                        </div>
                    </div>
                    <div className="card col-lg-3 col-sm-4" >
                        <img src={dress2} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Crop Tops</h5>
                            
                        </div>
                    </div>
                    <div className="card col-lg-3 col-sm-4" >
                        <img src={dress3} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Women's wear</h5>
                            
                        </div>
                    </div>
                    <div className="card col-lg-3 col-sm-4" >
                        <img src={dress4} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Western Styles</h5>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer d-flex justify-content-between p-5 container-fluid">
                <div className="container d-flex col-lg-6">
                    <div className="about-foot container col-lg-2">
                        <h5 className="text-center">ABOUT</h5>
                        <ul type="none">
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Cartify Stories</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>

                    <div className="about-foot container col-lg-2">
                        <h5 className="text-center">HELP</h5>
                        <ul type="none">
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Cartify Stories</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>
                    <div className="about-foot container col-lg-2">
                        <h5 className="text-center">SOCIAL</h5>
                        <ul type="none">
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Cartify Stories</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>
                </div>
                <div className="container col-lg-4">
                    <h4>Address</h4>
                    <p>Cartify Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India

CIN: U51109KA2012PTC066107

Telephone: 044-45614700</p>
                </div>
                
            </div>
        </>
    );
}
export default Home;