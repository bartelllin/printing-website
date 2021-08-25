import React from "react";
import "./Contact.css";
import emailjs from 'emailjs-com';
import GoogleMapReact from "google-map-react";


function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
    emailjs.sendForm('default_service', 'template_6kgotpo', e.target, 'user_mzKIZ3irMHI4euX4hLGQC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
      }
    
    
    return (
        <div id="contact-outer">
            <div id="emailform">
                <h1 id='message'>Leave Your Message</h1>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="row pt-5 form-group mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <label>Name <br></br>
                            <input id="name" type="text" name="name" required/></label>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <label>Email <br></br>
                            <input id='email' type="email" name="email" required/></label>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <label>Subject <br></br></label>
                            <input id='subject' type="text" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <label>Message <br></br></label>
                            <textarea name="message" rows="10" cols="50"/>
                        </div>
                        <div className="col-8 form-group pt-3 mx-auto" >
                            <input id='button' type="submit" value="Send" />
                        </div>
                    </div>
                </form>
            </div>
            <div id="contact-info">
                <h2>Contact Info</h2>
                <p id="box">Choose one of the alternative methods of communication. We’re available from Monday to Friday, 09:00-5:00 PT to take your call.</p>
                <ul id="cont">
                    <li><strong>Phone :</strong> (925) 688-1480</li>
                    <li><strong>Email :</strong>  calprint@pacbell.net</li>
                    <li><strong>Web :</strong>  www.caqualityprinting.com</li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;