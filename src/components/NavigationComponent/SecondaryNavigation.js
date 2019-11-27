
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';
import { logOutUser } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/userActions';
import { Nav, NavDropdown } from 'react-bootstrap';

function SecondaryNavigation({ logOutUser, userInfo }) {
  console.log('userInfo')
  console.log(userInfo)
  const { user, authLogOutUser } = useContext(AuthContext);

  useEffect(() => {
    getUser(user);

  }, []);

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
        <div className='mr-4 d-flex justify-content-center align-content-center'>
          {userInfo.image ?
            <img className="avatar headerAvatar pull-left" src={userInfo.image[0].url} alt="avatar" /> :
            <img className="avatar headerAvatar pull-left" src={'https://res.cloudinary.com/swgb/image/upload/v1574824276/avatar-placeholder_xuxksw.png'} alt="avatar" />
          }
          <NavDropdown className='d-flex align-content-center' title={userInfo.userGivenName} id="collasible-nav-dropdown">
            <NavDropdown.Item><Link className='nav-Link ' to='/profile/edit' >Settings</Link></NavDropdown.Item>
            <NavDropdown.Item className='nav-Link '><Link className='nav-Link ' to='/profile' >Profile</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className='nav-Link' to='/' onClick={redirectToHome}>Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
        {/* <Nav.Item className='mr-3'>
          <Link className='nav-Link ' to='/profile' >Profile</Link>
        </Nav.Item>
        <Nav.Item className='mr-3'>
          <Link className='nav-Link' to='/' onClick={redirectToHome}  >Logout</Link>
        </Nav.Item> */}
      </>}
    </Nav>
  </>)
}
const mapStateToProps = ({ user }) => {
  return {
    userInfo: user.user
  }
}
const mapDispatchToProps = { logOutUser, getUser }
export default connect(mapStateToProps, mapDispatchToProps)(SecondaryNavigation)