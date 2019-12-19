import React from "react";
import ReactDOM from "react-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Lightbox from "../../components/Lightbox.js";
import Bio from "../Bio";
import mark from '../../pics/mark.jpg'
import bob from '../../pics/bob.jpg'
import alan from '../../pics/alan.jpg'
import { Element } from 'react-scroll'
import { Markbio, Bobbio, Albio } from './AllBios.js'


class Builders extends React.Component {
  items = [1, 2, 3, 4, 5];

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
    galleryItems: this.galleryItems()
  };

  slideTo = i => this.setState({ currentIndex: i });

  onInitialized(e) {
    ReactDOM.render(
      <Bio
        bio={Markbio}
      />,
      document.getElementById("bioelement")
    );
    ReactDOM.render(
      <Lightbox iswho="Mark" />,
      document.getElementById("mybotelement")
    );
  }

  onSlideChanged = e => {this.setState({ currentIndex: e.item });
  console.log("Item`s position after a change: ", e.item);

if (e.item === 0) {
      ReactDOM.render(
        <Bio
          bio={Markbio}
        />,
        document.getElementById("bioelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Mark" />,
        document.getElementById("mybotelement")
      );
    } else if (e.item === 1) {
      ReactDOM.render(
        <Bio
          bio={Bobbio
            
          }
        />,
        document.getElementById("bioelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Bob" />,
        document.getElementById("mybotelement")
      );
    } else if (e.item === 2) {
      ReactDOM.render(
        <Bio
          bio={Albio
            
            }
        />,
        document.getElementById("bioelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Alan" />,
        document.getElementById("mybotelement")
      );
    }

}


  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)} />;

  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    
  }

  galleryItems() {
    return this.items.map(i => <h2 key={i}> {i}</h2>);
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state;
    return (
      <div>
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={false}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
          onSlideChange={this.onSlideChange}
          items={this.state.galleryItems}
          ref={el => (this.Carousel = el)}
          
          onInitialized={this.onInitialized}
        >
          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                 src={mark} alt="Mark"
            />
              
              <figcaption> Mark </figcaption>
            </figure>
            

            
          </div>
          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src={bob} alt="Bob"
            />
              
              <figcaption> Bob</figcaption>
            </figure>
          </div>
          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src={alan} alt="Alan"
            />
              
              <figcaption> Alan</figcaption>
            </figure>
          </div>
        </AliceCarousel>

        <div id="bioelement" />
        <div id="mybotelement" />
        <Element name="myel" className="element">
        </Element>
      </div>
    );
  }
}

export default Builders;
/*Mark = 0, Bob 1, Al 2*/

