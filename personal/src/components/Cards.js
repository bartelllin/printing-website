import React from 'react'
import CardItem from './CardItem'
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h3>Welcome to</h3>
            <h1>California Quality Printings</h1>
            <p><strong>California Quality Printing</strong> has established itself as a prime resource in the Bay Area for quality graphic design and printing, in addition to direct mail and variable data printing services.  For 32 years we have been committed to helping our clients achieve results through out-of-the-box solutions.  While offering our customers the latest in technology, we still believe that nothing replaces a great customer experience.  That is why our commitment remains the same--to deliver quality printed products while providing exceptional customer service</p>
            <div id="grid-container">
                <div id="item1">
                    <CardItem
                        src="images/clip1.jpg"
                        label="Brochures"
                        path="/products" 
                    />
                </div>
                <div id="item2">
                    <CardItem
                        src="images/clip2.jpg"
                        label="Flyers"
                        path="/products" 
                    />
                </div>
                <div id="item3">
                    <CardItem
                        src='images/clip3.jpg'
                        label='Postcards'
                        path='/products'
                    />
                </div>
                <div id="item4">
                    <CardItem
                        src='images/clip4.jpg'
                        label='Business Cards'
                        path='/products'
                    />
                </div>
            </div> 
            
        </div>
    )
}

export default Cards
