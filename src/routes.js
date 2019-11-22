import React from "react";
import { Route } from 'react-router-dom'
import  Builders  from './components/builders/Builders.js'
import CGallery  from './components/CGallery'
import About  from './components/Otherpgs/About.js'
import Contact from  './components/Otherpgs/Contact.js'



export default [

<Route exact path="/" component={CGallery} />,
          
            <Route path="/about" component={About} />,
            <Route path="/contact" component={Contact} />,
            
            <Route path="/builders" component={Builders} />

            ]