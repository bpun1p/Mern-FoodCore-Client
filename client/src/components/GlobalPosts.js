import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from './utils/LoadingIndicator';
import DashboardHeader from './dashboard/DashBoardHeader';
import '../assets/styles/Main.css';
import Post from './dashboard/Post';

import ReceipeService from '../service/ReceipeService';

function GlobalPosts() {
  const [AllReceipes, setAllReceipes] = useState([]);

  useEffect(() => {
    trackPromise(
      ReceipeService.getAllReceipes()
        .then((data) => {
          setAllReceipes(data);
        }),
    );
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
