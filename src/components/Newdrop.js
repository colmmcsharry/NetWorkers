import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Newdrop extends React.Component {
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
      const Dropstyle = {
  color: '#1B6EB0',
  backgroundColor:'white',
  margin:'0px',
  padding:'10px',
};
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle style={Dropstyle} caret>
          Find a Worker!
        </DropdownToggle>
        <DropdownMenu >
          <DropdownItem><Link to="/">Accountant</Link></DropdownItem>
          <DropdownItem><Link to="/">Barber</Link></DropdownItem>
          <DropdownItem><Link to="/builders">Builder</Link></DropdownItem>
          <DropdownItem><Link to="/">Chef</Link></DropdownItem>
          <DropdownItem><Link to="/testpage">Clown</Link></DropdownItem>
          <DropdownItem><Link to="/">Graphic Designer</Link></DropdownItem>
          <DropdownItem><Link to="/">Painter</Link></DropdownItem>
          <DropdownItem><Link to="/">Tattoo</Link></DropdownItem>
          <DropdownItem><Link to="/">Web Dev</Link></DropdownItem>
          
         
        </DropdownMenu>
      </Dropdown>
    );
  }
}


                                  