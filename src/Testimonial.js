import React from 'react';
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-regular-svg-icons'
import  p1  from './pics/p1.png'
import  p2  from './pics/p2.png'
import  p3  from './pics/p3.png'

    // <meta name="viewport" content="width=device-width, initial-scale=1">
    // <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">


function Testimonial (props) {

return (


<div className="mybasediv">
    <div className="testimonials">
      <div className="inner">
        <h1>Testimonials</h1>
        <div className="border"></div>

        <div className="roww">
          <div className="colum">
            <div className="testimonial">
              <img className="testimony" src={p1} alt="person1"/>
              <div className="name">Mark Johnson</div>
              <div className="stars">
              <React.Fragment>
                
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star"/>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                                   </React.Fragment>
                
              </div>

              <p>
                So I have to say that {props.name} was really good. dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>

          <div className="colum">
            <div className="testimonial">
              <img src={p2} alt="person2"/>
              <div className="name">Sarah Goldman</div>
              <div className="stars">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star"/>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>

          <div className="colum">
            <div className="testimonial">
              <img src={p3} alt="person3"/>
              <div className="name">Emily Waterson</div>
              <div className="stars">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star"/>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>






)
}

export default Testimonial
