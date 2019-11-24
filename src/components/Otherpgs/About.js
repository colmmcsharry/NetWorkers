import React from 'react'
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import { Link as Link2, animateScroll as scroll, DirectLink, Element, Events, scrollSpy, scroller  } from "react-scroll";


function About() {
return (
	<React.Fragment>
	<h1>About</h1>
	<p>Coming Soon!</p>
	<button> lol <Link2 activeClass="active" to="test1"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}></Link2></button>
	<img src="https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif" />
	<img src="https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif" />
	<img src="https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif" />
	<img src="https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif" />
	<img src="https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif" />
	<div className="myverybot">here's the bottom</div>
	<Element name="test1" className="element" >
            test 1
        </Element>
	
	</React.Fragment>
	)

}


export default About;

