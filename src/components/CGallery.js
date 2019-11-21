import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from 'react-router-dom';
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
              src="https://thumbs.dreamstime.com/b/cartoon-girl-graphic-designer-showing-color-chart-illustration-41144546.jpg"
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
              src="https://images.all-free-download.com/images/graphiclarge/funny_cartoon_builders_vector_illustration_576191.jpg"
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
              src="https://images.all-free-download.com/images/graphicthumb/cartoon_cook_cute_design_vector_541584.jpg"
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
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/49939062_735380163500479_7157507177094053888_o.jpg?_nc_cat=105&_nc_oc=AQnrd27zAjH99tDG_HQmNwrhkvTjoeXZKJFM12Rt9PJh4Z7v2xfsBbN4Lh-bn7u-i9g&_nc_ht=scontent-sea1-1.xx&oh=09666b218f7d76e1d94de01d534d172d&oe=5E5671AD"
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
              src="http://www.clipartbest.com/cliparts/McL/LxA/McLLxAoni.jpeg"
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
