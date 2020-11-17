import React from 'react';
import FBIcon from '../../assets/icons/facebook.png';
import GoogleIcon from '../../assets/icons/google.png';

function SocialSignIn() {
  return (
    <div className="socialSigin">
      <div className="facebook">
        <img className="facebook__icon" src={FBIcon} alt="facebook icon" />
        <p className="facebook__content">Continue with Facebook</p>
      </div>
      <div className="google">
        <img className="google__icon" src={GoogleIcon} alt="google icon" />
        <p className="google__content">Continue with google</p>
      </div>
    </div>
  );
}

export default SocialSignIn;
