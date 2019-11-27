import React from "react";
import Section from '../Section'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Bio(props) {
  return (
    <ul style={{ fontWeight: "900" }}>
      First Name: <span className="light">{props.bio.firstName}</span> <br />
      Last Name: <span className="light"> {props.bio.lastName} </span>
      <br />
      Rating: {props.bio.rating} <br />
      Phone: <span className="light"> {props.bio.phone}</span>
      <br />
      E-Mail: <span className="light">{props.bio.email}</span>  
      <br /> 
      <div className="bouncercontainer"><Section /></div>
      <br/>
       {props.bio.blurb} 
       <br />
       
    </ul>
  );
}

export default Bio;
