import React from 'react'
import ReactDOM from "react-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Lightbox from "../../components/Lightbox.js";
import Bio from '../Bio.js'
import accountant from '../../pics/accountant.jpeg'
import accountant2copy from '../../pics/accountant2copy.jpg'
import accountant3 from '../../pics/accountant3.jpg'
import accountanthq from '../../pics/accountanthq.jpg'
import {  Element  } from 'react-scroll'
import { JohnBio, BillBio, JillBio } from './AllBios.js'



class Accountants extends React.Component {
  items = [1, 2, 3, 4, 5];

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
    galleryItems: this.galleryItems()
  };

  slideTo = i => this.setState({ currentIndex: i });

  onInitialized(e) {
    ReactDOM.render(
      <Bio bio={JohnBio} />,
      document.getElementById("bioelement")
    );
    ReactDOM.render(
      <Lightbox iswho="John" />,
      document.getElementById("mybotelement")
    );
  }

  onSlideChanged = e => {this.setState({ currentIndex: e.item });

if (e.item === 0) {
      
      ReactDOM.render(
        <Bio bio={JohnBio} />,
        document.getElementById("bioelement")
      );
      ReactDOM.render(
        <Lightbox iswho="designer1" />,
        document.getElementById("mybotelement")
      );
    } else if (e.item === 1) {
      
      ReactDOM.render(
        <Bio
          bio={JillBio}
        />,
        document.getElementById("bioelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Jill" />,
        document.getElementById("mybotelement")
      );
    } else if (e.item === 2) {
      
      ReactDOM.render(
        <Bio
          bio={BillBio} />,
        document.getElementById("bioelement")
      );
      ReactDOM.render(
        <Lightbox iswho="Bill" />,
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
                 src={accountanthq} alt="John"
            />
              
              <figcaption> John </figcaption>
            </figure>
          </div>

          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src={accountant2copy} alt="Jill"
            />
              
              <figcaption> Jill</figcaption>
            </figure>
          </div>

          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src={accountant3} alt="Bill"
            />
              
              <figcaption> Bill </figcaption>
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

export default Accountants;
