import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from 'react-router-dom';
import clowns from '../pics/clowns.jpeg'
import accountants from '../pics/accountants.jpg'
import builders from '../pics/builders.jpg'
import chefs from '../pics/chefs.jpg'
import designers from '../pics/designers.jpg'
import Welcome from './Welcome.js'
/*remember there is an AliceCarousel.CSS file that can be edited too, like in my group proj version, can remove buttons, etc.*/

class CGallery extends React.Component {
  onSlideChange(e) {
    
  }

  onSlideChanged(e) {
    
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      800: {
        items: 2
      },


      1101: {
        items: 3
      }
    };

    return (
      <div className="mainCarouselWrapper">
      <Welcome />
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex={4}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >

        <div className="Mypicsclass">
        <Link to="/designers" style={{textDecoration:'none'}}>
          <figure>
            <img
              className="carimages"
              src={designers} alt="designer"
            />
            
            <figcaption>Graphic Designers</figcaption>
          </figure>
          </Link>
        </div>
        <div className="Mypicsclass">
        <Link to="/builders" style={{textDecoration:'none'}} >
          <figure>
            <img
              className="carimages"
              src={builders} alt="builder"
            />

            <figcaption>
               Builders
            </figcaption>
          </figure>
          </Link>
        </div>
        <div className="Mypicsclass">
        <Link to="/chefs" style={{textDecoration:'none'}}>
          <figure>
            <img
              className="carimages"
              src={chefs} alt="chef"
            />
            
            <figcaption>Chefs</figcaption>
          </figure>
          </Link>
        </div>
        <div className="Mypicsclass">
        <Link to="/accountants" style={{textDecoration:'none'}}>
          <figure>
            <img
              className="carimages"
              src={accountants} alt="accountant"
            />
            
            <figcaption>Accountants</figcaption>
          </figure>
          </Link>
        </div>
        <div className="Mypicsclass">
        <Link to="/clowns" style={{textDecoration:'none'}}>
          <figure>
            <img
              className="carimages"
              src={clowns} alt="clown" 
            />
            
            <figcaption>Clowns</figcaption>
          </figure>
          </Link>
        </div>
      </AliceCarousel>
      </div>
    );
  }
}

export default CGallery;
