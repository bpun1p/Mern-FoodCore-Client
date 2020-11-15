import React, {useState, useEffect} from 'react';
import {trackPromise} from 'react-promise-tracker';
import LoadingIndicator from './utils/LoadingIndicator';
import ProfileHeader from './profile/ProfileHeader';
import '../assets/styles/Main.css';
import Post from './profile/Post';
import ReceipeService from '../service/ReceipeService';

function GlobalPosts(props) {
  const [AllReceipes, setAllReceipes] = useState([]);

  useEffect(() => {
    let isMounted = true;
    trackPromise(
    ReceipeService.getAllReceipes()
      .then(data => {
        isMounted && setAllReceipes(data);
      }));
      return () => {isMounted = false}
  }, []);

  return (
    <>
      <div className='profile'>
        <ProfileHeader/>
        <div className='createdposts'>
          {AllReceipes.length !== 0 ?
            AllReceipes.map((receipe, index) => 
              <Post receipe={receipe} key={index}/>) 
            :
            null
          }
          <LoadingIndicator/>
        </div> 
      </div>
  </>
  );
};

export default GlobalPosts;