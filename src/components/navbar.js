import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Outlet,NavLink  } from 'react-router-dom';


const MyNavbar = () => {
    return (
      <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">sellingstore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href='home'>
              Home
            </Nav.Link>
            <Nav.Link href='products'>Sell</Nav.Link>
            
            <Nav.Link className='flex-row-reverse' href="#profile">Profile</Nav.Link>
            <Nav.Link>Cart</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        
      </Navbar>
      <Outlet/>
      </>
    );
  };
  
  export default MyNavbar;