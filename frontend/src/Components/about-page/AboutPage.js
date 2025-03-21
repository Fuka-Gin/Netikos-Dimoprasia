import React from "react";
import './AboutPage.css';
import { Link } from "react-router-dom";

const AboutPage = () => {
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
            <h2 id="header">About us</h2>
            <div className="content-section">
                <div className="content">
                    <h2 className="content-header">What is Netikos Dimoprasía?</h2>
                    <p className="content-body">Netikos Dimoprasía is a platform that provides various auction services such as Forward Auction, Reverse Auction, Dutch Auction, Japanese Auction, Yankee Auction, E-Tender, IT-Services, SCM, Logistic Management, Inventory Management, etc. It is a platform where buyers and sellers can interact with each other and make deals.</p>
                </div>
                <div className="content">
                    <h2 className="content-header">Can Netikos Dimoprasía be trusted?</h2>
                    <p className="content-body">Netikos Dimoprasía provides a platform where buyers and sellers can interact with each other and make deals. It provides various auction services such as Forward Auction, Reverse Auction, Dutch Auction, Japanese Auction, Yankee Auction, E-Tender, IT-Services, SCM, Logistic Management, Inventory Management, etc. It is a platform where buyers and sellers can interact with each other and make deals.</p>
                </div>
                <div className="content">
                    <h2 className="content-header">How to use Netikos Dimoprasía?</h2>
                    <p className="content-body">Netikos Dimoprasía is a platform that provides various auction services such as Forward Auction, Reverse Auction, Dutch Auction, Japanese Auction, Yankee Auction, E-Tender, IT-Services, SCM, Logistic Management, Inventory Management, etc. It is a platform where buyers and sellers can interact with each other and make deals.</p>
                </div>
                <div className="content">
                    <h2 className="content-header">Vision</h2>
                    <p className="content-body">After Establishing A Strong Foot At National Front, ‘We Aim To Build A Global Network; Thus, Providing A Reliable Online Platform To Auctioneers And Bidders From All Across The World. On Establishing A Secure Base, We Ensure To Manage All Sorts Auctioning Activities Be It Small Or Major. Our Main Objective ls Bringing Ease To Our Clients Such That Auctioning ls Not A Burden For Any Business Person And Bidding Is Not A Matter Of Risk For Anyone Across The Globe.</p>
                </div>
                <div className="services-section">
                    <h2 id="header">Our Services</h2>
                    <h2>Types of Auction</h2>
                    <ul>
                        <li><a href="#forward-auction">Forward Auction</a></li>
                        <li><a href="#reverse-auction">Reverse Auction</a></li>
                        <li><a href="#dutch-auction">Dutch Auction</a></li>
                        <li><a href="#japanese-auction">Japanese Auction</a></li>
                        <li><a href="#yankee-auction">Yankee Auction</a></li>
                        <li><a href="#e-tender">E-Tender</a></li>
                        <li><a href="#it-services">IT-Services</a></li>
                        <li><a href="#scm">SCM</a></li>
                        <li><a href="#logistic-management">Logistic Management</a></li>
                        <li><a href="#inventory-management">Inventory Management</a></li>
                    </ul>
                    <div className="subSection">
                        <h3 id="forward-auction">Forward Auction</h3>
                        <p>Forward Auction is a type of auction where the seller sells the product to the buyer. The buyer who bids the highest price wins the product.</p>
                        
                        <h3 id="reverse-auction">Reverse Auction</h3>
                        <p>Reverse Auction is a type of auction where the buyer buys the product from the seller. The seller who bids the lowest price wins the product.</p>
                        
                        <h3 id="dutch-auction">Dutch Auction</h3>
                        <p>Dutch Auction is a type of auction where the auctioneer begins with a high asking price which is lowered until some participant is willing to accept the auctioneer's price.</p>
                        
                        <h3 id="japanese-auction">Japanese Auction</h3>
                        <p>Japanese Auction is a type of auction where the auctioneer begins with a low asking price which is raised until some participant is willing to accept the auctioneer's price.</p>
                        
                        <h3 id="yankee-auction">Yankee Auction</h3>
                        <p>Yankee Auction is a type of auction where multiple units of an item are sold, and bidders can place bids on the number of units they want to buy.</p>
                        
                        <h3 id="e-tender">E-Tender</h3>
                        <p>E-Tender is a type of auction where the entire process of tendering is done electronically.</p>
                        
                        <h3 id="it-services">IT-Services</h3>
                        <p>IT-Services include various services related to information technology such as software development, maintenance, and support.</p>
                        
                        <h3 id="scm">SCM</h3>
                        <p>SCM stands for Supply Chain Management, which involves the management of the flow of goods and services.</p>
                        
                        <h3 id="logistic-management">Logistic Management</h3>
                        <p>Logistic Management involves the planning, implementation, and control of the movement and storage of goods, services, or information within a supply chain.</p>
                        
                        <h3 id="inventory-management">Inventory Management</h3>
                        <p>Inventory Management involves the supervision of non-capitalized assets (inventory) and stock items.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;