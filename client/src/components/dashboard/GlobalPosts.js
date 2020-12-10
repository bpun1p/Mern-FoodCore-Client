import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../Utils/LoadingIndicator';
import DashboardHeader from './DashboardHeader';
import '../../assets/styles/Main.css';
import Post from './Post';

import RecipeService from '../../service/RecipeService';

export default function GlobalPosts() {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    trackPromise(
      RecipeService.getAllRecipes()
        .then((data) => {
          setAllRecipes(data);
        }),
    );
  }, []);

  return (
    <>
      <div className="dashboard">
        <DashboardHeader />
        <div className="created-posts">
          {allRecipes.length !== 0
            ? allRecipes.map((recipe) => <Post recipe={recipe} key={uuidv1()} />)
            : null}
          <LoadingIndicator />
        </div>
      </div>
    </>
  );
}
