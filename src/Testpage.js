import React from 'react';
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Section from './Section.js';
export { Mybutton }  from './Testpage.js';


function Testpage() {

 const Mybutton = () => (
    <button>Hello world</button>
)



return (

	
<div>
<br/>
<br/>
 
<img src="https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif" />
<Mybutton />
	<img src="https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif" />
	<img src="https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif" />
	<img src="https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif" />
	<img src="https://tpm-inc.com/wp-content/uploads/under-construction-logo.gif" />
        
	
	
        </div>
)
}

export default Testpage

// Mybutton is just a demonstration of how to create a variable/function inside another function component