import React from 'react';
import { Link } from 'react-router-dom';
import blacklogo from '../../assets/logo/logo-black.svg';

export default function AboutMe() {
  return (
    <>
      <div className="about-me">
        <Link to="/">
          <img src={blacklogo} data-testid="home-page-btn" className="about-me__logo" alt="foodcore logo" />
        </Link>
        <h1 className="aboutme__name">Barry Pun</h1>
        <h2>Email:</h2>
        <h4>bpun1p@gmail.com</h4>
        <h2>Github:</h2>
        <h4>https://github.com/bpun1p</h4>
        <h2>LinkedIn:</h2>
        <h4>https://www.linkedin.com/in/barry-pun-8b23451a3/</h4>
      </div>
    </>
  );
}
