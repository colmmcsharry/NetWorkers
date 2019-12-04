import React from 'react'
import Workergallery from '../occupations/Workergallery.js'
import Bio from '../Bio.js'
import accountant from '../../pics/accountant.jpeg'
import accountant2 from '../../pics/accountant2.jpg'
import accountant3 from '../../pics/accountant3.jpg'
import Testimonial from '../../Testimonial'



function Accountants() {
return (
  <React.Fragment>
  <h1>Accountants</h1> 
  <Workergallery caption1="Marco" caption2="BigBob" caption3="Alain"
  profilepic1={accountant} profilepic2={accountant2} profilepic3={accountant3} whoseprofile="Mark"/> 
  <Testimonial />
  </React.Fragment>
  )

}
/*i may be able to figure out some way of getting the appropriate bio to load here.,
i coule make another function that happens when i click the next / prev button*/

export default Accountants;