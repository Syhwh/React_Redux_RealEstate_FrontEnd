import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';


function Profile({ user }) {
  console.log('user in profile')
  console.log(user)

  if (!user.profileComplete) return <Redirect to='/profile/edit' />

  return (
    <>
      <UserProfile id={user._id} />
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    user: store.user.user
  }
}

export default connect(mapStateToProps)(Profile)