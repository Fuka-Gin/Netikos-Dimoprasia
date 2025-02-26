import React, {useEffect} from "react";
import './LandingPage.css';
import './Marquee.css';
import { Link } from "react-router-dom";
import imagePath from './Assets/car1.jpg';

const LandingPage = () => {

    useEffect(() => {
        // Function to update the time
        const getTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            document.getElementById('current-time').textContent = timeString;
        };

        // Call the function initially to set the time right away
        getTime();

        // Set an interval to update the time every second
        const intervalId = setInterval(getTime, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    return( 
        <div>
            <nav className="navbar-section">
                <div className="brand">
                    <h2>Netikos Dimoprasía</h2>
                </div>
                <div className="links" style={ {marginLeft: '650px'} }>
                    <Link to='/'>Home</Link>
                </div>
                <div className="links">
                    <Link to='/about'>About</Link>
                </div>
                <div className="links">
                    <Link to='/signup' id="signup-button">Sign Up</Link>
                </div>
            </nav>
            <div className="heading-section">
                <h1>Welcome to Netikos Dimoprasía</h1>
                <Link to='/login' id="login-button" className="btn btn-primary btn-lg">Login</Link>
                <div className="swiper brand-slider7" id="brandSlider4">
                    <marquee className="marq" direction="left">
                        <div className="geek1">
                        <h5 style={{color: 'white', margin: 'unset'}}>
                        Forward Auction&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        Reverse Auction&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        Dutch Auction&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        Japanese Auction&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        Yankee Auction&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        E-Tender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        IT-Services&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        SCM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        Logistic Management&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        Inventory Management
                        </h5>
                        </div>
                    </marquee>
                </div>
            </div>
            <div className="goods-section">
                <div className="goods">
                    <div className="goods-time-image">
                        <h3 id="current-time"></h3>
                        <img src={imagePath} id="pic" alt="car1" />
                    </div>
                    <div className="goods-description">
                        <h4 className="text">31th January</h4>
                        <h4 className="text">Material: Sale of Ford</h4>
                        <h4 className="text">Location: Chennai</h4>
                    </div>
                </div>
                <div className="goods">
                    <div className="goods-time-image">
                        <h3 id="current-time"></h3>
                        <img src={imagePath} id="pic" alt="car1" />
                    </div>
                    <div className="goods-description">
                        <h4 className="text">31th January</h4>
                        <h4 className="text">Material: Sale of Ford</h4>
                        <h4 className="text">Location: Chennai</h4>
                    </div>
                </div>
                <div className="goods">
                    <div className="goods-time-image">
                        <h3 id="current-time"></h3>
                        <img src={imagePath} id="pic" alt="car1" />
                    </div>
                    <div className="goods-description">
                        <h4 className="text">31th January</h4>
                        <h4 className="text">Material: Sale of Ford</h4>
                        <h4 className="text">Location: Chennai</h4>
                    </div>
                </div>
                
                <div className="goods">
                    <div className="goods-time-image">
                        <h3 id="current-time"></h3>
                        <img src={imagePath} id="pic" alt="car1" />
                    </div>
                    <div className="goods-description">
                        <h4 className="text">31th January</h4>
                        <h4 className="text">Material: Sale of Ford</h4>
                        <h4 className="text">Location: Chennai</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LandingPage;