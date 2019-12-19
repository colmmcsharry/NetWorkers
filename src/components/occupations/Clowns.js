import React from 'react'
import ReactDOM from "react-dom";
import Workergallery from '../occupations/Workergallery.js'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Lightbox from "../../components/Lightbox.js";
import Bio from '../Bio.js'
import clown from '../../pics/clown.jpg'
import clown2 from '../../pics/clown2.jpeg'
import clown3 from '../../pics/clown3.jpg'
import {  Element  } from 'react-scroll'
import { BillyBio, BubbaBio, ColinBio } from './AllBios.js'



class Clowns extends React.Component {
  items = [1, 2, 3, 4, 5];

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
    galleryItems: this.galleryItems()
  };

  slideTo = i => this.setState({ currentIndex: i });

  onInitialized(e) {
    ReactDOM.render(
      <Bio bio={BillyBio} />,
      document.getElementById("bioelement")
    );
    ReactDOM.render(
      <Lightbox iswho="Billy" />,
      document.getElementById("mybotelement")
    );
  }

  onSlideChanged = e => {this.setState({ currentIndex: e.item });

if (e.item === 0) {
      
      ReactDOM.render(
        <Bio bio={BillyBio} />,
        document.getElementById("bioelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Billy" />,
        document.getElementById("mybotelement")
      );
    } else if (e.item === 1) {
      
      ReactDOM.render(
        <Bio
          bio={BubbaBio}
        />,
        document.getElementById("bioelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Bubba" />,
        document.getElementById("mybotelement")
      );
    } else if (e.item === 2) {
      
      ReactDOM.render(
        <Bio
          bio={ColinBio} />,
        document.getElementById("bioelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Colin" />,
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
                 src={clown} alt="Alaina"
            />
              
              <figcaption> Bombastic Billy </figcaption>
            </figure>
          </div>

          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src={clown2} alt="Edward"
            />
              
              <figcaption> Bubbly Bubba </figcaption>
            </figure>
          </div>

          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src={clown3} alt="Florence"
            />
              
              <figcaption> Colly the Clown </figcaption>
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

export default Clowns;