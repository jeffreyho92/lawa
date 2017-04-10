import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Lawa</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          {/*
            <Nav>
              <NavItem eventKey={2}  className=""><NavLink to="/about" isActive={false}>About</NavLink></NavItem>

              <Link to="/">
                <NavItem eventKey={1} className="active">Home</NavItem>
              </Link>
              <Link to="/Discover">
                <NavItem eventKey={2}>Discover</NavItem>
              </Link>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            */}
            <Nav>
              <li className={(this.props.active === "home")? "active" : ""}><NavLink to="/">Home</NavLink></li>
              <li className={(this.props.active === "discover")? "active" : ""}><NavLink to="/discover">Discover</NavLink></li>
              <li className={(this.props.active === "about")? "active" : ""}><NavLink to="/about">About</NavLink></li>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
