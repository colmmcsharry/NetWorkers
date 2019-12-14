import React from 'react';
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import Testimonial from './Testimonial' 
import Forms from './Forms.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from './Section.js';
export { Mybutton }  from './Testpage.js';





function Testpage() {

  const Mybutton = () => (
    <button>Hello world</button>
)



return (

	
<div>
 
<Mybutton />
	<Forms />
        
   </div>     
)
}

export default Testpage

// Mybutton is just a demonstration of how to create a variable/function inside another function component