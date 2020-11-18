import React, { useState, useEffect } from 'react';
import '../assets/styles/Main.css';
import { Link } from 'react-router-dom';
import Media from 'react-media';
import EntryHeader from './entry/EntryHeader';
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
    <Media query="(max-width: 1079px)">
      {(matches) => (matches
        ? (
          <>
            <Link to="/">
              <img className="entry__logo" alt="web main logo" src={FCoreLogo} />
            </Link>
            <div className="entry">
              <EntryHeader url={currentUrl} />
              {currentUrl === '/login'
                ? <Login />
                : <SignUp />}
              <EntryFooter />
            </div>
          </>
        )
        : (
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
        ))}
    </Media>
  );
}

export default Entry;
