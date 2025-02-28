import React from 'react';
import './DashboardPage.css';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    return(
        <div>
            <nav className="navbar-section">
                <div className="brand">
                    <h2>Netikos Dimoprasía</h2>
                </div>
                <div className="links" style={ {marginLeft: '180px'} }>
                    <Link to="/dashboard" id="active">Dashboard</Link>
                </div>
                <div className="links">
                    <Link to="/bidding">Bidding</Link>
                </div>
                <div className="links">
                    <Link to="/listing">Listing</Link>
                </div>
                <form className="search-form">
                    <input className='search-input' type='search' placeholder='Search' aria-label="Search" />
                    <button class="search-button" type="submit" style={{marginLeft: '20px'}}>Search</button>
                </form>
                <div className="links">
                    <Link to="/profile">My Profile</Link>
                </div>
            </nav>
            <div className="body-container">
            </div>
        </div> 
    );
};

export default DashboardPage;