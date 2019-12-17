import React from 'react';
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import Testimonial from './Testimonial' 
import WorkerForm from './WorkerForm.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from './Section.js';
export { Workerbutton }  from './Testpage.js';
export { Customerbutton }  from './Testpage.js';





function Testpage() {

  const Workerbutton = () => (
    <button>I am a worker!</button>
)

 const Customerbutton = () => (
    <button>I am a worker!</button>
)


return (

	
<div>
 
	<WorkerForm />
        
   </div>     
)
}

export default Testpage

// Mybutton is just a demonstration of how to create a variable/function inside another function component