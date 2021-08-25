import React from "react";
import "./prods.css"
import CardItem from './CardItem'




function Prod() {
    return (
        <div id="container">
                <div id="colect-main">
                    <h1>ALL CATEGORIES</h1>
                    <div id="scrollbar">
                        <ul id="categories">
                            <li><a href="/business-card">Appointment Card</a></li>
                            <li><a href="/business-card">Banners</a></li>
                            <li><a href="/business-card">Booklets</a></li>
                            <li><a href="/business-card">Brochures</a></li>
                            <li><a href="/business-card">Business Card</a></li>
                            <li><a href="#">Calendars</a></li>
                            <li><a href="#">Envelopes</a></li>
                            <li><a href="#">Flyers</a></li>
                            <li><a href="#">Greeting Card</a></li>
                            <li><a href="#">Hang Tag</a></li>
                            <li><a href="#">Invitation</a></li>
                            <li><a href="#">Label</a></li>
                            <li><a href="#">Letterhead</a></li>
                            <li><a href="#">Magnet signs</a></li>
                            <li><a href="#">Menus</a></li>
                            <li><a href="#">NCR Forms</a></li>
                            <li><a href="#">Newsletter</a></li>
                            <li><a href="#">Note Pad</a></li>
                            <li><a href="#">Post Card</a></li>
                            <li><a href="#">Poster</a></li>
                            <li><a href="#">Presentation Folders</a></li>
                            <li><a href="#">Stickers</a></li>
                            <li><a href="#">Yearbooks</a></li>
                        </ul>
                    </div>
                </div>
            
            <div className="cards__contianer">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/appt-cards.jpg"
                        label="Appointment Cards"
                        path="/Appointment-Card" 
                        />
                        <CardItem
                        src="images/banner.jpg"
                        label="Banners"
                        path="/sevices" 
                        />
                        <CardItem
                        src='images/booklet.png'
                        label='Booklets'
                        path='/services'
                        />
                        <CardItem
                        src='images/brochure.png'
                        label='Brochures'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='images/business-cards.png'
                        label='Business Cards'
                        path='/business-card'
                        />
                        <CardItem
                        src="images/calendar.jpg"
                        label="Calendars"
                        path="/sevices" 
                        />
                        <CardItem
                        src="images/envelopes.jpg"
                        label="Envelopes"
                        path="/sevices" 
                        />
                        <CardItem
                        src='images/flyers.png'
                        label='Flyers'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='images/greeting-cards.jpg'
                        label='Greeting Cards'
                        path='/services'
                        />
                        <CardItem
                        src='images/handtag.jpg'
                        label='Handtags'
                        path='/services'
                        />
                        <CardItem
                        src="images/invitation.jpg"
                        label="Invitations"
                        path="/sevices" 
                        />
                        <CardItem
                        src="images/label.jpg"
                        label="Labels"
                        path="/sevices" 
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='images/letterhead.jpg'
                        label='Letterheads'
                        path='/services'
                        />
                        <CardItem
                        src='images/magnet-sign.jpg'
                        label='Magnet Signs'
                        path='/services'
                        />
                        <CardItem
                        src='images/menus.jpg'
                        label='Menus'
                        path='/services'
                        />
                        <CardItem
                        src="images/ncr-forms.jpg"
                        label="NCR Forms"
                        path="/sevices" 
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/newsletters.jpg"
                        label="Newsletters"
                        path="/sevices" 
                        />
                        <CardItem
                        src='images/notepad.jpg'
                        label='Notepads'
                        path='/services'
                        />
                        <CardItem
                        src='images/post-cards.jpg'
                        label='Post Cards'
                        path='/services'
                        />
                        <CardItem
                        src='images/poster.jpg'
                        label='Poster'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/presentation-folders.jpg"
                        label="Presentation Folders"
                        path="/sevices" 
                        />
                        <CardItem
                        src="images/sticker.png"
                        label="Stickers"
                        path="/sevices" 
                        />
                        <CardItem
                        src='images/yearbooks.jpg'
                        label='Yearbooks'
                        path='/services'
                        />
                        <CardItem
                        src='images/newsletter+mailing-service.png'
                        label='Newsletter + Mailing services'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Prod;