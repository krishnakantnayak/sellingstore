import { Navbar, Nav } from 'react-bootstrap';
import { Outlet  } from 'react-router-dom';
import {auth} from '../config/firebase';
import { useEffect, useState } from 'react';


const MyNavbar = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const signOutUser = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };
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
            {currentUser && <Nav.Link className='flex-row-reverse' onClick={signOutUser}>Signout</Nav.Link>}
            <Nav.Link>Cart</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        
      </Navbar>
      <Outlet/>
      </>
    );
  };
  
  export default MyNavbar;