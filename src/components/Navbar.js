import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

 import Scroll from 'react-scroll-to-element';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
               <Scroll  type="class" element="home">
                 <NavLink>Home</NavLink>
               </Scroll>
              </NavItem>
              <NavItem>
                <Scroll  type="class" element="about" offset={-50} timeout={200}>
                  <NavLink>About</NavLink>
                </Scroll>
              </NavItem>
              <NavItem>
                <Scroll  type="class" element="services" offset={-60} timeout={200}>
                  <NavLink>Services</NavLink>
                </Scroll>
              </NavItem>
              <NavItem>
               <Scroll  type="class" element="contact" offset={-50} timeout={200}>
                <NavLink>Contact</NavLink>
               </Scroll>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
