import React from "react";
import './ListingPage.css';
import { Link } from 'react-router-dom';
import { IoAddOutline } from "react-icons/io5";

const ListingPage = () => {
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
                    <Link to="/bidding" >Bidding</Link>
                </div>
                <div className="links">
                    <Link to="/listing" id="active">Listing</Link>
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
                            <option value="0">A - Z</option>
                            <option value="1">Z - A</option>
                            <option value="2">Price Low-to-High</option>
                            <option value="3">Price Low-to-High</option>
                        </select>
                    </div>
                </form>
                <div className="listing-content">
                    <Link className="add-item" to="/listing/add">Add<IoAddOutline style={{position: "relative", top: '-2px', fontSize: '30px'}} /></Link>
                    <div className="listing-item"> 
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
                    </div>
                </div>
                {/* <div className="listing-container">
                    <div className="listing-header">
                        <h2>Listing</h2>
                    </div>
                    <div className="listing-body">
                        <div className="listing-form">
                            <form>
                                <div className="form-group">
                                    <label>Product Name:</label>
                                    <input type="text" name="product-name" placeholder="Enter product name" />
                                </div>
                                <div className="form-group">
                                    <label>Product Description:</label>
                                    <textarea name="product-description" placeholder="Enter product description" />
                                </div>
                                <div className="form-group">
                                    <label>Product Price:</label>
                                    <input type="text" name="product-price" placeholder="Enter product price" />
                                </div>
                                <div className="form-group">
                                    <label>Product Quantity:</label>
                                    <input type="text" name="product-quantity" placeholder="Enter product quantity" />
                                </div>
                                <div className="form-group">
                                    <label>Product Image:</label>
                                    <input type="file" name="product-image" />
                                </div>
                                <div className="form-group">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> */}
            </div>
        </div> 
    );
};

export default ListingPage;