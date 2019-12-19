import React from "react";
import ReactDOM from "react-dom";
import Section from '../Section'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
      

function Bio(props) {


if (props.bio.blurb === "blurb1") {
  var blaahh = "hello"}

  else if (props.bio.blurb === "blurb2")
    {var blaahh = "hey"}

/*
    if (props.bio.blurb === "blurb1") { 
      ReactDOM.render(
        <div> hellooo it's { props.bio.firstName } and I'm the  best { props.bio.job } </div>,
        document.getElementById("blurbdiv")
      );
    
} else if (props.bio.blurb === "blurb2") { 
      ReactDOM.render(
        <div> hi i'm { props.bio.firstName } and I'm the  best { props.bio.job } </div>,
        document.getElementById("blurbdiv")
      ) };

*/



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
      
       <div id="blurbdiv"> {blaahh}
        </div> 
        </React.Fragment>
  );
  


}

export default Bio;

/*remember Bio with the capital B is the component (a list, a bouncing arrow, and a div for the blurb) 
and bio is just the prop where we fill in all the details for the above*/
