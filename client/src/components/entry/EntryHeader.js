import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

function EntryHeader(props) {
  const { url } = props;

  return (
    <>
      <div className="entryheader">
        <div className="entryheader__header">
          {url === '/login'
            ? (
              <>
                <h1 className="entryheader__header">Login</h1>
                <h3>
                  Don&apos;t have an account?
                  <Link to="/register">
                    <button type="button" className="entryheader__login-btn">Sign Up</button>
                  </Link>
                </h3>
              </>
            )
            : (
              <>
                <h1 className="entryheader__header">Sign Up</h1>
                <h3>
                  Already have an account?
                  <Link to="/login">
                    <button type="button" className="entryheader__login-btn">Log In</button>
                  </Link>
                </h3>
              </>
            )}
        </div>
      </div>
    </>
  );
}

EntryHeader.propTypes = {
  url: Proptypes.string.isRequired,
};

export default EntryHeader;
