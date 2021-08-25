import React from "react";
import "../../../App.css";
import "./businesscard.css"


function BusinessCard() {
    return (
        <div>  
            <h1 className="prods">
                Products
            </h1>

            <div id='prod-page'>
                <div id='img-div'>
                    <h2 id='img-header'>Product Details</h2>
                    <img id='card-img' src='./../images/business-cards.png' ></img>
                </div>

                <form id='details'>
                    <h2 id='prod-name'>Business Cards</h2>
                    <div id='form-dis'>
                    <div id='left'>
                        <div class="form-con">
                            <label><strong>Size</strong></label> <br></br>
                            <select id="size" name="size" required>
                                <option disabled selected value>Select an option</option>
                                <option value="3.5in">3.5 in x 2 in</option>
                                <option value="foldover">4 in x 3.5 in Foldover</option>
                            </select>
                        </div>
                        <div class="form-con">
                            <label><strong>Sided</strong></label> <br></br>
                            <select id="sided" name="sided" required>
                                <option disabled selected value>Select an option</option>
                                <option value="1-sided">1-sided</option>
                                <option value="2-sided">2 sided</option>
                            </select>
                        </div>
                        <div class="form-con">
                            <label> <strong>Custom Size</strong> <br></br>
                                <input id='custom' type='text'></input>
                            </label>
                        </div>
                    </div>
                    <div id='right'>
                        <div class="form-con">
                            <label><strong>Color</strong></label> <br></br>
                            <select id="color" name="color" required>
                                <option disabled selected value>Select an option</option>
                                <option value="Black-ink">Black Ink</option>
                                <option value="1pms">1 PMS</option>
                                <option value="1pms+black">1 PMS + Black</option>
                                <option value="2pms">2 PMS</option>
                                <option value="2pms+black">2 PMS + Black</option>
                                <option value="4pms">4 PMS</option>
                            </select>
                        </div>
                        <div class="form-con">
                            <label><strong>Paper Stock</strong></label> <br></br>
                            <select id="paper-stock" name="paper-stock" required>
                                <option disabled selected value>Select an option</option>
                                <option value="uncoated">100# uncoated cover</option>
                                <option value="gloss">100# gloss cover</option>
                            </select>
                        </div>
                        <div class="form-con">
                            <label> <strong>Upload file</strong> <br></br>
                                <input type="file" id="myFile" name="filename"></input>
                            </label>
                        </div>
                    </div>
                    </div>
                    <label><strong>Special Instructions</strong> <br></br>
                        <input id='special' type='text' placeholder='Special Instructions...'></input>
                    </label> <br></br>
                    <label><strong>QTY</strong></label> 
                    <input id="quant" type="number" min='1' placeholder='1'/>
                    <button id='quote' type="submit">GET A QUOTE</button>
                </form>
            </div>
        </div>
    );
}

export default BusinessCard;