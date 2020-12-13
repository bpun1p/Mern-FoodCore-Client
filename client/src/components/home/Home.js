import React from 'react';
import '../App.css';
import Header from './Header';
import HomeDetails from './HomeDetails';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <HomeDetails />
    </div>
  );
}