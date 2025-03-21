import React, {useState} from 'react';
import './AddItem.css';

const AddItem = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [artType, setArtType] = useState("painting");
    const [images, setImages] = useState([]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleArtTypeChange = (event) => {
        setArtType(event.target.value);
    };
    
    function toggleFeaturesBlock() {
        var vehicleType = document.getElementById("vehicleType").value;
        var featuresBlock = document.getElementById("featuresBlock");
        
        if (vehicleType === "motorcycle") {
            featuresBlock.style.display = "none";
        } else {
            featuresBlock.style.display = "block";
        }
    };

    let imageURL = [];
    const imageUpload = async(event) => {
        const files = event.target.files;

        for(let file of files){
            const imageData = new FormData();
            imageData.append("file", file);
            imageData.append("upload_preset", "Netikos_Dimoprasia");
            imageData.append("cloud_name", "duhjhnwbk");
            const res1 = await fetch("https://api.cloudinary.com/v1_1/duhjhnwbk/image/upload" ,{
                method: "POST",
                body: imageData
            });

            try{
                const uploadData = await res1.json();
                if(uploadData.secure_url){
                    imageURL.push(uploadData.secure_url);
                }
                else{
                    imageURL.push(uploadData.url)
                }
                console.log(imageURL);
            }catch(error){
                console.error("Error uploading image:", error);
            }
        }
    }

    const handleSubmit = async (e, formType) => {
        e.preventDefault();

        const itemId = `ITEM_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
        
        const fileInput = e.target.querySelector('input[name="images"]'); //Prevent add the last image in formData 
        if (fileInput) {
            fileInput.remove();
        }

        const formData = new FormData(e.target);

        formData.append("formType", formType);
        formData.append("itemId", itemId);

        const userId = localStorage.getItem("userId");
        if (!userId) {
            alert("User is not logged in. Please log in to continue.");
            return;
        }
        formData.append("userId", userId);
        formData.append("imageURLs", JSON.stringify(imageURL));

        try{
            const response = await fetch("http://localhost:5000/api/submit-form", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }      

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit form. Please try again.");
        } finally{
            if(fileInput) {
                e.target.appendChild(fileInput);
            }
        }
    };

    const HouseTypeForm = async(e) => {
        e.preventDefault();

        const houseFormData = new FormData();
        houseFormData.append("propertyType", e.target.propertyType.value);
        houseFormData.append("propertyAddress", e.target.propertyAddress.value);
        houseFormData.append("landArea", e.target.landArea.value);
        houseFormData.append("BuiltUpArea", e.target.BuiltUpArea.value);
        houseFormData.append("floorCount", e.target.floorCount.value);
        houseFormData.append("roomCount", e.target.roomCount.value);
        houseFormData.append("builtYear", e.target.builtYear.value);
        houseFormData.append("ownershipType", e.target.ownershipType.value);
        houseFormData.append("bidPrice", e.target.bidPrice.value);
        houseFormData.append("reservePrice", e.target.reservePrice.value);
        houseFormData.append("auctionDate", e.target.auctionDate.value);
        houseFormData.append("auctionTime", e.target.auctionTime.value);
        houseFormData.append("bidIncrementVal", e.target.bidIncrementVal.value)
        houseFormData.append("parkingAvailability", e.target.parkingAvailability.value)
        houseFormData.append("amenities", e.target['amenities[]'].value)
        houseFormData.append("nearbyFacility", Array.from(e.target['nearbyFacility[]']))
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);
        houseFormData.append("paymentMode", Array.from(e.target["paymentMode[]"]))
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);
        houseFormData.append("deposit", e.target.deposit.value);
        houseFormData.append("possession_timeline", e.target.possession_timeline.value);
        houseFormData.append("fees_bearer", e.target.fees_bearer.value);
        for (let i = 0; i < images.length; i++) {
            houseFormData.append("images", images[i]);
        }

        await fetch("api/upload-to-mega", {
            method: "POST",
            body: houseFormData,
        });
    };
    
    const AutoMobileTypeForm = async(e) => {
        e.preventDefault();

        const automobileFormData = new FormData();
        automobileFormData.append("vehicleType", e.target.vehicleType.value);
        automobileFormData.append("brand", e.target.brand.value);
        automobileFormData.append("model", e.target.model.value);
        automobileFormData.append("year", e.target.year.value);
        automobileFormData.append("mileage", e.target.mileage.value);
        automobileFormData.append("ownershipType", e.target.ownershipType.value);
        automobileFormData.append("accidentHistory", e.target.accidentHistory.value);
        automobileFormData.append("bidPrice", e.target.bidPrice.value);
        automobileFormData.append("reservePrice", e.target.reservePrice.value);
        automobileFormData.append("auctionDate", e.target.auctionDate.value);
        automobileFormData.append("auctionTime", e.target.auctionTime.value);
        automobileFormData.append("bidIncrementVal", e.target.bidIncrementVal.value);
        automobileFormData.append("fuelType", e.target.fuelType?.value || "");
        automobileFormData.append("transmission", e.target.transmission?.value || "");
        automobileFormData.append("features", Array.fro(e.target["features[]"]))
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value);
        automobileFormData.append("paymentMode", Array.fro(e.target["paymentMode[]"]))
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value);
        automobileFormData.append("deposit", e.target.deposit.value);
        automobileFormData.append("possession_timeline", e.target.possession_timeline.value);
        for (let i = 0; i < images.length; i++) {
            automobileFormData.append("images", images[i]);
        }

        await fetch("api/upload-to-mega", {
            method: "POST",
            body: automobileFormData,
        });
    
    };

    const ArtTypeForm = async(e) => {
        e.preventDefault();

        const artFormData = new FormData();
        artFormData.append("artType", e.target.artType.value);
        artFormData.append("title", e.target.title.value);
        artFormData.append("artistName", e.target.artistName.value);
        artFormData.append("yearCreated", e.target.yearCreated.value);
        artFormData.append("medium", e.target.medium.value);
            artFormData.append("dimensions", e.target.dimensions.value);
            artFormData.append("openingBid", e.target.openingBid.value);
            artFormData.append("reservePrice", e.target.reservePrice.value);
            artFormData.append("auctionDate", e.target.auctionDate.value);
            artFormData.append("auctionTime", e.target.auctionTime.value);
            artFormData.append("bidIncrementVal", e.target.bidIncrementVal.value);
            artFormData.append("artStyle", e.target.artStyle.value);
            artFormData.append("certificateAuth", e.target.certificateAuth.value);
            for (let i = 0; i < images.length; i++) {
                artFormData.append("images", images[i]);
            }

        await fetch("api/upload-to-mega", {
            method: "POST",
            body: artFormData,
        });
    };

    const OthersTypeForm = async(e) => {
        e.preventDefault();

        const othersFormData = new FormData();
        othersFormData.append("itemCategory", e.target.itemCategory.value);
        othersFormData.append("itemName", e.target.itemName.value);
        othersFormData.append("itemDescription", e.target.itemDescription.value);
        othersFormData.append("yearMade", e.target.yearMade.value);
        othersFormData.append("condition", e.target.condition.value);
        othersFormData.append("bidPrice", e.target.bidPrice.value);
        othersFormData.append("reservePrice", e.target.reservePrice.value);
        othersFormData.append("auctionDate", e.target.auctionDate.value);
        othersFormData.append("auctionTime", e.target.auctionTime.value);
        othersFormData.append("bidIncrementVal", e.target.bidIncrementVal.value);
        othersFormData.append("certification", e.target.certification.value);
        othersFormData.append("features", Array.fro(e.target["features[]"]))
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value);
        othersFormData.append("paymentMode", Array.fro(e.target["paymentMode[]"]))
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value);
        othersFormData.append("deposit", e.target.deposit.value);
        othersFormData.append("shippingResponsibility", e.target.shippingResponsibility.value);
        for (let i = 0; i < images.length; i++) {
            othersFormData.append("images", images[i]);
        }
       
        await fetch("api/submit-form", {
            method: "POST",
            body: othersFormData,
        });
    };

    const renderForm = () => {
        switch(selectedCategory){
            case 'house':
                return(
                    <form className="AddItemForm" id='house' onSubmit={(e) => handleSubmit(e, "house_auction")}>
                        <h1 className='heading'>House Auction Form</h1>
                        <h2 className='subHeading'>Basic Property detail:</h2>
                        <div className='subHeading-content'>
                            <div> {/*className='information'*/}
                                <label htmlFor="propertyType" className='info-label'>Property Type:</label>
                                <select name="propertyType" className='info-input'>
                                    <option value="">-- Select --</option>
                                    <option value="0">House</option>
                                    <option value="1">Apartment</option>
                                </select>
                            </div>
                            <div> {/*className='information'*/}
                                <label htmlFor="propertyAddress" className='info-label'>Property Address:</label>
                                <input type="text" id="propertyAddress" name="propertyAddress" className='info-input' required />
                            </div>
                            <div> {/*className='information'*/}
                                <label htmlFor="landArea" className='info-label'>Land Area (sq.ft):</label>
                                <input type="text" id="landArea" name="landArea" required className='info-input'/>
                            </div>
                            <div> {/*className='information'*/}
                                <label className='info-label' htmlFor="BuiltUpArea">Built-up Area (sq.ft):</label>
                                <input type="number" id="BuiltUpArea" name="BuiltUpArea" className='info-input' required/>
                            </div>
                            <div> {/*className='information'*/}
                                <label className='info-label' htmlFor="floorCount">No of Floor:</label>
                                <input type='number' id='floorCount' name='floorCount' className='info-input' required />
                            </div>
                            <div> {/*className='information'*/}
                                <label htmlFor="roomCount" className='info-label'>No of Rooms:</label>
                                <input type='number' id='roomCount' name="roomCount" className='info-input' required />
                            </div>
                            <div> {/*className='information'*/}
                                <label htmlFor="builtYear" className='info-label'>Built Year:</label>
                                <input type='date' id='builtYear' name="builtYear" className='info-input' required />
                            </div>
                        </div>
                        
                        <h2 className='subHeading'>Legal & Ownership</h2>
                        <div className='subHeading-content'>
                            <div> {/*className='information'*/}
                                <label className='info-label' htmlFor="ownershipType">Ownership Type:</label>
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
                                <label className='info-label' htmlFor="bidPrice">Opening Bid:</label>
                                <input type="number" className='info-input' name="bidPrice" required />
                            </div>
                            <div> {/*className='information'*/}
                                <label htmlFor="reservePrice" className='info-label'>Reserve Price:</label>
                                <input type="number" className='info-input' name="reservePrice" required />
                            </div>
                            <div> {/*className='information'*/}
                                <label htmlFor="auctionDate" className='info-label'>Auction Date:</label>
                                <input type="date" className='info-input' name="auctionDate" required />
                            </div>
                            <div> {/*className='information'*/}
                                <label htmlFor="auctionTime" className='info-label'>Auction Time:</label>
                                <input type="time" name="auctionTime" className='info-input' required />
                            </div>
                            <div> {/*className='information'*/}
                                <label htmlFor="bidIncrementVal" className='info-label'>Bid Increment Value:</label>
                                <input type="number" name="bidIncrementVal" className='info-input' required />
                            </div>
                        </div>

                        <h2 className='subHeading'>Additional Property Features</h2>
                        <div className='subHeading-content'>
                            <div> {/*className='information'*/}
                                <label htmlFor="parkingAvailability" className='info-label'>Parking Availability:</label>
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
                                <label htmlFor="nearbyFacility" className='info-label'>Nearby Facility:</label>
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
                                <label htmlFor="paymentMode" className='info-label'>Accepted Payment Modes:</label>
                                <div class="checkbox-group">
                                    <label><input type="checkbox" className='info-input' name="paymentMode[]" value="cash" /> Cash </label>
                                    <label><input type="checkbox" className='info-input' name="paymentMode[]" value="bank_transfer" /> Bank Transfer </label>
                                    <label><input type="checkbox" className='info-input' name="paymentMode[]" value="loan" /> Loan </label>
                                </div>
                            </div>
                            <div> {/*className='information'*/}
                                <label htmlFor="deposit" className='info-label'>Deposit Requirement ($):</label>
                                <input type="number" className='info-input' name="deposit" required/>
                            </div>
                            <div> {/*className='information'*/}
                                <label htmlFor="possession_timeline" className='info-label'>Possession Timeline (days after auction):</label>
                                <input type="number" className='info-input' name="possession_timeline" required/>
                            </div>
                            <div> {/*className='information'*/}
                                <label className='info-label' htmlFor='fees_bearer'>Who will bear Registration & Transfer Fees?</label>
                                <select name="fees_bearer" className='info-input'>
                                    <option value="buyer">Buyer</option>
                                    <option value="seller">Seller</option>
                                    <option value="shared">Shared</option>
                                </select>
                            </div>
                        </div>
                        <h2 className='subHeading'>Upload House / Apartment Images</h2>
                        <div className='subHeading-content'>
                            <div>
                                <label className='info-label' htmlFor='images' >Upload Image:</label>
                                <input type="file" name="images" className='info-input' accept="image/*" onChange={imageUpload} />
                                <div id="imagePreview"></div>
                            </div>
                        </div>
                        <button type="submit">Submit Auction</button>
                    </form>
                );

            case 'automobile':
                return(
                    <form className="AddItemForm" id='automobile' onSubmit={(e) => handleSubmit(e, "automobile_auction")}>
                        <h1 className='heading'>Automobile Auction Form</h1>
                        
                        <h2 className='subHeading'>Basic Vehicle Details:</h2>
                        <div className='subHeading-content'>
                            <div>
                                <label for="vehicleType" className='info-label'>Vehicle Type:</label>
                                <select name="vehicleType" className='info-input' id="vehicleType" onChange={toggleFeaturesBlock}>
                                    <option value="">-- Select --</option>
                                    <option value="car">Car</option>
                                    <option value="motorcycle">Motorcycle</option>
                                    <option value="truck">Truck</option>
                                </select>
                            </div>
                            <div>
                                <label className='info-label'>Brand:</label>
                                <input type="text" name="brand" className='info-input' required />
                            </div>
                            <div>
                                <label className='info-label'>Model:</label>
                                <input type="text" name="model" className='info-input' required />
                            </div>
                            <div>
                                <label className='info-label'>Year of Manufacture:</label>
                                <input type="number" name="year" className='info-input' required />
                            </div>
                            <div>
                                <label className='info-label'>Mileage (km):</label>
                                <input type="number" name="mileage" className='info-input' required />
                            </div>
                        </div>
                        
                        <h2 className='subHeading'>Ownership & Condition</h2>
                        <div className='subHeading-content'>
                            <div>
                                <label for="ownershipType" className='info-label'>Ownership Type:</label>
                                <select name="ownershipType" className='info-input'>
                                    <option value="">-- Select --</option>
                                    <option value="first_owner">First Owner</option>
                                    <option value="second_owner">Second Owner</option>
                                    <option value="third_owner">Third Owner or More</option>
                                </select>
                            </div>
                            <div>
                                <label className='info-label'>Accident History:</label>
                                <select name="accidentHistory" className='info-input'>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>
                        </div>
                        
                        <h2 className='subHeading'>Auction Details</h2>
                        <div className='subHeading-content'>
                            <div>
                                <label className='info-label'>Opening Bid:</label>
                                <input type="number" className='info-input' name="bidPrice" required />
                            </div>
                            <div>
                                <label className='info-label'>Reserve Price:</label>
                                <input type="number" className='info-input' name="reservePrice" required />
                            </div>
                            <div>
                                <label className='info-label'>Auction Date:</label>
                                <input type="date" className='info-input' name="auctionDate" required />
                            </div>
                            <div>
                                <label className='info-label'>Auction Time:</label>
                                <input type="time" name="auctionTime" className='info-input' required />
                            </div>
                            <div>
                                <label className='info-label'>Bid Increment Value:</label>
                                <input type="number" name="bidIncrementVal" className='info-input' required />
                            </div>
                        </div>
                        
                        <h2 className='subHeading'>Additional Vehicle Features</h2>
                        <div className='subHeading-content' id="featuresBlock" style={{display: 'none'}}>
                            <div>
                                <label className='info-label'>Fuel Type:</label>
                                <select name="fuelType" className='info-input'>
                                    <option value="petrol">Petrol</option>
                                    <option value="diesel">Diesel</option>
                                    <option value="electric">Electric</option>
                                    <option value="hybrid">Hybrid</option>
                                </select>
                            </div>
                            <div>
                                <label className='info-label'>Transmission:</label>
                                <select name="transmission" className='info-input'>
                                    <option value="manual">Manual</option>
                                    <option value="automatic">Automatic</option>
                                </select>
                            </div>
                            <div>
                                <label className='info-label'>Vehicle Features:</label>
                                <div>
                                    <label><input type="checkbox" name="features[]" value="air_conditioning" /> Air Conditioning</label>
                                    <label><input type="checkbox" name="features[]" value="sunroof" /> Sunroof</label>
                                    <label><input type="checkbox" name="features[]" value="gps" /> GPS Navigation</label>
                                    <label><input type="checkbox" name="features[]" value="leather_seats" /> Leather Seats</label>
                                </div>
                            </div>
                        </div>
                        
                        <h2 className='subHeading'>Payment & Terms</h2>
                        <div className='subHeading-content'>
                            <div>
                                <label className='info-label'>Accepted Payment Modes:</label>
                                <div class="checkbox-group">
                                    <label><input type="checkbox" name="paymentMode[]" value="cash" /> Cash </label>
                                    <label><input type="checkbox" name="paymentMode[]" value="bank_transfer" /> Bank Transfer </label>
                                    <label><input type="checkbox" name="paymentMode[]" value="loan" /> Loan </label>
                                </div>
                            </div>
                            <div>
                                <label className='info-label'>Deposit Requirement ($):</label>
                                <input type="number" className='info-input' name="deposit" required/>
                            </div>
                            <div>
                                <label className='info-label'>Possession Timeline (days after auction):</label>
                                <input type="number" className='info-input' name="possession_timeline" required/>
                            </div>
                        </div>

                        <h2 className="subHeading">Upload Vehicle Image</h2>
                        <div className="subHeading-content">
                            <div>
                            <label className="info-label" htmlFor='images'>Upload Image:</label>
                            <input type="file" name="images" className="info-input" accept="image/*" multiple onChange={imageUpload} required />
                            </div>
                        </div>
                        
                        <button type="submit">Submit Auction</button>
                    </form>
                );

            case 'art':
                return(
                    <form className="AddItemForm" id="art" onSubmit={(e) => handleSubmit(e, "art_auction")}>
                        <h1 className="heading">Art Auction Form</h1>

                        <h2 className="subHeading">Select Artwork Type</h2>
                        <div className="subHeading-content">
                            <label className="info-label">Artwork Type:</label>
                            <select id="artType" name="artType" className="info-input" onChange={handleArtTypeChange}>
                            <option value="painting">Painting</option>
                            <option value="sculpture">Sculpture</option>
                            <option value="photograph">Photograph</option>
                            <option value="collage">Collage</option>
                            <option value="fabric">Fabric Work</option>
                            <option value="mixedMedia">Mixed Media Art</option>
                            </select>
                        </div>

                        <h2 className="subHeading">Basic Artwork Details</h2>
                        <div className="subHeading-content">
                            <div>
                            <label htmlFor="title" className="info-label">Title:</label>
                            <input type="text" id="title" name="title" className="info-input" required />
                            </div>
                            <div>
                            <label htmlFor="artistName" className="info-label">Artist Name:</label>
                            <input type="text" id="artistName" name="artistName" className="info-input" required />
                            </div>
                            <div>
                            <label htmlFor="yearCreated" className="info-label">Year Created:</label>
                            <input type="number" id="yearCreated" name="yearCreated" className="info-input" required />
                            </div>
                            <div>
                            <label htmlFor="medium" className="info-label">
                                {artType === "sculpture" ? "Material Used" : "Medium Used"}:
                            </label>
                            <input type="text" id="medium" name="medium" className="info-input" required />
                            </div>
                            <div>
                            <label htmlFor="dimensions" className="info-label">
                                {artType === "sculpture" ? "Size (inches)" : "Dimensions (inches)"}:
                            </label>
                            <input type="text" id="dimensions" name="dimensions" className="info-input" required />
                            </div>
                        </div>

                        <h2 className="subHeading">Auction Details</h2>
                        <div className="subHeading-content">
                            <div>
                            <label htmlFor="openingBid" className="info-label">Opening Bid ($):</label>
                            <input type="number" id="openingBid" name="openingBid" className="info-input" required />
                            </div>
                            <div>
                            <label htmlFor="reservePrice" className="info-label">Reserve Price ($):</label>
                            <input type="number" id="reservePrice" name="reservePrice" className="info-input" required />
                            </div>
                            <div>
                            <label htmlFor="auctionDate" className="info-label">Auction Date:</label>
                            <input type="date" id="auctionDate" name="auctionDate" className="info-input" required />
                            </div>
                            <div>
                            <label htmlFor="auctionTime" className="info-label">Auction Time:</label>
                            <input type="time" id="auctionTime" name="auctionTime" className="info-input" required />
                            </div>
                            <div>
                            <label htmlFor="bidIncrementVal" className="info-label">Bid Increment Value ($):</label>
                            <input type="number" id="bidIncrementVal" name="bidIncrementVal" className="info-input" required />
                            </div>
                        </div>

                        <h2 className="subHeading">Additional Details</h2>
                        <div className="subHeading-content">
                            <div>
                            <label htmlFor="artStyle" className="info-label">Artwork Style:</label>
                            <select id="artStyle" name="artStyle" className="info-input">
                                <option value="abstract">Abstract</option>
                                <option value="realism">Realism</option>
                                <option value="impressionism">Impressionism</option>
                                <option value="modern">Modern</option>
                                <option value="other">Other</option>
                            </select>
                            </div>
                            <div>
                            <label htmlFor="certificateAuth" className="info-label">Certificate of Authenticity:</label>
                            <select id="certificateAuth" name="certificateAuth" className="info-input">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            </div>
                        </div>

                        <h2 className="subHeading">Upload Artwork Image</h2>
                        <div className="subHeading-content">
                            <div>
                            <label className="info-label" htmlFor='images'>Upload Image:</label>
                            <input type="file" name="images" className="info-input" accept="image/*" multiple onChange={imageUpload} required />
                            </div>
                        </div>

                        <button type="submit">Submit Auction</button>
                    </form>
                );

            case 'others':
                return(
                    <form className="AddItemForm" id="others" onSubmit={(e) => handleSubmit(e, "others_auction")}>
                        <h1 className="heading">Auction Item Form</h1>

                        <h2 className="subHeading">Basic Item Details</h2>
                        <div className="subHeading-content">
                            <div>
                                <label className="info-label" htmlFor="itemCategory">Item Category:</label>
                                <select name="itemCategory" className="info-input" required>
                                    <option value="">-- Select --</option>
                                    <option value="antiques">Antiques</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="collectibles">Collectibles</option>
                                </select>
                            </div>
                            <div>
                                <label className="info-label" htmlFor="itemName">Item Name:</label>
                                <input type="text" id="itemName" name="itemName" className="info-input" required />
                            </div>
                            <div>
                                <label className="info-label" htmlFor="itemDescription">Description:</label>
                                <textarea id="itemDescription" name="itemDescription" className="info-input" required></textarea>
                            </div>
                            <div>
                                <label className="info-label" htmlFor="yearMade">Year Made (if applicable):</label>
                                <input type="number" name="yearMade" className="info-input" />
                            </div>
                            <div>
                                <label className="info-label" htmlFor="condition">Condition:</label>
                                <select name="condition" className="info-input" required>
                                    <option value="">-- Select --</option>
                                    <option value="new">New</option>
                                    <option value="used">Used</option>
                                    <option value="antique">Antique</option>
                                    <option value="refurbished">Refurbished</option>
                                </select>
                            </div>
                        </div>

                        <h2 className="subHeading">Auction Details</h2>
                        <div className="subHeading-content">
                            <div>
                                <label className="info-label" htmlFor="startingBid">Starting Bid ($):</label>
                                <input type="number" name="startingBid" className="info-input" required />
                            </div>
                            <div>
                                <label className="info-label" htmlFor="reservePrice">Reserve Price ($):</label>
                                <input type="number" name="reservePrice" className="info-input" required />
                            </div>
                            <div>
                                <label className="info-label" htmlFor="auctionDate">Auction Date:</label>
                                <input type="date" name="auctionDate" className="info-input" required />
                            </div>
                            <div>
                                <label className="info-label" htmlFor="auctionTime">Auction Time:</label>
                                <input type="time" name="auctionTime" className="info-input" required />
                            </div>
                            <div>
                                <label className="info-label" htmlFor="bidIncrement">Bid Increment ($):</label>
                                <input type="number" name="bidIncrement" className="info-input" required />
                            </div>
                        </div>

                        <h2 className="subHeading">Additional Features</h2>
                        <div className="subHeading-content">
                            <div>
                                <label className="info-label" htmlFor="certification">Certification Available:</label>
                                <select name="certification" className="info-input">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div>
                                <label className="info-label" htmlFor='features'>Notable Features:</label>
                                <div>
                                    <label><input type="checkbox" name="features[]" value="signed" /> Signed by Artist/Owner</label>
                                    <label><input type="checkbox" name="features[]" value="limited_edition" /> Limited Edition</label>
                                    <label><input type="checkbox" name="features[]" value="historical_value" /> Historical Value</label>
                                    <label><input type="checkbox" name="features[]" value="restored" /> Professionally Restored</label>
                                </div>
                            </div>
                        </div>

                        <h2 className="subHeading">Payment & Terms</h2>
                        <div className="subHeading-content">
                            <div>
                                <label className="info-label" htmlFor="paymentMode">Accepted Payment Modes:</label>
                                <div className="checkbox-group">
                                    <label><input type="checkbox" name="paymentMode[]" value="cash" /> Cash</label>
                                    <label><input type="checkbox" name="paymentMode[]" value="bank_transfer" /> Bank Transfer</label>
                                    <label><input type="checkbox" name="paymentMode[]" value="credit_card" /> Credit Card</label>
                                </div>
                            </div>
                            <div>
                                <label className="info-label" htmlFor="deposit">Deposit Requirement ($):</label>
                                <input type="number" name="deposit" className="info-input" required />
                            </div>
                            <div>
                                <label className="info-label" htmlFor="pickupTimeline">Pickup Timeline (days after auction):</label>
                                <input type="number" name="pickupTimeline" className="info-input" required />
                            </div>
                            <div>
                                <label className="info-label" htmlFor='shippingResponsibility'>Shipping Responsibility:</label>
                                <select name="shippingResponsibility" className="info-input">
                                    <option value="buyer">Buyer</option>
                                    <option value="seller">Seller</option>
                                    <option value="shared">Shared</option>
                                </select>
                            </div>
                        </div>

                        <h2 className="subHeading">Upload Item Images</h2>
                        <div className="subHeading-content">
                            <div>
                                <label className="info-label" htmlFor='images'>Upload Images:</label>
                                <input type="file" name="images" className="info-input" accept="image/*" multiple onChange={imageUpload} />
                                <div id="imagePreview"></div>
                            </div>
                        </div>

                        <button type="submit">Submit Auction</button>
                    </form>
                );

        }
    };

  return ( 
    <div className="addItem">
        <div className='categoryType'>
            <label className='info-label' for="choice">Choose:</label>
            <select id="choice" className='info-input' value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">-- Select --</option>
                <option value="house">House / Apartment</option>
                <option value="automobile">Automobiles</option>
                <option value="art">Art</option>
                <option value="others">Others</option>
            </select>
        </div>
        {renderForm()}
    </div>
  );
};

export default AddItem;