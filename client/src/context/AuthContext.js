import React, { createContext, useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import AuthService from '../service/AuthService';

export const AuthContext = createContext();

const authenticator = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AuthService.isAuthenticated().then((data) => {
      setUser(data.user);
      setIsAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    });
  }, []);
  return (
    <div>
      {!isLoaded
        ? <h1>Loading</h1>
        : (
          <AuthContext.Provider value={{
            user, setUser, isAuthenticated, setIsAuthenticated,
          }}
          >
            {children}
          </AuthContext.Provider>
        )}
    </div>
  );
};

authenticator.propTypes = {
  children: Proptypes.instanceOf(Object).isRequired,
};

export default authenticator;
