import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import FoodCoreLogo from '../../assets/logo/logo-white.svg';
import EntryDetails from './EntryDetails';

export default function Entry() {
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  useEffect(() => {
    if (currentUrl !== window.location.href) {
      setCurrentUrl(window.location.href.slice(21, 30));
    }
  });

  return (
    <>
      <Link to="/">
        <img className="entry__logo" alt="web main logo" src={FoodCoreLogo} />
      </Link>
      <div className="entry">
        <div className="entry__form">
          {currentUrl === '/register'
            ? (
              <>
                <SignUpForm />
                <EntryDetails url={currentUrl} />
                <LoginForm />
              </>
            )
            : (
              <>
                <LoginForm />
                <EntryDetails url={currentUrl} />
                <SignUpForm />
              </>
            )}
        </div>
      </div>
    </>
  );
}
