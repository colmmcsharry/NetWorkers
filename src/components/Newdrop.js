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
  border: '1px solid #1B6EB0'
};
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle style={Dropstyle} caret style={Dropstyle}>
          Find a Worker!
        </DropdownToggle>
        <DropdownMenu >
          <DropdownItem><Link to="/accountants">Accountant</Link></DropdownItem>
          <DropdownItem><Link to="/builders">Builder</Link></DropdownItem>
          <DropdownItem><Link to="/chefs">Chef</Link></DropdownItem>
          <DropdownItem><Link to="/clowns">Clown</Link></DropdownItem>
          <DropdownItem><Link to="/designers">Graphic Designer</Link></DropdownItem>
          <DropdownItem>More coming soon!</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    );
  }
}


                                  