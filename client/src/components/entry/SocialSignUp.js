import React from 'react';
import facebookIcon from '../../assets/icons/facebook.png';
import googleIcon from '../../assets/icons/google.png';

export default function SocialSignUp() {
  return (
    <div className="social-sign-up">
      <div className="social-sign-up__container">
        <img src={facebookIcon} data-testid="facebook-icon" className="social-sign-up__facebook" alt="facebook icon" />
      </div>
      <div className="social-sign-up__container">
        <img src={googleIcon} data-testid="google-icon" className="social-sign-up__google" alt="google icon" />
      </div>
    </div>
  );
}
