/* eslint-disable */
import React from 'react';

import homeNav from '../../assets/images/groundwork/code/homeImages/home-nav.png';
import homeNavTest from '../../assets/images/groundwork/code/homeImages/home-nav-test.png';
import homeAuthentication from '../../assets/images/groundwork/code/homeImages/home-authcontext.png';
import homeAuthenticateService from '../../assets/images/groundwork/code/homeImages/home-authservice.png';
import verifyCookie from '../../assets/images/groundwork/code/homeImages/home-cookie-extractor.png';
import index from '../../assets/images/groundwork/code/homeImages/home-index-route.png';

import signupAuthService from '../../assets/images/groundwork/code/entryImages/entry-authservice.png';
import signupServerRoutes from '../../assets/images/groundwork/code/entryImages/entry-server-routes.png';
import signupForm from '../../assets/images/groundwork/code/entryImages/entry-signup-form.png';
import signupController from '../../assets/images/groundwork/code/entryImages/entry-signup-controller.png';
import signupTest from '../../assets/images/groundwork/code/entryImages/entry-signup-form-test.png';

import getRecipeAction from '../../assets/images/groundwork/code/dashboardImages/dashboard-getRecipe-action.png';
import dashboardNav from '../../assets/images/groundwork/code/dashboardImages/dashboard-nav.png';
import dashboardNavTest from '../../assets/images/groundwork/code/dashboardImages/dashboard-nav-test.png';
import dash from '../../assets/images/groundwork/code/dashboardImages/dashboard.png';
import dashboardTest from '../../assets/images/groundwork/code/dashboardImages/dashboard-test.png';

import postModal from '../../assets/images/groundwork/code/modalImages/post-modal.png';
import post from '../../assets/images/groundwork/code/modalImages/post.png';
import postTest from '../../assets/images/groundwork/code/modalImages/post-test.png';

import createRecipeForm from '../../assets/images/groundwork/code/createRecipeImages/create-recipe-form.png';
import createRecipeTest from '../../assets/images/groundwork/code/createRecipeImages/create-recipe-form-test.png';
import createController from '../../assets/images/groundwork/code/createRecipeImages/create-recipe-controller.png';
import createRecipeAction from '../../assets/images/groundwork/code/createRecipeImages/create-recipe-action.png';

import home from '../../assets/images/groundwork/cover-page.png';
import entryPage from '../../assets/images/groundwork/entry-form.png';
import createForm from '../../assets/images/groundwork/create-form.png';
import recipeModal from '../../assets/images/groundwork/recipe-modal.png';
import dashboardRecipes from '../../assets/images/groundwork/recipes.png';

export const appPageImages = [ home, entryPage, dashboardRecipes, recipeModal, createForm ] 

export const cover = { 
    'Navigation': homeNav,
    'Navigation.test': homeNavTest,
    'Authentication Provider': homeAuthentication,
    'Authentication Service': homeAuthenticateService,
    'Cookie Verifier': verifyCookie,
    'Index': index,
  }

export const entry = {
    'SignupForm': signupForm,
    'SignupForm.test': signupTest,
    'Registeration Service': signupAuthService,
    'Registration Server Route': signupServerRoutes,
    'Registration Server Controller': signupController,
  }

export const dashboard = {
    'Dashboard': dash,
    'Dashboard.test': dashboardTest,
    'Dashboard.Nav': dashboardNav,
    'Dashboard.Nav.test': dashboardNavTest,
    'GetRecipes Action': getRecipeAction,
  }

export const posts = {
    'Post': post,
    'Post.test': postTest,
    'Post Modal': postModal,
  }

export const createRecipe = {
    'CreateRecipeForm' : createRecipeForm,
    'CreateRecipeForm.test': createRecipeTest,
    'CreateRecipeForm Action': createRecipeAction,
    'CreateRecipeForm Server Controller' : createController,
  }