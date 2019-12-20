/*I have no need to make the dropdown and the items inside the navbar seperate components, as they will always be on screen, regardless of route*/

import logo from "../pics/networking.png";
import React from "react";
import { Link } from 'react-router-dom';
import Newdrop from "./Newdrop";
import Smalldrop from "./Smalldrop";
import NewdropSml from "./NewdropSml";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="Mynavbar">
        <div className="logocontainer">
          <Link to="/">
            <img src={logo} className="logo" alt="our logo"
            /> 
          </Link>
        </div>
        <span className="fullscreen"><div className="dropbar">
          <Newdrop />
        </div>
        </span>
            <span className="smallscreen"><div className="dropbar">
               <NewdropSml />
            </div>
            </span>
        <div className="hamburger">
          <Smalldrop />
        </div>
      </div>
    );
  }
}
