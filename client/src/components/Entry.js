import React, { useState, useEffect } from 'react';
import '../assets/styles/Main.css';
import { Link } from 'react-router-dom';
import SignUp from './entry/SignUpForm';
import EntryFooter from './entry/EntryFooter';
import Login from './entry/LoginForm';
import FCoreLogo from '../assets/logo/logo-white.svg';
import DualEntry from './entry/DualEntry';

function Entry() {
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
        <img className="entry__logo" alt="web main logo" src={FCoreLogo} />
      </Link>
      <div className="dualEntry">
        <div className="dualEntry__form">
          {currentUrl === '/register'
            ? (
              <>
                <SignUp />
                <DualEntry url={currentUrl} />
                <Login />
              </>
            )
            : (
              <>
                <Login />
                <DualEntry url={currentUrl} />
                <SignUp />
              </>
            )}
        </div>
        <EntryFooter />
      </div>
    </>
  );
}

export default Entry;
