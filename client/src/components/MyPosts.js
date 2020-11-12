import React, {useState, useEffect} from 'react';
import {trackPromise} from 'react-promise-tracker';
import LoadingIndicator from './utils/LoadingIndicator';
import ProfileHeader from './profile/ProfileHeader';
import '../assets/styles/Main.css';
import Post from './profile/Post';
import ReceipeService from '../service/ReceipeService';

function MyPosts() {
  const [ReceipeData, setReceipeData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    trackPromise(
    ReceipeService.getReceipes()
      .then(data => {
        isMounted && setReceipeData(data);
      }));
        return () => {isMounted = false}
  }, []);

  return (
    <>
      <div className='profile'>
        <ProfileHeader/>
        <div className='createdposts'>
          {ReceipeData.length !== 0 ?
            ReceipeData.receipes.map((receipe, index) => <Post receipe={receipe} key={index}/>) 
            :
            null
          }
          <LoadingIndicator/>
        </div> 
      </div>
  </>
  );
};

export default MyPosts;
