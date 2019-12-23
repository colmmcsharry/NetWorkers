import React from 'react'
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import { Link as Link2, animateScroll as scroll, DirectLink, Element, Events, scrollSpy, scroller  } from "react-scroll";

function About() {
return (
	<React.Fragment>
	<h1 style={{fontFamily:'EBGaramond', color:'#2e4c63'}}>About Networkers</h1>
	<br/>
	<div className="About" style={{fontFamily:'Quicksand', color:'#2e4c63'}}>
	My name is Colm and I'm the CEO and founder of Networkers
	<br/> <br/> <br/>

	<div className="me"><img src="https://avatars3.githubusercontent.com/u/31823017?s=460&v=4" style={{ width: 150, height: 150, }}/></div>
	<br/> 
	<div className="meblurb">
		<br/>
		I created this site to help people find workers in a hurry!* <br/> <br/>
		Maybe you're in a rush to get your taxes done, or need to cook dinner for some guests? <br/> <br/>
		Browse through our accountants or chefs, check out their galleries and testimonials, and hire one! <br/><br/>

		Contact workers by phone or email and arrange a time, date and cost per hour. <br/><br/>
		Don't forget to leave feedback after to help others find the best workers!
		<br/><br/><br/><br/>
		<span style={{fontFamily:'papyrus', fontSize:'.5rem'}}>*But really, I just created this site to help me learn React, and improve my HTML/CSS skills!</span>
		</div>

	</div>
	
	</React.Fragment>
	)

}


export default About;

