import React from 'react';
import Proptypes from 'prop-types';
import { v1 as uuidv1 } from 'uuid';

function RecipeModal(props) {
  const { receipe } = props;

  const { popUpHandler } = props;
  return (
    <div className="magnify__container">
      <div className="magnify">
        <div className="maginify__header">
          <div className="magnify__img-container">
            <img className="magnify__img" data-testid="receipe-image" src={receipe.img} alt="" />
            <svg className="magnify__exit" data-testid="exit-modal-btn" onClick={popUpHandler} width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="magnify__exit-icon" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#13182C" />
            </svg>
          </div>
          <div className="magnify__receipe">
            <h1>{receipe.title}</h1>
          </div>
          <div className="magnify__description">
            <p>
              {' '}
              {receipe.description}
              {' '}
            </p>
          </div>
        </div>
        <div className="magnify__ingredients">
          <h3>INGREDIENTS</h3>
          <div className="add__option">
            <ul>
              {
              receipe.ingredients.map((ingredient) => <li key={uuidv1()}>{ingredient}</li>)
              }
            </ul>
          </div>
        </div>
        <div className="magnify__directions">
          <h3>INSTRUCTIONS</h3>
          <div className="addDirection__option">
            <ol>
              {
              receipe.instructions.map((instruction) => <li key={uuidv1()}>{instruction}</li>)
              }
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

RecipeModal.defaultProps = {
  receipe: Proptypes.instanceOf(Object).isRequired,
};

RecipeModal.propTypes = {
  receipe: Proptypes.shape({
    img: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    ingredients: Proptypes.instanceOf(Array).isRequired,
    instructions: Proptypes.instanceOf(Array).isRequired,

  }),
  popUpHandler: Proptypes.func.isRequired,
};

export default RecipeModal;
