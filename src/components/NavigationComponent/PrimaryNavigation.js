import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap';
export function PrimaryNavigation() {
  return (
    <>

      <Navbar sticky="top" bg="light" variant="light" expand='lg' style={{ zIndex: 20 }}>
        <Container>
          <Navbar.Brand href='#home' className='dflex justify-content-center'>
            <img
              src='https://res.cloudinary.com/swgb/image/upload/v1574779280/LogoBlack_h2znvg.png'
              width="90"
              height="80"
              className="d-inline-block align-top"
              alt="logo"
            />
            {/* <div>Real Estate</div> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <NavItem className='mr-3'>
                <Link className='nav-Link' to='/'>Home</Link>
              </NavItem>
              <Nav.Item className='mr-3'>
                <Link className='nav-Link' to='/'>Find a Property</Link>
              </Nav.Item>
              <Nav.Item className='mr-3'>
                <Link to='/property'  >List a Property </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}