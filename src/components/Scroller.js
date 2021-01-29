/*this is the little scroll arrow component */
import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Scroller() {

    return (
      <React.Fragment>
    
    <div className="bouncer">  
    <ScrollLink activeClass="active" to="workerstuff" offset={255} spy={true} smooth={true} duration={900}>
    <FontAwesomeIcon icon="chevron-down" style={{ color: "#2976B4"}} />
    </ScrollLink>
          </div>
          
         </React.Fragment>

      
    );
  
};

export default Scroller


