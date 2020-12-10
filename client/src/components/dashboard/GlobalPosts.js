import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../Utils/LoadingIndicator';
import DashboardHeader from './DashboardHeader';
import '../../assets/styles/Main.css';
import Post from './Post';

import ReceipeService from '../../service/RecipeService';

function GlobalPosts() {
  const [AllReceipes, setAllReceipes] = useState([]);

  useEffect(() => {
    let isMounted = true;
    trackPromise(
      ReceipeService.getAllReceipes()
        .then((data) => {
          setAllReceipes(data);
        }),
    );
    // eslint-disable-next-line no-unused-vars
    return () => { isMounted = false; };
  }, []);

  return (
    <>
      <div className="profile">
        <DashboardHeader />
        <div className="createdposts">
          {AllReceipes.length !== 0
            ? AllReceipes.map((receipe) => <Post receipe={receipe} key={uuidv1()} />)
            : null}
          <LoadingIndicator />
        </div>
      </div>
    </>
  );
}

export default GlobalPosts;
