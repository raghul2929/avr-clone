import React from 'react';
// import './Footer.css';
import logo from '../imgs/logo1.png'
import '../style/navbars.css'
import { Facebook ,Youtube,Instagram,Whatsapp,Twitter, FacebookIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="about">
              <img src={logo} alt="AVR Swarnamahal Logo" />
              <p>Shop our entire lineup of fine</p>
              <p> faves in store, get styled and join the Fine Crew.</p>
              <br />
              <a href="https://play.google.com/store/apps/details?id=com.avrswarnamahal" target="_blank" rel="noopener noreferrer">
                <img src={'https://avrswarnamahal.com/assets/icon/google-play.png'} alt="Download on Google Play" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="links">
              <h4>About AVRSM</h4>
              <ul>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/find-a-store">Find a Store</a></li>
                <li><a href="/careers">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="links">
              <h4>Customer Service</h4>
              <ul>
                <li><a href="/franchising">Franchising</a></li>
                <li><a href="/corporate-gifting">Corporate Gifting</a></li>
                <li><a href="/easy-money-for-gold">Easy Money For Gold</a></li>
                <li><a href="/help-and-contact">Help and Contact</a></li>
                <li><a href="/jewellery-purchase-plan">Jewellery Purchase Plan</a></li>
                <li><a href="/bangle-bracelet-size-guide">Bangle & Bracelet Size Guide</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="contact">
              <h4>Contact Us</h4>
              <p>AVR Swarnamahal Jewellery Ltd.</p>
              <p>251-A Omalur Main Road Swarnapuri,</p>
              <p>Salem-636 004,</p>
              <p>Tamil Nadu, India.</p>
              <p>Toll Free</p>
              <p>Tamil Nadu - 18004253307</p>
              <p>Karnataka - 18004250007</p>
              <p>EMAIL - info@avrswarnamahal.com</p>
              <ul className="social-icons">
                <li><a href="#" target="_blank" ><FacebookIcon></FacebookIcon></a></li>
                <li><a href="#" target="_blank" ><YoutubeIcon></YoutubeIcon></a></li>
                <li><a href="#" target="_blank" ><TwitterIcon/></a></li>
                <li><a href="#" target="_blank" ><InstagramIcon/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;