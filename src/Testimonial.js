import React from 'react';
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-regular-svg-icons'
import  p1  from './pics/p1.png'
import  p2  from './pics/p2.png'
import  p3  from './pics/p3.png'
import { names } from './names'
import { pics } from './names'
import { pics2 } from './names'

    // <meta name="viewport" content="width=device-width, initial-scale=1">
    // <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">


function Testimonial (props) {


      var name1 = names[Math.floor(Math.random()*names.length)]
      var name2 = names[Math.floor(Math.random()*names.length)]
      var name3 = names[Math.floor(Math.random()*names.length)]
  
var randompic = pics[[Math.floor(Math.random()*pics.length)]]
var randompic2 = pics[[Math.floor(Math.random()*pics.length)]]
 var randompic3 = pics[[Math.floor(Math.random()*pics.length)]]

 var randompic4 = pics2[[Math.floor(Math.random()*pics2.length)]]




return (


<div className="mybasediv">
    <div className="testimonials">
      <div className="inner">
        <h1>Testimonials</h1>
        <div className="border"></div>

        <div className="roww">
          <div className="colum">
            <div className="testimonial">
              <img className="testimony" src={randompic} alt="person1"/>
              <div className="name">{name1}</div>
              <div className="stars">
              <React.Fragment>
                
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star"/>
                <FontAwesomeIcon icon="star"/>
                <FontAwesomeIcon icon={faStar} />
                                   </React.Fragment>
                
              </div>

              <p>
                So I have to say that {props.name} was a really good {props.job}. {props.pronoun} put in every effort to ensure I was happy with his work.
                {props.pronoun} was always happy to discuss things in-depth, even after the work day was over.
                <br/> <br/> I would have no hesitation in recommending {props.name} to a friend. At a cost of just {props.cost}, {props.pronoun} gives great bang for your buck! Give {props.name} a call!
              </p>
            </div>
          </div>

          <div className="colum">
            <div className="testimonial">
              <img src={randompic2} alt="person2"/>
              <div className="name">{name2}</div>
              <div className="stars">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star"/>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <p>
                I can honestly say that {props.name} was a really reliable and hardworking {props.job}. {props.pronoun} was always on time and showed up motivated and eager to work.
                <br/> <br/> {props.pronoun} is very affordable at just {props.cost} and I'm sure you'll think it's money well spent. 
                 
              </p>
            </div>
          </div>

          <div className="colum">
            <div className="testimonial">
              <img src={randompic4} alt="person3"/>
              <div className="name">{name3}</div>
              <div className="stars">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star"/>
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star"/>
              </div>

              <p>
                I've been hiring {props.job}s from NetWorkers for months, and I feel {props.name} is the best of the bunch!
                Every time I get in touch, {props.pronoun} responds promptly and is keen to please!
                <br/> <br/> {props.cost} was the asking price and I feel I got my money's worth! If you want the job
                done professionally and with the upmost attention to detail, get in touch with {props.name}


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
