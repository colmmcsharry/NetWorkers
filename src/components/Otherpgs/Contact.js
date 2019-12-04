import React from 'react'
import Workergallery from '../occupations/Workergallery.js'
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

/*this is just an example of how I could have rendered each category. I just couldn't get the appropriate bios to load when click next slide this way*/