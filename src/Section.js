import React from 'react';
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Section extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }

scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo() {
    scroller.scrollTo('myel', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <React.Fragment>
      
    <a className="test1" to="mytarget" onClick={() => this.scrollTo()}>
    <FontAwesomeIcon icon="chevron-down" style={{ color: "blue"}} />
          </a>
         </React.Fragment>
      
    );
  }
};

export default Section

// this page has all of the scroll functions from the react-scroll demo. i've deleted all the returns except the one I want, which is the element one.
