import React, {useState} from 'react';
import './AddItem.css';

const AddItem = () => {
  return (
    <div className="addItem">
        <div className='categoryType'>
            <label className='info-label' for="choice">Choose:</label>
            <select id="choice" className='info-input' onchange="showForm()">
                <option value="">-- Select --</option>
                <option value="0">House / Apartment</option>
                <option value="1">Automobiles</option>
                <option value="2">Paintings</option>
                <option value="3">Others</option>
            </select>
        </div>
        <form className="AddItemForm" id='house'>
            <h1 className='heading'>House Auction Form</h1>
            <h2 className='subHeading'>Basic Property detail:</h2>
            <div className='subHeading-content'>
                <div> {/*className='information'*/}
                    <label for="propertyType" className='info-label'>Property Type:</label>
                    <select name="propertyType" className='info-input'>
                        <option value="">-- Select --</option>
                        <option value="0">House</option>
                        <option value="1">Apartment</option>
                    </select>
                </div>
                <div> {/*className='information'*/}
                    <label for="propertyAddress" className='info-label'>Property Address:</label>
                    <input type="text" id="propertyAddress" name="propertyAddress" className='info-input' required />
                </div>
                <div> {/*className='information'*/}
                    <label for="landArea" className='info-label'>Land Area (sq.ft):</label>
                    <input type="text" id="landArea" name="landArea" required className='info-input'/>
                </div>
                <div> {/*className='information'*/}
                    <label className='info-label' for="BuiltUpArea">Built-up Area (sq.ft):</label>
                    <input type="number" id="BuiltUpArea" name="BuiltUpArea" className='info-input' required/>
                </div>
                <div> {/*className='information'*/}
                    <label className='info-label' for="floorCount">No of Floor:</label>
                    <input type='number' id='floorCount' name='floorCount' className='info-input' required />
                </div>
                <div> {/*className='information'*/}
                    <label for="roomCount" className='info-label'>No of Rooms:</label>
                    <input type='number' id='roomCount' name="roomCount" className='info-input' required />
                </div>
                <div> {/*className='information'*/}
                    <label for="builtYear" className='info-label'>Built Year:</label>
                    <input type='date' id='builtYear' name="builtYear" className='info-input' required />
                </div>
            </div>
            
            <h2 className='subHeading'>Legal & Ownership</h2>
            <div className='subHeading-content'>
                <div> {/*className='information'*/}
                    <label className='info-label' for="ownershipType">Property Type:</label>
                    <select id="ownershipType" name="ownershipType" className='info-input'>
                        <option value="">-- Select --</option>
                        <option value="freehold">Freehold</option>
                        <option value="leasehold">Leasehold</option>
                    </select>
                </div>
            </div>

            <h2 className='subHeading'>Auction Details</h2>
            <div className='subHeading-content'>
                <div> {/*className='information'*/}
                    <label className='info-label' for="bidPrice">Opening Bid:</label>
                    <input type="number" className='info-input' name="bidPrice" required />
                </div>
                <div> {/*className='information'*/}
                    <label for="reservePrice" className='info-label'>Reserve Price:</label>
                    <input type="number" className='info-input' name="reservePrice" required />
                </div>
                <div> {/*className='information'*/}
                    <label for="auctionDate" className='info-label'>Auction Date:</label>
                    <input type="date" className='info-input' name="auctionDate" required />
                </div>
                <div> {/*className='information'*/}
                    <label for="auctionTime" className='info-label'>Auction Time:</label>
                    <input type="time" name="auctionTime" className='info-input' required />
                </div>
                <div> {/*className='information'*/}
                    <label for="bidIncrementVal" className='info-label'>Bid Increment Value:</label>
                    <input type="number" name="bidIncrementVal" className='info-input' required />
                </div>
            </div>

            <h2 className='subHeading'>Additional Property Features</h2>
            <div className='subHeading-content'>
                <div> {/*className='information'*/}
                    <label for="parkingAvailability" className='info-label'>Parking Availability:</label>
                    <select className='info-input' name="parkingAvailability">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div> {/*className='information'*/}
                    <label for="amenities" className='info-label'>Amenities:</label>
                    <div>
                        <label><input type="checkbox" className='info-input' name="amenities[]" value="garden" /> Garden</label>
                        <label><input type="checkbox" className='info-input' name="amenities[]" value="swimming_pool" /> Swimming Pool</label>
                        <label><input type="checkbox" className='info-input' name="amenities[]" value="modular_kitchen" /> Modular Kitchen</label>
                        <label><input type="checkbox" className='info-input' name="amenities[]" value="solar_power" /> Solar Power</label>
                    </div>
                </div>
                <div> {/*className='information'*/}
                    <label for="nearbyFacility" className='info-label'>Nearby Facility:</label>
                    <div>
                        <label><input type="checkbox" className='info-input' name="nearbyFacility[]" value="schools" /> Schools </label>
                        <label><input type="checkbox" className='info-input' name="nearbyFacility[]" value="hospitals" /> Hospitals</label>
                        <label><input type="checkbox" className='info-input' name="nearbyFacility[]" value="shopping_centers" /> Shopping Centers</label>
                        <label><input type="checkbox" className='info-input' name="nearbyFacility[]" value="public_transport" /> Public Transport</label>
                    </div>
                </div>
            </div>

            <h2 className='subHeading'>Payment & Terms</h2>
            <div className='subHeading-content'>
                <div> {/*className='information'*/}
                    <label for="paymentMode" className='info-label'>Accepted Payment Modes:</label>
                    <div class="checkbox-group">
                        <label><input type="checkbox" className='info-input' name="paymentMode[]" value="cash" /> Cash </label>
                        <label><input type="checkbox" className='info-input' name="paymentMode[]" value="bank_transfer" /> Bank Transfer </label>
                        <label><input type="checkbox" className='info-input' name="paymentMode[]" value="loan" /> Loan </label>
                    </div>
                </div>
                <div> {/*className='information'*/}
                    <label for="deposit" className='info-label'>Deposit Requirement ($):</label>
                    <input type="number" className='info-input' name="deposit" required/>
                </div>
                <div> {/*className='information'*/}
                    <label for="possession_timeline" className='info-label'>Possession Timeline (days after auction):</label>
                    <input type="number" className='info-input' name="possession_timeline" required/>
                </div>
                <div> {/*className='information'*/}
                    <label className='info-label'>Who will bear Registration & Transfer Fees?</label>
                    <select name="fees_bearer" className='info-input'>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                        <option value="shared">Shared</option>
                    </select>
                </div>
            </div>
            <button type="submit">Submit Auction</button>
        </form>
    </div>
  );
};

export default AddItem;