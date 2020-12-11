import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
  const { popUpHandler } = props;

  return (
    <nav className="nav">
      <Link data-testid="login-btn" to="/login">
        <button type="button" className="nav__login">LOGIN</button>
      </Link>
      <Link to="/register">
        <button type="button" className="nav__register">SIGN UP</button>
      </Link>
      <Link to="/about-me">
        <button type="button" className="nav__about-me">ABOUT ME</button>
      </Link>
      <button type="button" data-testid="exit-nav-btn" className="close__nav" onClick={popUpHandler}>
        <svg alt="exit icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="nav__exit-icon" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#13182C" />
        </svg>
      </button>
    </nav>
  );
}

Navigation.propTypes = {
  popUpHandler: Proptypes.func.isRequired,
};
