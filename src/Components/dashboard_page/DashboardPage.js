import React from 'react';
import './DashboardPage.css';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <h2 className='navbar-brand'>Netikos Dimoprasía</h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div class="nav-item">
                        <Link to="/profile">My Profile</Link>
                    </div>
                </div>
            </nav>
            <div className="sidebar">
                <Link to="/dashboard" className="active">Dashboard</Link> <br />
                <Link to="/bidding">Bidding</Link><br />
                <Link to="/listing">Listing</Link>
            </div>
            <div className="body-container">

            </div>
        </div>
    );
};

export default DashboardPage;