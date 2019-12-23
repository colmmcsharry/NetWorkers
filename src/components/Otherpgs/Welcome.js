import React from 'react';
import { Link } from 'react-router-dom';

function Welcome ()
{
	return(
		<div className="Fader"> <Link style={{color:'#2e4c63', textDecoration:'none'}} to="/"> <span className="headingbig" style={{fontSize:'35px', fontFamily: 'EBGaramond'}}> Welcome to NetWorkers</span>
		<span className="headingsmall" style={{fontSize:'30px', fontFamily: 'EBGaramond'}}> Welcome to NetWorkers</span>
		<br/><br/><br/><br/>
			Need some renovations done on your house? 
		<br/><br/>
			Need a clown to entertain your children? 
		<br/>	<br/>
		Browse our listings and find the worker you need!
		<br/><br/>
		Click here to begin!
		</Link>
		</div>



		)
}
export default Welcome