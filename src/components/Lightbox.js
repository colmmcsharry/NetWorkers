import React from "react";
import Galrender from './Galrender'
import Testimonial from '../Testimonial'
import {d1photos, d2photos, d3photos, markphotos, bobphotos,alphotos} from '../pics/photoarrays'
/*this component also controls the lightbox*/
function Lightbox(props) {
  const iswho = props.iswho;
  
  

  if (iswho === "Mark") {
    return (
      <Galrender iswhom={markphotos}/>
    );
  } else if (iswho === "Bob") {
    return (
      <Galrender iswhom={bobphotos}/>
    );
  } else if (iswho === "Alan") {
    return (
      <Galrender iswhom={alphotos}/>
    );
  } else if (iswho === "designer1") {
    return ( <React.Fragment>
      <Galrender iswhom={d1photos}/>
       <Testimonial />
       </React.Fragment>
    );
  } else if (iswho === "designer2") {
    return (
      <Galrender iswhom={d2photos}/>
    );
  } else if (iswho === "designer3") {
    return (
      <Galrender iswhom={d3photos}/>
    );
  }

}
export default Lightbox;


// originally I had copied/pasted the Lightbox code in here, then rather than copy/paste it over and over 
// and changing (if iswho ==="Mark" or "Bob") etc every time, i just made it a component <Galrender /> and am using props so it knows which
// photos to render for each person
// 