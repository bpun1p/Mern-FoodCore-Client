import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { trackPromise } from 'react-promise-tracker';
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
        .then((data) => {
          setReceipeData(data);
        }),
    );
    // eslint-disable-next-line no-unused-vars
    return () => { isMounted = false; };
  }, []);

  return (
    <>
      <div className="profile">
        <ProfileHeader />
        <div className="createdposts">
          {ReceipeData.length !== 0
            ? ReceipeData.receipes.map((receipe) => <Post receipe={receipe} key={uuidv1()} />)
            : null}
          <LoadingIndicator />
        </div>
      </div>
    </>
  );
}

export default MyPosts;
