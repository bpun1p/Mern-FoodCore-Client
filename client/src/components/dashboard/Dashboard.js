import React, { useState, useEffect, useContext } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../utils/LoadingIndicator';
import DashboardHeader from './DashboardHeader';
import '../App.css';
import Post from './Post';
import CreateForm from '../create-recipe/CreateForm';
import RecipeService from '../../service/RecipeService';
import { AuthContext } from '../../context/AuthContext';

export default function Dashboard() {
  const { isAuthenticated } = useContext(AuthContext);
  const [allRecipes, setAllRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const currentUrl = window.location.pathname;

  useEffect(() => {
    if (currentUrl === '/dashboard/global') {
      trackPromise(
        RecipeService.getAllRecipes()
          .then((data) => {
            setAllRecipes(data);
          }),
      );
    } else if (currentUrl === '/dashboard/my-posts' && isAuthenticated === true) {
      trackPromise(
        RecipeService.getRecipes()
          .then((data) => {
            setMyRecipes(data);
          }),
      );
    }
  }, [currentUrl]);
  return (
    <>
      <div className="dashboard">
        <DashboardHeader />
        {currentUrl === '/dashboard/my-posts' && isAuthenticated !== true
          ? <h2 className="dashboard__unauthenticated-msg">Please Login To See Your Recipes</h2>
          : null}
        <div className="created-posts">
          {currentUrl === '/dashboard/global' && allRecipes.length !== 0
            ? allRecipes.map((recipe) => <Post recipe={recipe} key={uuidv1()} />)
            : null}
          {currentUrl === '/dashboard/my-posts' && myRecipes.length !== 0
            ? myRecipes.recipes.map((recipe) => <Post recipe={recipe} key={uuidv1()} />)
            : null}
          {myRecipes.recipes !== undefined && allRecipes !== 0 ? null : <LoadingIndicator />}
        </div>
        {currentUrl === '/dashboard/create' ? <CreateForm /> : null}
      </div>
    </>
  );
}
