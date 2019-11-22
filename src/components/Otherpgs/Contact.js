import React from 'react'
import Workergallery from '../builders/Workergallery.js'
import prop1 from '../builders/Workergallery.js'
import man from '../../pics/man.jpg'
import Bob from '../../pics/builderman.jpg'
import Alan from '../../pics/builder.jpg'
import Bio from '../Bio.js'



function Contact() {
return (
	<React.Fragment>
	<h1>Contact</h1> 
	<Workergallery caption1="Marco" caption2="BigBob" caption3="Alain"
	profilepic1={man} profilepic2={Bob} profilepic3={Alan} whoseprofile="Mark"/> 
	
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