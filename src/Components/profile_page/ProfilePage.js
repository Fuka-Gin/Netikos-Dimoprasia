import React from 'react';
import './ProfilePage.css';
import { Link } from 'react-router-dom';
import { FaUser, FaMobile } from 'react-icons/fa';
import { SiMaildotru } from "react-icons/si"; 

const ProfilePage = () => {
    return(
        <div>
            <nav className="navbar-section">
                <div className="brand">
                    <h2>Netikos Dimoprasía</h2>
                </div>
                <div className="links" style={ {marginLeft: '300px'} }>
                    <Link to="/dashboard" >Dashboard</Link>
                </div>
                <div className="links">
                    <Link to="/bidding">Bidding</Link>
                </div>
                <form className="search-form">
                    <input className='search-input' type='search' placeholder='Search' aria-label="Search" />
                    <button class="search-button" type="submit" style={{marginLeft: '20px'}}>Search</button>
                </form>
                <div className="links">
                    <Link to="/profile" id="active">My Profile</Link>
                </div>
            </nav>
            <div className="body-container">
                <form className='profile-form'>
                    <h1 style={{padding: '20px'}}>Personal Information</h1>
                    <div className='personal-info'>
                        <div style={{marginLeft: '20px'}}>
                            <div className='label-box'>
                                <label forName="uname">Name:</label>
                            </div>
                            <div className="input-box">
                                <input type="text" id="uname" name="uname" placeholder="Enter your name" disabled/> {/* onChange={(e) => setUsername(e.target.value)} */}
                                <span><FaUser className='icon'/></span>                           
                            </div>
                        </div>
                    
                        <div style={{marginLeft: '200px'}}>
                            <div className='label-box'>
                                <label forName="umail">Email:</label>
                            </div>
                            <div className="input-box"> {/*{`input-box ${mailVal ? '' : 'invalid'}`} */}
                                <input type="text" id="umail" name="umail" placeholder="Enter your mail id" disabled/>
                                <span><SiMaildotru className='icon'/></span>
                                {/*value={email} onChange={handleEmail} onBlur={EmailBlur} required*/}
                                {/* { emailTouch && !mailVal && <p className='error-message'>Please enter a valid email address</p>} */}
                            </div>
                        </div>
                    
                        <div style={{marginLeft: '20px'}}>
                            <div className='label-box'>
                                <label forName="uname">Mobile No:</label>
                            </div>
                            <div className="input-box">
                                <input type="text" id="uname" name="uname" placeholder="Enter your name" disabled/> {/* onChange={(e) => setUsername(e.target.value)} */}
                                <span><FaMobile className='icon'/></span>                           
                            </div>
                        </div>
                        
                        <div style={{marginLeft: '200px'}}>
                            <div className='label-box'>
                                <label forName="uaadhaar">Aadhaar No:</label>
                            </div>
                            <div className="input-box">
                                <input type="text" id="uaadhaar" name="uaadhaar" placeholder="Enter your Aadhaar No" /> {/* onChange={(e) => setUsername(e.target.value)} */}
                                <span><FaUser className='icon'/></span>                           
                            </div>
                        </div>
                        
                        <div style={{marginLeft: '20px'}}>
                            <div className='label-box'>
                                <label forName="upancard">PAN Card No:</label>
                            </div>
                            <div className="input-box">
                                <input type="text" id="upancard" name="upancard" placeholder="Enter your PAN Card No" /> {/* onChange={(e) => setUsername(e.target.value)} */}
                                <span><FaUser className='icon'/></span>                           
                            </div>
                        </div>

                        <div style={{marginLeft: '200px'}}>
                            <div className='label-box'>
                                <label forName="address1">Flat/House No & Name:</label>
                            </div>
                            <div className="input-box">
                                <input type="text" id="address1" name="address1" placeholder="Enter your 1st line of address" /> {/* onChange={(e) => setUsername(e.target.value)} */}
                                <span><FaMobile className='icon'/></span>                           
                            </div>
                        </div>
                        
                        <div style={{marginLeft: '20px'}}>
                            <div className='label-box'>
                                <label forName="address2">Street/Lane:</label>
                            </div>
                            <div className="input-box">
                                <input type="text" id="address2" name="address2" placeholder="Enter your 2nd line of address" /> {/* onChange={(e) => setUsername(e.target.value)} */}
                                <span><FaUser className='icon'/></span>                           
                            </div>
                        </div>

                        <div style={{marginLeft: '200px'}}>
                            <div className='label-box'>
                                <label forName="address3">Address Line 3:</label>
                            </div>
                            <div className="input-box">
                                <input type="text" id="address3" name="address3" placeholder="Enter your 3rd line of address" /> {/* onChange={(e) => setUsername(e.target.value)} */}
                                <span><FaMobile className='icon'/></span>                           
                            </div>
                        </div>
                        
                        <div style={{marginLeft: '20px'}}>
                            <div className='label-box'>
                                <label forName="pincode">Pincode:</label>
                            </div>
                            <div className="input-box">
                                <input type="text" id="pincode" name="pincode" placeholder="Enter your pincode" /> {/* onChange={(e) => setUsername(e.target.value)} */}
                                <span><FaUser className='icon'/></span>
                            </div>
                        </div>
                        
                        <div style={{marginLeft: '200px'}}>
                            <div className='label-box'>
                                <label forName="district">District:</label>
                            </div>
                            <div className="input-box">
                                <input type="text" id="district" name="district" placeholder="Which district you are from ?" /> {/* onChange={(e) => setUsername(e.target.value)} */}
                                <span><FaMobile className='icon'/></span>                           
                            </div>
                        </div>
                        
                        <div style={{marginLeft: '20px'}}>
                            <div className='label-box'>
                                <label forName="state">State:</label>
                            </div>
                            <div className="input-box">
                                <input type="text" id="state" name="state" placeholder="Which state you are from ?" /> {/* onChange={(e) => setUsername(e.target.value)} */}
                                <span><FaUser className='icon'/></span>
                            </div>
                        </div>
                        
                        <div style={{marginLeft: '200px'}}>
                            <div className='label-box'>
                                <label forName="country">Country:</label>
                            </div>
                            <div className="input-box">
                                <input type="text" id="country" name="country" placeholder="Which country you are ?" /> {/* onChange={(e) => setUsername(e.target.value)} */}
                                <span><FaUser className='icon'/></span>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Update" className='update-button' style={{marginLeft: '20px'}}/>
                </form>
            </div>
        </div> 
    );
};

export default ProfilePage;