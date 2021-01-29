import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
/*  faInstagram,
  faInstagramSquare*/
} from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3 style={{fontFamily:'Georgia', color:'#434343' }}>@NetWorkers</h3>
      <button
        
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </button>
      <button
        
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </button>
      <button  className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </button>

      <button className="instagram social">
        {/*<FontAwesomeIcon icon={faInstagram} size="2x" />*/}
      </button>
    </div>
  );
}