import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CGallery from "./components/CGallery";
import Builders from "./components/builders/Builders";
import Designers from "./components/builders/Designers";
import About from "./components/Otherpgs/About";
import Contact from "./components/Otherpgs/Contact";
import { BrowserRouter as HashRouter, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from './routes.js'



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