import React from "react";
import Section from '../Section'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Bio(props) {
  return (
    <div className="wholebio">
    <ul style={{ fontWeight: "900" }}>
      First Name : <span className="light">{props.bio.firstName}</span> <br />
      Last Name : <span className="light"> {props.bio.lastName} </span>
      <br />
      Rating : {props.bio.rating} <br />
      <FontAwesomeIcon icon="mobile-alt" /> : <span className="light"> {props.bio.phone}</span>
      <br />
      <FontAwesomeIcon icon="envelope" /> : <span className="light">{props.bio.email}</span>  
      <br /> 
      <div className="bouncercontainer"><Section /></div>
      <br/>
       <div className="blurbdiv"> {props.bio.blurb} </div>
       <br />
        </ul>
        </div>
  );
}

export default Bio;
