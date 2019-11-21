import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CGallery from "./components/CGallery";
import Builders from "./components/builders/Builders";
import About from "./components/Otherpgs/About";
import Contact from "./components/Otherpgs/Contact";
import { BrowserRouter as HashRouter, Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-grid-gallery";
import Lightbox from "./Lightbox";
import photos from "./photos";
import Galrender from './Galrender.js'


function App() {
  return (
    <HashRouter basename='/'>
    <div className="App">
      
        <Navbar />
        
        <div className="Gallerywrapper">
        <Route exact path="/" component={CGallery} />
          
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            
            <Route path="/builders" component={Builders} />
          
        </div>
      
    </div>
</HashRouter>
  );
}

export default App;

// <Galrender iswhom={Alphotos} />