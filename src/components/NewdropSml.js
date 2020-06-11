import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Dropstyle = {
  color: '#1B6EB0',
  backgroundColor:'white',
  margin:'0px',
  padding:'11px 9px',
  height: 'auto',
  border: '1px solid #1B6EB0'
}


export default class NewdropSml extends React.Component {
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
           <FontAwesomeIcon icon="search"  size="lg" />
        </DropdownToggle>
        <DropdownMenu right className = "mydrop">
          <DropdownItem tag={Link} to="/accountants" className="dropitems">Accountants</DropdownItem>
          <DropdownItem tag={Link} to="/builders" className="dropitems">Builders</DropdownItem>
          <DropdownItem tag={Link} to="/chefs" className="dropitems">Chefs</DropdownItem>
          <DropdownItem tag={Link} to="/clowns" className="dropitems">Clowns</DropdownItem>
          <DropdownItem tag={Link} to="/designers" className="dropitems">Graphic Designers</DropdownItem>
          <DropdownItem header style={{fontFamily:'quicksand', color: '#2e4c63'}}>More coming soon!</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    );
  }
}