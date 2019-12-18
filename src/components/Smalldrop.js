import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Dropstyle = {
  color: '#1B6EB0',
  backgroundColor:'white',
  margin:'0px',
  padding:'11px',
  height: 'auto',
  border: '1px solid #1B6EB0'
}


export default class Smalldrop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
      
;
    return (
      <Dropdown direction="down" size="sm" isOpen={this.state.dropdownOpen} toggle={this.toggle}> {/*this direction works*/}
        <DropdownToggle style={Dropstyle}>
          &#9776;
        </DropdownToggle>
        <DropdownMenu right> {/*so for some reason when I add the style to this one, the menu stops going left*/}
        
          
          <DropdownItem><Link to="/About">About</Link></DropdownItem>
          <DropdownItem><Link to="/Contact">Contact</Link></DropdownItem>
          <DropdownItem><Link to="/login">Sign Up / Log In</Link></DropdownItem>

          
          
         
        </DropdownMenu>
      </Dropdown>
    );
  }
}