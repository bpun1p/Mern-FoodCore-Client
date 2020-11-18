import React from 'react';
import '../assets/styles/Main.css';
import Header from './home/Header';
import Center from './home/Center';

function Home() {
  return (
    <div className="home">
      <Header />
      <Center />
    </div>
  );
}

export default Home;
