import React, { useState, useEffect } from 'react';
import '../../assets/styles/Main.css';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import EntryFooter from './EntryFooter';
import LoginForm from './LoginForm';
import FoodCoreLogo from '../../assets/logo/logo-white.svg';
import EntryDetails from './EntryDetails';

export default function Entry() {
  const [currentUrl, setCurrentUrl] = useState(window.location.href.slice(21, 30));

  useEffect(() => {
    let isMounted = true;
    if (currentUrl !== window.location.href) {
      setCurrentUrl(window.location.href.slice(21, 30));
    }
    // eslint-disable-next-line no-unused-vars
    return () => { isMounted = false; };
  });

  return (
    <>
      <Link to="/">
        <img className="entry__logo" alt="web main logo" src={FoodCoreLogo} />
      </Link>
      <div className="dualEntry">
        <div className="dualEntry__form">
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
        <EntryFooter />
      </div>
    </>
  );
}
