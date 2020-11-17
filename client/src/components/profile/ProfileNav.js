import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AuthService from '../../service/AuthService';
import { AuthContext } from '../../Context/AuthContext';

function ProfileNav() {
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
        history.push('/login');
      } else if (!data.success) {
        history.push('/login');
      }
    });
  };

  return (
    <nav className="profile__nav">
      <Link to="/profile/global">
        <button type="button" className="profile__home">GLOBAL</button>
      </Link>
      <Link to="/profile/MyPosts">
        <button type="button" className="profile__public">MYPOSTS</button>
      </Link>
      <Link to="/profile/create">
        <button type="button" className="profile__create">CREATE</button>
      </Link>
      <button type="button" className="profile__private" onClick={logoutHandler}>LOGOUT</button>
    </nav>
  );
}

export default ProfileNav;
