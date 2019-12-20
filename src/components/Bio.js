import React from "react";
import ReactDOM from "react-dom";
import Section from './Section'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
      

function Bio(props) {


if (props.bio.blurb === "blurb1") {
  var blurbtext = <div className="blurbfont"> Hello it's {props.bio.firstName} here, I'd love if you hired me as your {props.bio.job}.
  I've had over a decade of experience in the industry. I finished school with top marks and went on to complete an MSc,
  and my studies paid off as I obtained a job straight after graduation.

  <br/><br/> I have been involved with many projects, large and small and have been employed at some big-name companies. Check my 
  LinkedIn and Instagram to find out more about my previous endeavours!

  <br/><br/> No other {props.bio.job}'s credentials compare to mine. I draw from a wealth of experience and bring enthusiasm
  and creativity to each job I take. I can come work for you at any location and am always contactable online too.

  <br/><br/> My asking rate is {props.bio.cost}. I am easy to work with and will do my best to ensure your money is well spent!
  </div>}

  else if (props.bio.blurb === "blurb2")
    {var blurbtext = <div className="blurbfont"> Hi, I'm {props.bio.firstName} and thanks for checking our my profile.
     I've been a {props.bio.job} for more than 5 years, and it's not just a job for me, it's a way of life!

  <br/><br/> Although I didn't complete university, I grew in a family of {props.bio.job}s and picked up
  many tricks of the trade from a young age. Check my social media and testimonials and you'll surely be convinced.

  <br/><br/> Given my lack of formal schooling, my work has a unique, fresh feel that exudes personality. I also feel like 
  my rates, at {props.bio.cost}, are the cheapest around, and we can always work out a better deal via phone or e-mail!
  
  <br/><br/> Get in touch today and let's start working together!
  </div> }

else if (props.bio.blurb === "blurb3")
{var blurbtext = <div className="blurbfont"> Hey there, {props.bio.firstName} is my name and if you're looking for a top {props.bio.job},
you've come to the right place. 
<br/><br/>
Whilst I am pretty pricey at {props.bio.cost}, I am worth every penny! I started studying to be a  {props.bio.job} at high school and went on to form my own company. Now, I am taking my talents to NetWorkers!
<br/><br/>
Please browse through my portfolio and testimonials and you'll see that I'm a cut above the other {props.bio.job}s on the site.
My rates are non-negotiable, but rest assured you are paying for the best, and that's what you'll get!
<br/><br/>
I look forward to hearing from you!
  </div> }



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
      
       <div id="blurbdiv"> {blurbtext}
        </div> 
        </React.Fragment>
  );
  


}

export default Bio;

/*remember Bio with the capital B is the component (a list, a bouncing arrow, and a div for the blurb) 
and bio is just the prop where we fill in all the details for the above*/
