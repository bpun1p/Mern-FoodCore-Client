import React from 'react';
import '../../assets/styles/Main.css';
import Header from './Header';
import HomeDetails from './HomeDetails';

function Home() {
  return (
    <div className="home">
      <Header />
      <HomeDetails />
    </div>
  );
}

export default Home;
