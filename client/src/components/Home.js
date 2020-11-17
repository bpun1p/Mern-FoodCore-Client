import React from 'react';
import '../assets/styles/Main.css';
import Header from './home/Header';
import Main from './home/Main';

function Home() {
  return (
    <div className="home">
      <Header />
      <Main />
    </div>
  );
}

export default Home;
