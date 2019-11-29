import React from "react";
import "./App.css";
import CGallery from "./components/CGallery";
import Builders from "./components/builders/Builders";
import Designers from "./components/builders/Designers";
import About from "./components/Otherpgs/About";
import Contact from "./components/Otherpgs/Contact";
import { BrowserRouter as HashRouter, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from './routes.js'
import { Link as Link2, animateScroll as scroll } from "react-scroll";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheckSquare, faChevronDown, faMobileAlt, faEnvelope  } from '@fortawesome/free-solid-svg-icons';



library.add(faCoffee, faCheckSquare, faChevronDown, faMobileAlt, faEnvelope)



function App() {
  return (
    <HashRouter basename='/'>
    <div className="App">
      
        <Navbar />
        
        <div className="Gallerywrapper">
        {routes}
          
        </div>
        
      
    </div>
</HashRouter>
  )

 } 


export default App; 

// <Galrender iswhom={Alphotos} />