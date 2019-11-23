import React from "react";
import ReactDOM from "react-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Lightbox from "../../components/Lightbox.js";
import Bio from "../Bio";
import designer1 from '../../pics/designer1.jpg'
import designer2 from '../../pics/designer2.jpeg'
import designer3 from '../../pics/designer3.jpg'


class Designers extends React.Component {
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
        bio={{
          firstName: "Alaina",
          lastName: "Toop",
          rating: "\u2B50 \u2B50",
          phone: "605 784 8001",
          email: "A.toop@alainadesign.com",
          blurb: "Hey I'm Alaina and welcome to my bio"
        }}
      />,
      document.getElementById("myelement")
    );
    ReactDOM.render(
      <Lightbox iswho="designer1" />,
      document.getElementById("mybotelement")
    );
  }

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)} />;

  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    if (e.item === 2) {
      console.log("now its Alaina");
      ReactDOM.render(
        <Bio
          bio={{
            firstName: "Alaina",
          lastName: "Toop",
          rating: "\u2B50 \u2B50",
          phone: "605 784 8001",
          email: "A.toop@alainadesign.com",
          blurb: "Hey I'm Alaina and welcome to my bio"
          }}
        />,
        document.getElementById("myelement")
      );
      ReactDOM.render(
        <Lightbox iswho="designer1" />,
        document.getElementById("mybotelement")
      );
    } else if (e.item === 0) {
      console.log("now its Edward");
      ReactDOM.render(
        <Bio
          bio={{
            firstName: "Edward",
            lastName: "Smith",
            rating: "\u2B50 \u2B50 \u2B50 \u2B50",
            phone: "086 779 0230",
            email: "eddys@gmail.com",
            blurb: "Hey I'm Eddy and welcome to my bio"
          }}
        />,
        document.getElementById("myelement")
      );
      ReactDOM.render(
        <Lightbox iswho="designer2" />,
        document.getElementById("mybotelement")
      );
    } else if (e.item === 1) {
      console.log("now its Florence");
      ReactDOM.render(
        <Bio
          bio={{
            firstName: "Florence",
            lastName: "Johnson",
            rating: "\u2B50 ",
            phone: "778 768 9982",
            email: "florenceJ@gmail.com",
            blurb: "Hey I'm Florence and welcome to my bio"
          }}
        />,
        document.getElementById("myelement")
      );
      ReactDOM.render(
        <Lightbox iswho="designer3" />,
        document.getElementById("mybotelement")
      );
    }
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
                 src={designer1} alt="Alaina"
            />
              
              <figcaption> Alaina </figcaption>
            </figure>
          </div>
          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src={designer2} alt="Edward"
            />
              
              <figcaption> Edward</figcaption>
            </figure>
          </div>
          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src={designer3} alt="Florence"
            />
              
              <figcaption> Florence </figcaption>
            </figure>
          </div>
        </AliceCarousel>

        <div id="myelement" />
        <div id="mybotelement" />
      </div>
    );
  }
}

export default Designers;