import React from 'react';
// import './BespokeDesign.css'; // Import the CSS file
import '../style/navbars.css'
import imgg from '../imgs/bespoke.jpg'
const BespokeDesign = () => {
  return (
    <div className="bespoke-container">
      <div className="image-container">
        {/* Replace with the actual image URL */}
        <img src={imgg} alt="Bespoke Jewelry" />
      </div>
      <div className="content-container">
        <h2>Create a Bespoke Design</h2>
        <p>
          Unlimited imagination, a heritage of exceptional craftsmanship and passion for creating your dream comes true with jewellery crafted by our finest designers. All these and more are exalted in AVR Swarna Mahal Jewellers Bespoke initiative. Working in close collaboration with clients, AVR Swarna Mahal Jewellers transforms each unique request into a dazzling reality. In the realm of bespoke, no limits exist. Beautiful, audacious, awe-inspiring, unforgettable... and much more, each creation is a unique work of fine art, brought to life by AVR Swarna Mahal Jewellers' craftsman.
        </p>
        <button>Book an Appointment</button>
      </div>
    </div>
  );
};

export default BespokeDesign;