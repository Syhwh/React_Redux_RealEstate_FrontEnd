import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import apiRE from './ApiConfiguration';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // define state hooks
  const [user, setUser] = useState(false);
  const history = useHistory();

  //hooks first time run
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return history.push('/');
    apiRE.post('/verify', null, {
      headers: {
        authorization: token
      }
    })
      .then(({ data }) => setUser(data))
      .catch(() => history.push('/'))
  }, []);

  function authLoginUser() {
    setUser(true)
  }
  function authLogOutUser() {
    setUser(false)
  }
  return (
    <AuthContext.Provider value={{
      user,
      authLoginUser,
      authLogOutUser
    }}>
      {children}
    </AuthContext.Provider>
  )

}