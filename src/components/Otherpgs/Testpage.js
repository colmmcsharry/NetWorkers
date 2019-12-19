import React from 'react';



function Testpage() {

  const Workerbutton = () => (
    <button>I am a worker!</button>
)

 const Customerbutton = () => (
    <button>I am a Customer!</button>
)


return (

	
<div>
 	<Workerbutton /> <span> <Customerbutton /> </span>

        
   </div>     
)
}

export default Testpage

// Mybutton is just a demonstration of how to create a variable/function inside another function component