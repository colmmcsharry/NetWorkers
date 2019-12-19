import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blurb2 from '../Bio'
import Bio from '../Bio'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
export { AlainaBio, EdBio, FlorenceBio }



 const AlainaBio = {
          firstName: "Alaina",
          lastName: "Toop",
          rating: "\u2B50 \u2B50",
          phone: "605 784 8001",
          email: "A.toop@alainadesign.com",
          job: "designer",
          blurb: "blurb1",
          socials: <React.Fragment>
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faGithub} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} size="1x"/> </a>

        </React.Fragment>,
          
        };

  const EdBio  = {
            firstName: "Edward",
            lastName: "Smith",
            rating: "\u2B50 \u2B50 \u2B50 \u2B50",
            phone: "086 779 0230",
            email: "eddys@gmail.com",
            job: "designer",
            blurb: "blurb2",
            socials: <React.Fragment>
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faGithub} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} size="1x"/> </a>

        </React.Fragment>,
          
          };

const FlorenceBio = {firstName: "Florence",

            lastName: "Johnson",
            rating: "\u2B50 ",
            phone: "778 768 9982",
            email: "florenceJ@gmail.com",
            job: "designer",
            blurb:"blurb2",
            socials: <React.Fragment>
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faGithub} size="1x"/> </a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} size="1x"/> </a>

        </React.Fragment>,  
        
        }   
  

/*blurb: ["Hey I'm Alaina and welcome to my bio, I've been an artist and graphic designer for a long time now, I love to use Photoshop and other things like that. It's awesome to get paid to express my creativity.",
          " Sometimes I wish I could be a full time-artist, that's why I signed up with NetWorkers.",
          <br/>, <br/>, 
          "Hey I'm Alaina and welcome to my bio, I've been an artist and graphic designer for a long time",
          "Hey I'm Alaina and welcome to my bio, I've been an artist and graphic designer for a long time"
          ]  */   
/*blurb: ["Hey I'm Florence and welcome to my bio, I've been an artist and graphic designer for a long time now, I love to use Photoshop, Adobe Premiere, etc. It's awesome to get paid to express my creativity.",
          "I've always wanted to make a living from design, that's why I signed up with NetWorkers.",
          <br/>, <br/>, 
          "Choose me, I guarantee you'll be satisfied with the end product!",
          
          ]*/




                  