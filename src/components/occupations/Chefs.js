import React from 'react'
import ReactDOM from "react-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Lightbox from "../../components/Lightbox.js";
import Bio from '../Bio.js'
import chef from '../../pics/chef.jpg'
import chef2 from '../../pics/chef2.jpg'
import chef5 from '../../pics/chef5.jpg'
import {  Element  } from 'react-scroll'
import { GordonBio, CurtisBio, JackBio } from './AllBios.js'



class Chefs extends React.Component {
  items = [1, 2, 3, 4, 5];

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
    galleryItems: this.galleryItems()
  };

  slideTo = i => this.setState({ currentIndex: i });

  onInitialized(e) {
    ReactDOM.render(
      <Bio bio={GordonBio} />,
      document.getElementById("bioelement")
    );
    ReactDOM.render(
      <Lightbox iswho="Gordon" />,
      document.getElementById("mybotelement")
    );
  }

  onSlideChanged = e => {this.setState({ currentIndex: e.item });

if (e.item === 0) {
      
      ReactDOM.render(
        <Bio bio={GordonBio} />,
        document.getElementById("bioelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Gordon" />,
        document.getElementById("mybotelement")
      );
    } else if (e.item === 1) {
      
      ReactDOM.render(
        <Bio
          bio={CurtisBio}
        />,
        document.getElementById("bioelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Curtis" />,
        document.getElementById("mybotelement")
      );
    } else if (e.item === 2) {
      
      ReactDOM.render(
        <Bio
          bio={JackBio} />,
        document.getElementById("bioelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Jack" />,
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
                 src={chef} alt="Alaina"
            />
              
              <figcaption>  Gordon </figcaption>
            </figure>
          </div>

          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src={chef2} alt="Edward"
            />
              
              <figcaption> Curtis </figcaption>
            </figure>
          </div>

          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src={chef5} alt="Florence"
            />
              
              <figcaption> Juicy Jack </figcaption>
            </figure>
          </div>
        </AliceCarousel>

        <div id="bioelement"> 
          
        </div>  

        <div id="mybotelement" />
        <Element name="myel" className="element"/>
      </div>
    );
  }
}

export default Chefs;