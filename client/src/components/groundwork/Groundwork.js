/* eslint-disable */
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { v1 as uuidv1 } from 'uuid';

import home from '../../assets/images/groundwork/cover-page.png';
import entryPage from '../../assets/images/groundwork/entry-form.png';
import createForm from '../../assets/images/groundwork/create-form.png';
import recipeModal from '../../assets/images/groundwork/recipe-modal.png';
import recipes from '../../assets/images/groundwork/recipes.png';

import homeDetails from '../../assets/images/groundwork/code/homeImages/home-details.png';
import homeDetailsTest from '../../assets/images/groundwork/code/homeImages/home-details-test.png';
import homeNav from '../../assets/images/groundwork/code/homeImages/home-nav.png';
import homeNavTest from '../../assets/images/groundwork/code/homeImages/home-nav-test.png';
import homeAuthentication from '../../assets/images/groundwork/code/homeImages/home-authcontext.png';
import homeAuthenticateService from '../../assets/images/groundwork/code/homeImages/home-authservice.png';
import homeAuthProvider from '../../assets/images/groundwork/code/homeImages/index-routes.png';
import homeAuthController from '../../assets/images/groundwork/code/homeImages/home-controller.png';

import SignupAuthService from '../../assets/images/groundwork/code/entryImages/entry-authservice.png';
import SignupServerRoutes from '../../assets/images/groundwork/code/entryImages/entry-server-routes.png';
import Signup1 from '../../assets/images/groundwork/code/entryImages/entry-signup-1.png';
import Signup2 from '../../assets/images/groundwork/code/entryImages/entry-signup-2.png';
import SignupController from '../../assets/images/groundwork/code/entryImages/entry-signup-controller.png';
import SignupSchema from '../../assets/images/groundwork/code/entryImages/entry-signup-schema.png';
import SignupTest1 from '../../assets/images/groundwork/code/entryImages/entry-signup-test-1.png';
import SignupTest2 from '../../assets/images/groundwork/code/entryImages/entry-signup-test-2.png';

import getAllRecipesAuthService from '../../assets/images/groundwork/code/dashboardImages/dashboard-authservice-getAllRecipes.png';
import getRecipesAuthService from '../../assets/images/groundwork/code/dashboardImages/dashboard-authservice-getRecipes.png';
import logoutService from '../../assets/images/groundwork/code/dashboardImages/dashboard-authservice-logout.png';
import cookieVerification from '../../assets/images/groundwork/code/dashboardImages/dashboard-cookieCheck.png';
import recipesController from '../../assets/images/groundwork/code/dashboardImages/dashboard-recipes-controller.png';
import logoutController from '../../assets/images/groundwork/code/dashboardImages/dashboard-logout-controller.png';
import dashboardNav from '../../assets/images/groundwork/code/dashboardImages/dashboard-nav.png';
import dashboardNavTest from '../../assets/images/groundwork/code/dashboardImages/dashboard-nav-test.png';
import dashboard from '../../assets/images/groundwork/code/dashboardImages/dashboard.png';

import postModal from '../../assets/images/groundwork/code/modalImages/post-modal.png';
import post from '../../assets/images/groundwork/code/modalImages/post.png';
import postTest from '../../assets/images/groundwork/code/modalImages/post-test.png';

import createForm1 from '../../assets/images/groundwork/code/createRecipeImages/create-recipe-1.png';
import createForm2 from '../../assets/images/groundwork/code/createRecipeImages/create-recipe-2.png';
import createForm3 from '../../assets/images/groundwork/code/createRecipeImages/create-recipe-3.png';
import createController from '../../assets/images/groundwork/code/createRecipeImages/create-recipe-controller.png';
import createRecipeService from '../../assets/images/groundwork/code/createRecipeImages/create-recipe-service.png';
import createFormTest1 from '../../assets/images/groundwork/code/createRecipeImages/create-recipe-test-1.png';
import createFormTest2 from '../../assets/images/groundwork/code/createRecipeImages/create-recipe-test-2.png';
import createFormTest3 from '../../assets/images/groundwork/code/createRecipeImages/create-recipe-test-3.png';




export default function Groundwork() {
  const codeBaseHome = [ homeDetails, homeDetailsTest, homeNav, homeNavTest, homeAuthentication, homeAuthenticateService, homeAuthController, homeAuthProvider ];
  const codeBaseEntry = [ Signup1, Signup2, SignupTest1, SignupTest2, SignupAuthService, SignupServerRoutes, SignupController, SignupSchema ];
  const codeBaseDashboard = [ cookieVerification, dashboard, dashboardNav, dashboardNavTest, getAllRecipesAuthService, getRecipesAuthService, recipesController, logoutService, logoutController ];
  const codeBaseModal = [ post, postModal, postTest ];
  const codeBaseCreate = [ createForm1, createForm2, createForm3, createFormTest1, createFormTest2, createFormTest3, createRecipeService, createController ];

  
  const [isPopUp, setPopUp] = useState(false);
  const [isImage, setImage] = useState(false)

  const togglePopUp = (event) => {
    const image = event.target.id;
    if (image === 'home')
      setImage(codeBaseHome);
      else if (image === 'entry')
        setImage(codeBaseEntry);
      else if (image === 'recipes')
        setImage(codeBaseDashboard);
      else if (image === 'modal')
        setImage(codeBaseModal)
      else if (image === 'create-recipe')
        setImage(codeBaseCreate)
    setPopUp(!isPopUp);
  };

  return (
    <> 
      <div className="groundworks">
      <Link to="/">
        <svg className="header__logo" data-testid="foodcore-logo" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 95 118.75">
          <path className="fork" d="M82.538,19.052c-0.724-0.418-1.649-0.17-2.067,0.555l-9.174,15.889c-0.469,0.813-1.508,1.09-2.318,0.623   c-0.813-0.471-1.092-1.51-0.623-2.32l9.174-15.889c0.461-0.799,0.188-1.82-0.611-2.281c-0.799-0.463-1.821-0.189-2.282,0.609   l-9.174,15.891c-0.468,0.811-1.507,1.09-2.318,0.621c-0.813-0.469-1.09-1.508-0.622-2.32l9.174-15.889   c0.461-0.799,0.188-1.82-0.611-2.281s-1.821-0.188-2.282,0.611l-9.174,15.889c-0.468,0.811-1.505,1.092-2.319,0.621   c-0.812-0.469-1.09-1.508-0.622-2.318l9.174-15.891c0.418-0.723,0.17-1.648-0.554-2.066c-0.723-0.418-1.648-0.17-2.066,0.555   L51.605,29.81c-2.657,4.604-1.749,10.273,1.852,13.85L29.828,79.735c-0.927,1.605,1.655,4.832,2.962,5.588   c1.307,0.754,5.392,1.377,6.319-0.229l19.428-38.502c4.898,1.33,10.263-0.719,12.92-5.32L83.092,21.12   C83.51,20.396,83.263,19.472,82.538,19.052z" />
          <path className="knife" d="M38.109,63.44l4.128-6.302l-1.113-1.929L30.695,37.147L15.609,11.017c-13.116,7.574,11.02,52.563,11.02,52.563l8.671-5.006   L38.109,63.44z" />
          <path className="knife-handle" d="M49.29,69.354l-3.622,7.178l4.553,7.886c0.93,1.607,2.985,2.16,4.594,1.232c1.609-0.93,2.16-2.986,1.23-4.596L49.29,69.354   z" />
          <text x="" y="110" fill="#fff" fontSize="20px" fontWeight="bold" text-align="center" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">FoodCore</text>
        </svg>
      </Link>
        <h1 className="groundworks__header">GROUNDWORKS</h1>
        <h3 className="groundworks__heading">(Click to view sample code base)</h3>
        <ul className="groundworks__container">
          <li className="groundworks__sub-container">
            <img
              src={home}
              alt="cover page"
              className="groundworks__image" 
              onClick={togglePopUp}
              id="home"
            />
            </li>
            <li className="groundworks__sub-container">
              <img
                src={entryPage}
                alt="entry page"
                className="groundworks__image" 
                onClick={togglePopUp}
                id="entry"
              />
            </li>
            <li className="groundworks__sub-container">
              <img
                src={recipes}
                alt="all recipes page"
                className="groundworks__image" 
                onClick={togglePopUp}
                id="recipes"
              />
            </li>
            <li className="groundworks__sub-container">
              <img
                src={recipeModal}
                alt="modal of recipe"
                className="groundworks__image" 
                onClick={togglePopUp}
                id="modal"
              />
            </li>
            <li className="groundworks__sub-container">
              <img
                src={createForm}
                alt="create recipe form"
                className="groundworks__image" 
                onClick={togglePopUp}
                id="create-recipe"
              />
          </li>
        </ul>
      </div>
      {isPopUp ?
        <div className="groundworks__code-container">
            <svg className="modal__exit" data-testid="exit-modal-btn" onClick={togglePopUp} width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="modal__exit-icon" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#13182C" />
            </svg>
            <ul className="groundworks__code-image-container">
                {isImage.map(image => <li><img src={image} key={uuidv1()} className="groundworks__code"/></li>)}
            </ul> 
        </div>
      : null}
    </>
  );
}