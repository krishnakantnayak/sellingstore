import { Navbar, Nav } from 'react-bootstrap';
import { Outlet  } from 'react-router-dom';
import {auth} from '../config/firebase';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '../redux/reducers/userReducer';


const MyNavbar = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const uselector=useSelector((state)=>state.user);

  const dispathSignout=useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

  }, []);

  const handlesignOutUser = () => {

    dispathSignout(signOutUser({auth:auth}));
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
            {console.log(uselector.user.success,"uselector",uselector)}
            {uselector.user.success && <Nav.Link className='flex-row-reverse' onClick={handlesignOutUser}>Signout</Nav.Link>}
            <Nav.Link>Cart</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        
      </Navbar>
      <Outlet/>
      </>
    );
  };
  
  export default MyNavbar;