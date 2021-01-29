import React from "react";
import Galrender from './Galrender'
import Testimonial from './Testimonial'
import {d1photos, d2photos, d3photos, markphotos, bobphotos,alphotos, billyphotos, bubbaphotos, colinphotos, gordonphotos, curtisphotos, jackphotos } from '../pics/photoarrays'
/*this component also controls the lightbox*/
function Lightbox(props) {
  const iswho = props.iswho;
  
  

  if (iswho === "Mark") {
    return (  <React.Fragment>
      <Galrender iswhom={markphotos}/>
      <Testimonial name="Mark" job="builder" cost="$20 p/hour" pronoun="he" />
       </React.Fragment>
    );
  } else if (iswho === "Bob") {
    return ( <React.Fragment>
      <Galrender iswhom={bobphotos}/>
      <Testimonial name="Bob" job="builder" cost="$20 p/hour" pronoun="he"/>
       </React.Fragment>
    );
  } else if (iswho === "Alan") {
    return ( <React.Fragment>
      <Galrender iswhom={alphotos}/>
      <Testimonial name="Alan" job="builder" cost="$20 p/hour" pronoun="he"/>
      </React.Fragment>
    );
  } else if (iswho === "designer1") {
    return ( <React.Fragment>
      <Galrender iswhom={d1photos}/>
       <Testimonial name="Alaina" job="designer" cost="$20 p/hour" pronoun="she"/>
       </React.Fragment>
    );
  } else if (iswho === "designer2") {
    return ( <React.Fragment>
      <Galrender iswhom={d2photos}/>
      <Testimonial name="Eddie" job="designer" cost="$25 p/hour" pronoun="he"/>
       </React.Fragment>
    );
  } else if (iswho === "designer3") {
    return ( <React.Fragment>
      <Galrender iswhom={d3photos}/>
      <Testimonial name="Florence" job="designer" cost="$35 p/hour" pronoun="she" />
       </React.Fragment>
    );
  }

else if (iswho === "John") {
    return ( <React.Fragment>
       <Testimonial name="John" job="accountant" cost="$20 p/hour" pronoun="he"/>
       </React.Fragment>
    );
  } else if (iswho === "Jill") {
    return ( <React.Fragment>
      
      <Testimonial name="Jill" job="accountant" cost="$25 p/hour" pronoun="she"/>
       </React.Fragment>
    );
  } else if (iswho === "Bill") {
    return ( <React.Fragment>
      
      <Testimonial name="Bill" job="accountant" cost="$35 p/hour" pronoun="he" />
       </React.Fragment>
    );
  }  

else if (iswho === "Billy") {
    return (  <React.Fragment>
      <Galrender iswhom={billyphotos}/>
      <Testimonial name="Billy" job="clown" cost="$20 p/hour" pronoun="he" />
       </React.Fragment>
    );
  } else if (iswho === "Bubba") {
    return ( <React.Fragment>
      <Galrender iswhom={bubbaphotos}/>
      <Testimonial name="Bubba" job="clown" cost="$25 p/hour" pronoun="he"/>
       </React.Fragment>
    );
  } else if (iswho === "Colin") {
    return ( <React.Fragment>
      <Galrender iswhom={colinphotos}/>
      <Testimonial name="Colin" job="clown" cost="$35 p/hour" pronoun="he"/>
      </React.Fragment>
    );
}


else if (iswho === "Gordon") {
    return (  <React.Fragment>
      <Galrender iswhom={gordonphotos}/>
      <Testimonial name="Gordon" job="chef" cost="$20 p/hour" pronoun="he" />
       </React.Fragment>
    );
  } else if (iswho === "Curtis") {
    return ( <React.Fragment>
      <Galrender iswhom={curtisphotos}/>
      <Testimonial name="Curtis" job="chef" cost="$25 p/hour" pronoun="he"/>
       </React.Fragment>
    );
  } else if (iswho === "Jack") {
    return ( <React.Fragment>
      <Galrender iswhom={jackphotos}/>
      <Testimonial name="Jack" job="chef" cost="$35 p/hour" pronoun="he"/>
      </React.Fragment>
    );
}



}

export default Lightbox;


// originally I had copied/pasted the Lightbox code in here, then rather than copy/paste it over and over 
// and changing (if iswho ==="Mark" or "Bob") etc every time, i just made it a component <Galrender /> and am using props so it knows which
// photos to render for each person
// 