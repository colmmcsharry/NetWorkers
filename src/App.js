import React from "react";
import "./App.css";
import SocialFollow from './components/SocialFollow.js'
import { BrowserRouter as HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from './routes.js'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCheckSquare, faChevronDown, faMobileAlt, faEnvelope, faSearch} from '@fortawesome/free-solid-svg-icons';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'


library.add(faCoffee, faCheckSquare, faChevronDown, faMobileAlt, faEnvelope, fasFaStar, farFaStar, faSearch)



function App() {
  return (
    <React.Fragment>
    <HashRouter basename='/'>
    <div className="App">
      <div id ="content-wrap">
        <Navbar />
        <div className="Gallerywrapper">
        {routes}
          
        </div>
        </div>
<SocialFollow />
    </div>

</HashRouter>

</React.Fragment>
  )

 } 


export default App; 
/*Gallerywrapper is purely just CSS  and with some padding, for the main content, the carousel, forms, etc. it keeps the footer in place too*/