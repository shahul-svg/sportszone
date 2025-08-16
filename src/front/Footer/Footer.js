import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faFacebook, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="container3">
        <div className="footer-content">
         
          <div className="cardlast">
            <p><FontAwesomeIcon icon={faPhone} /> 8345435533</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> shahul11@gmail.com</p>
            <p><FontAwesomeIcon icon={faLocationDot} /> 180 Periya Pallivasal Street, Vadakarai, 627812</p>
            <p><FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/mohamedshahulhameed</p>
          </div>

       
          <div className="cardlast">
            <form>
              <input type="text" id="fname" name="fname" placeholder="Enter ID" /><br />
              <input type="password" id="pass" name="pass" placeholder="Enter Password" /><br />
              <input type="email" id="email" name="email" placeholder="Enter Email" /><br /><br />
              <input type="submit" value="Submit" />
            </form>
          </div>

          
          <div className="cardlast">
            <p>About This sportzone
                "All for the love of football."

"Where passion meets the pitch."

"Gear up for the game."

"Your football, your style."

"Everything football, all in one place."
            </p>
            <p>© Mohamed Shahul Hameed, 2025. All Rights Reserved.</p>
            <p>Customer Service</p>
            <div className="icon">
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
