import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { AuthContext } from '../../utils/AuthContext';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../../redux/actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faPinterest, faYoutube, faDribbble } from '@fortawesome/free-brands-svg-icons';

function UserProfile({ id, location, getUser, userInfo }) {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    // if (location.state) {
    //   const { id } = location.state;
    //   console.log('id: ', id)
    // }
    getUser(id);
    console.log(userInfo)
  }, []);

  return (<>

    <div className='container'>
      <div className='row offset-3'>
        <div className="col-xl-8 order-xl-12 order-xl-2 order-2">
          <div className="agent-details-wrapper">
            <div className="row mb-50">
              <div className="col-lg-5 col-md-6 col-sm-5">
                <img src={userInfo.image[0].url} alt="..." className="img-responsive" />
              </div>
              <div className="col-lg-7 col-md-6 col-sm-7">
                <div className="agent-details">
                  <h3>{userInfo.userGivenName} {userInfo.userFamilyName}</h3>
                  <ul className="address-list">
                    {/* <li><span>Company:</span>Zillion Properties.</li>
                    <li><span>Title:</span>Real estate Agent</li> */}
                    <li><span>Office:</span>   {userInfo.userContact.officePhone} </li>
                    <li><span> Mobile:</span> {userInfo.userContact.mobilePhone} </li>
                    <li><span>Email:</span>{userInfo.userEmail}</li>
                    <li><span>Skype:</span>{userInfo.userContact.skypeId}</li>
                  </ul>
                  <ul className="social-buttons style1">
                    <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
                  </ul>
                </div>
              </div>
              {user && <button className='btn btn-secondary'>EDIT PROFILE</button>}
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="agent-bio">
                  <h3>About Me</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.
                    Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae
                    lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis
                    fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum
                    facilisis massa, a consequat purus viverra a.
                                    </p>
                  <p>
                    Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis
                    lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi
                                        varius, nulla sit amet rutrum elementum</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </>)
}

const mapStateToProps = ({ user }) => {

  return {
    userInfo: user.user
  }
}
const mapDispatchToProps = { getUser }
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)