import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, NavItem, } from 'react-bootstrap';
export function PrimaryNavigation() {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Real State</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavItem className='mr-3'>
              <Link className='nav-Link' to='/'>Home</Link>
            </NavItem>
            <Nav.Item className='mr-3'>
              <Link className='nav-Link' to='/'>Find a Property</Link>
            </Nav.Item>
            {/* <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Item className='mr-3'>
              <Link to='/property'  >List a Property </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    </>
  )
}