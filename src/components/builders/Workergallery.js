// this component was attempt at rendering all of the different categories in one component, using logic to decide which one. I failed, for now,
// so will just make a different component for each gallery catergory. Builders, Chefs, Designers, etc...
// eventually I need to figure out a way to make it work.

import React from "react";
import ReactDOM from "react-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Lightbox from "../../components/Lightbox.js";
import Bio from "../Bio";
import mark from '../../pics/mark.jpg'


class Workergallery extends React.Component {

constructor(props){
    super(props);
  }


  items = [1, 2, 3, 4, 5];


  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
    galleryItems: this.galleryItems()
  };

  slideTo = i => this.setState({ currentIndex: i });

// oninitialized was here but i removed it. see at bottom

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)} />;

  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    console.log("slide", e.slide)
  }

  galleryItems() {
    return this.items.map(i => <h2 key={i}> {i}</h2>);
  }

  render() {
    const whoseprofile = this.props.whoseprofile
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
          items={this.state.galleryItems}
          ref={el => (this.Carousel = el)}
          onSlideChange={this.onSlideChange}
          onInitialized={this.onInitialized}
        >
          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                 src={this.props.profilepic1} alt="profilepic1"
            />
              
              <figcaption> {this.props.caption1} </figcaption>
            </figure>
          </div>
          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src={this.props.profilepic2} alt="profilepic2"
            />
              
              <figcaption> {this.props.caption2}</figcaption>
            </figure>
          </div>
          <div className="Mypicsclass">
            <figure>
              <img
                className="carimages"
                src={this.props.profilepic3} alt="profilepic3"
            />
              
              <figcaption> {this.props.caption3}</figcaption>
            </figure>
          </div>
        </AliceCarousel>

        <div id="myelement" /> {/*this one is where the bio goes*/}
        <div id="mybotelement" />  {/*<Lightbox />*/}
      </div>
    );
  }
}

export default Workergallery;



  // onInitialized(e) {
  //   ReactDOM.render(
  //     <Bio
  //       bio={{
  //         firstName: "Mark",
  //         lastName: "Doe",
  //         rating: "\u2B50 \u2B50",
  //         phone: "605 784 8001",
  //         email: "Mark@gmail.com",
  //         blurb: "Hey I'm Mark and welcome to my bio"
  //       }}
  //     />,
  //     document.getElementById("myelement")
  //   );
  //   ReactDOM.render(
  //     <Lightbox iswho="Alan" />,
  //     document.getElementById("mybotelement")
  //   );
  // }