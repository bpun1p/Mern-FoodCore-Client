import React from 'react';
import FBIcon from '../../assets/icons/facebook.png';
import GoogleIcon from '../../assets/icons/google.png';

function SocialSignUp() {
  return (
    <div className="social-signup">
      <div className="social-signup__container">
        <img src={FBIcon} data-testid='facebookIcon' className="social-signup__facebook" alt="facebook icon" />
      </div>
      <div className="social-signup__container">
        <img src={GoogleIcon} data-testid='googleIcon' className="social-signup__google" alt="google icon" />
      </div>
    </div>
  );
}

export default SocialSignUp;
