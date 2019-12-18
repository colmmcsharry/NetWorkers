import React from "react";
import Section from '../Section'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Bio(props) {
  return (
    <React.Fragment>
    <ul className = "Biolist" >
     <li> First Name : <span className="light">{props.bio.firstName}</span>  </li>
      <li> Last Name : <span className="light"> {props.bio.lastName} </span></li>
      <li> Rating : {props.bio.rating} </li>
      <li> <FontAwesomeIcon icon="mobile-alt" /> : <span className="light"> {props.bio.phone}</span></li>
      <li> <FontAwesomeIcon icon="envelope" /> : <span className="light">{props.bio.email}</span>  </li>
      <li> {props.bio.socials}

       </li>
       
        </ul>
        <div className="bouncercontainer"><Section /></div> 
      
       <div className="blurbdiv"> {props.bio.blurb} </div> 
        </React.Fragment>
  );
}

export default Bio;
