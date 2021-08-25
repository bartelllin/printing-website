import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <img src="/images/logo.png"/>
      <div className='col-md-12'>
      <h1>Contact Us</h1>
      <ul className='foot'>
        <li> <strong>Email :</strong> calprint@pacbell.net </li>
        <li> <strong>Phone :</strong> (925) 688-1480 </li>
        <li><strong>Address :</strong>  5063 Commercial Circle, Suite D, Concord, CA 94520 </li>
      </ul>
      </div>
      <small className='website-rights'> &copy;copyright {(new Date().getFullYear())}. CALIFORNIA QUALITY PRINTING. All rights reserved.</small>
    </div>
  );
}

export default Footer;