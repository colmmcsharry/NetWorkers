import React from "react";
import { Route } from 'react-router-dom'
import  Builders  from './components/occupations/Builders.js'
import CGallery  from './components/CGallery'
import About  from './components/Otherpgs/About.js'
import Contact from  './components/Otherpgs/Contact.js'
import  Clowns  from './components/occupations/Clowns.js'
import  Chefs  from './components/occupations/Chefs.js'
import  Designers  from './components/occupations/Designers.js'
import  Accountants  from './components/occupations/Accountants.js'
import Login from './components/Otherpgs/Login'
import Testimonial from './components/Testimonial.js'


export default [

<Route key="home" exact path="/" component={CGallery} />,
<Route key="mainhome" exact path="/NetWorkers" component={CGallery} />,
            <Route key="about" path="/about" component={About} />,
            <Route key="login" path="/login" component={Login} />,
            <Route key="clowns" path="/clowns" component={Clowns} />,
            <Route key="Chefs" path="/Chefs" component={Chefs} />,
            <Route key="Contact" path="/Contact" component={Contact} />,
            <Route key="builders" path="/builders" component={Builders} />,
            <Route key="designers" path="/designers" component={Designers} />,
            <Route key="accountants" path="/accountants" component={Accountants} />,

            ]