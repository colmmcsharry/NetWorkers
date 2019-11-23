import React from 'react'
import Workergallery from '../builders/Workergallery.js'
import prop1 from '../builders/Workergallery.js'
import mark from '../../pics/mark.jpg'
import bob from '../../pics/bob.jpg'
import alan from '../../pics/alan.jpg'
import Bio from '../Bio.js'
import accountant from '../../pics/accountant.jpeg'
import accountant2 from '../../pics/accountant2.jpg'
import accountant3 from '../../pics/accountant3.jpg'



function Contact() {
return (
	<React.Fragment>
	<h1>Contact</h1> 
	<Workergallery caption1="Marco" caption2="BigBob" caption3="Alain"
	profilepic1={accountant} profilepic2={accountant2} profilepic3={accountant3} whoseprofile="Mark"/> 
	
	</React.Fragment>
	)

}


export default Contact;

// <Bio
//           bio={{
//             firstName: "Mark",
//             lastName: "Doe",
//             rating: "\u2B50 \u2B50",
//             phone: "605 784 8001",
//             email: "Mark@gmail.com",
//             blurb: "Hey I'm Mark and welcome to my bio"
//           }}
//         />,