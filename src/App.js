import React from "react";
import "./App.css";
import CGallery from "./components/CGallery";
import Builders from "./components/occupations/Builders";
import Designers from "./components/occupations/Designers";
import About from "./components/Otherpgs/About";
import Contact from "./components/Otherpgs/Contact";
import SocialFollow from './SocialFollow.js'
import { BrowserRouter as HashRouter, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from './routes.js'
import { Link as Link2, animateScroll as scroll } from "react-scroll";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheckSquare, faChevronDown, faMobileAlt, faEnvelope, faStar as solidstar  } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { faAd } from '@fortawesome/free-solid-svg-icons'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedIn
} from "@fortawesome/free-brands-svg-icons";

library.add(faCoffee, faCheckSquare, faChevronDown, faMobileAlt, faEnvelope, fasFaStar, farFaStar)



function App() {
  return (
    <HashRouter basename='/'>
    <div className="App">
      
        <Navbar />
        <div className="Gallerywrapper">
        {routes}
          
        </div>
        
      <SocialFollow />
    </div>
</HashRouter>
  )

 } 


export default App; 
/*Gallerywrapper is purely just CSS  and with some padding, for the main content, the carousel, forms, etc. it keeps the footer in place too*/