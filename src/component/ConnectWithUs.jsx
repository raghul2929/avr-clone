import React from 'react';
import '../style/navbars.css'
import { Calendar1Icon ,Video,MessageCircle} from 'lucide-react';

function ConnectWithUs() {
  return (
    <div className="connect-with-us-container">
      <h2>CONNECT WITH US</h2>
      <p>We are always available to guide you at your convenience.</p>

      <div className="options-container">
        <div className="option">
          <img src={'https://avrswarnamahal.com/assets/imgs/new-whats.png'} alt="WhatsApp" />
          <h3>Connect On<br/>WhatsApp</h3>
          <button>Connect</button>
        </div>

        <div className="option">
          <Calendar1Icon size={32} />
          <h3>Book<br/>Appointment</h3>
          <button>Book</button>
        </div>

        <div className="option">
            <Video size={32} />
          <h3>Schedule a<br/>Video Call</h3>
          <button>Schedule</button>
        </div>

        <div className="option">
          <MessageCircle /> 
          <h3>Contact us<br/>Chat with Us</h3>
          <button>Connect</button>
        </div>
      </div>
    </div>
  );
}

export default ConnectWithUs;