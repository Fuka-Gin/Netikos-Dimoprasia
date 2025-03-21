import React from "react";
import './BiddingPage.css';
import './sortby.css';
import { Link } from 'react-router-dom';
import './sortby_select';

const BiddingPage = () => {
    return(
        <div>
            <nav className="navbar-section">
                <div className="brand">
                    <h2>Netikos Dimoprasía</h2>
                </div>
                <div className="links" style={ {marginLeft: '470px'} }>
                    <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className="links">
                    <Link to="/bidding" id="active">Bidding</Link>
                </div>
                <div className="links">
                    <Link to="/listing">Listing</Link>
                </div>
                
                <div className="links">
                    <Link to="/profile">My Profile</Link>
                </div>
            </nav>
            <div>
                <form className="search-form">
                    <input className='search-input' type='search' placeholder='Search' aria-label="Search" />
                    <div class="sortby-select" style={{width:'200px'}}>
                        <select>
                            <option value="0">Newest Listing First</option>
                            <option value="1">Oldest Listing First</option>
                            <option value="2">Alphabet Ascending</option>
                            <option value="3">Alphabet Descending</option>
                            <option value="4">Price Low-to-High</option>
                            <option value="5">Price High-to-Low</option>
                        </select>
                    </div>
                </form>
                <div className="sidebar-listing">
                    <div className="sidebar">
                        <h3>FILTERS</h3>
                        <div className="category">
                            <input type="checkbox"/><label className="category-name">House / Apartment</label>
                        </div>
                        <div className="category">
                            <input type="checkbox"/><label className="category-name">Land</label>
                        </div>
                        <div className="category">
                            <input type="checkbox"/><label className="category-name">Painting</label>
                        </div>
                        <div className="category">
                            <input type="checkbox"/><label className="category-name">Sports</label>
                        </div>
                        <div className="category">
                            <input type="checkbox"/><label className="category-name">Automobiles</label>
                        </div>
                    </div>
                    <div className="bidding-content">
                        <div className="auction-item"> 
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34ZNLXHYCkbVKSSWFVP6GMNwSSGGNA2T9gQ&s" alt="car1" />
                            </div>
                            <div className="item-description">
                                <h4 className="text">Category: Automobile</h4>
                                <h4 className="text">Make: </h4>
                                <h4 className="text">Model: </h4>
                                <h4 className="text">Year: </h4>
                                <h4 className="text">Mileage: </h4>
                            </div>
                            <button className="bidding-button">Bid</button>
                        </div>
                        <div className="auction-item">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLv0TlugU0BlGQVeP218rR5q_N12LEkmNTEA&s" alt="house" />
                            </div>
                            <div className="item-description">
                                <h4 className="text">Category: House</h4>
                                <h4 className="text">Make: </h4>
                                <h4 className="text">Model: </h4>
                                <h4 className="text">Year: </h4>
                                <h4 className="text">Mileage: </h4>
                            </div>
                            <button className="bidding-button">Bid</button>
                        </div>
                        <div className="auction-item">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FCmi0ugVSqjDFVs45Z4nY3vNVsi5RAk61Q&s" id="pic" alt="car1" />
                            </div>
                            <div className="item-description">
                                <h4 className="text">Category: </h4>
                                <h4 className="text">Make: </h4>
                                <h4 className="text">Model: </h4>
                                <h4 className="text">Year: </h4>
                                <h4 className="text">Mileage: </h4>
                            </div>
                            <button className="bidding-button">Bid</button>
                        </div>
                        <div className="auction-item">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34ZNLXHYCkbVKSSWFVP6GMNwSSGGNA2T9gQ&s" id="pic" alt="car1" />
                            </div>
                            <div className="item-description">
                                <h4 className="text">Category: </h4>
                                <h4 className="text">Make: </h4>
                                <h4 className="text">Model: </h4>
                                <h4 className="text">Year: </h4>
                                <h4 className="text">Mileage: </h4>
                            </div>
                            <button className="bidding-button">Bid</button>
                        </div>
                        <div className="auction-item">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34ZNLXHYCkbVKSSWFVP6GMNwSSGGNA2T9gQ&s" id="pic" alt="car1" />
                            </div>
                            <div className="item-description">
                                <h4 className="text">Category: </h4>
                                <h4 className="text">Make: </h4>
                                <h4 className="text">Model: </h4>
                                <h4 className="text">Year: </h4>
                                <h4 className="text">Mileage: </h4>
                            </div>
                            <button className="bidding-button">Bid</button>
                        </div>
                        <div className="auction-item">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34ZNLXHYCkbVKSSWFVP6GMNwSSGGNA2T9gQ&s" id="pic" alt="car1" />
                            </div>
                            <div className="item-description">
                                <h4 className="text">Category: </h4>
                                <h4 className="text">Make: </h4>
                                <h4 className="text">Model: </h4>
                                <h4 className="text">Year: </h4>
                                <h4 className="text">Mileage: </h4>
                            </div>
                            <button className="bidding-button">Bid</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default BiddingPage;