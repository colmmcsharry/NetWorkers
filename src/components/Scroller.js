/*this is the little scroll arrow component, it's called Section for some reason*/

import React from 'react';
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
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


