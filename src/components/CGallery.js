import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from 'react-router-dom';
import clowns from '../pics/clowns.jpeg'
import accountants from '../pics/accountants.jpg'
import builders from '../pics/builders.jpg'
import chefs from '../pics/chefs.jpg'
import designers from '../pics/designers.jpg'
/*remember there is an AliceCarousel.CSS file that can be edited too, like in my group proj version, can remove buttons, etc.*/

class CGallery extends React.Component {
  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };

    return (
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex={3}
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
        <Link to="/about">
          <figure>
            <img
              className="carimages"
              src={designers} alt="designer"
            />
            
            <figcaption>Designer</figcaption>
          </figure>
          </Link>
        </div>
        <div className="Mypicsclass">
        <Link to="/builders">
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
        <Link to="/about">
          <figure>
            <img
              className="carimages"
              src={chefs} alt="chef"
            />
            
            <figcaption>Chef</figcaption>
          </figure>
          </Link>
        </div>
        <div className="Mypicsclass">
        <Link to="/about">
          <figure>
            <img
              className="carimages"
              src={accountants} alt="accountant"
            />
            
            <figcaption>Accountant</figcaption>
          </figure>
          </Link>
        </div>
        <div className="Mypicsclass">
        <Link to="/about">
          <figure>
            <img
              className="carimages"
              src={clowns} alt="clown" 
            />
            
            <figcaption>Clown</figcaption>
          </figure>
          </Link>
        </div>
      </AliceCarousel>
    );
  }
}

export default CGallery;
