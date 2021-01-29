import React from 'react';
import CustomerForm from './CustomerForm.js'
import WorkerForm from './WorkerForm.js'

function Menurender(props) {
 if (props.menu === "Worker")   
    {

return (
<WorkerForm />	     
)
    }
else if     (props.menu === "Customer")   
    {

return (
<CustomerForm />	     
)
    }
else {
    return ("")
}    
}

export default Menurender