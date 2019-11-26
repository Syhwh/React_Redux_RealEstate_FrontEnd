
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';
import { logOutUser } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';

function SecondaryNavigation({ logOutUser }) {
  const { user, authLogOutUser } = useContext(AuthContext);

  const redirectToHome = () => {
    authLogOutUser();
    logOutUser()
  }
  return (<>
    <Nav className='justify-content-end '>
      {!user && <>
        <Nav.Item className='mr-3'>
          <Link className='nav-Link ' to='/login' >Login</Link>
        </Nav.Item>
        <Nav.Item className='mr-3'>
          <Link className='nav-Link ' to='/signup' >Signup</Link>
        </Nav.Item></>}
      {user && <>
        <Nav.Item className='mr-3'>
          <Link className='nav-Link ' to='/profile' >Profile</Link>
        </Nav.Item>
        <Nav.Item className='mr-3'>
          <Link className='nav-Link' to='/' onClick={redirectToHome}  >Logout</Link>
        </Nav.Item></>}
    </Nav>
  </>)
}
const mapDispatchToProps = { logOutUser }
export default connect(null, mapDispatchToProps)(SecondaryNavigation)