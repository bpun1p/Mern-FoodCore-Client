import React, { useState } from 'react';
import Proptypes from 'prop-types';
import RecipeModal from '../Modal/RecipeModal';

export default function Post(props) {
  const [isPopUp, setPopUp] = useState(false);
  const { receipe } = props;

  const popUpHandler = () => {
    setPopUp(!isPopUp);
  };

  const postImage = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${receipe.img})`,
  };

  return (
    <>
      <div className="card__container" data-testid="Post-Card" onClick={popUpHandler} onKeyDown={popUpHandler} role="button" tabIndex={0}>
        <div className="card" data-testid="Post-Image" style={postImage}>
          <div className="card__description">
            <h1 className="card__name" data-testid="Receipe-Title">
              {receipe.title}
            </h1>
            <h3 className="card__author" data-testid="Receipe-Author">
              By
              <br />
              {receipe.author}
            </h3>
          </div>
        </div>
      </div>
      {isPopUp === true
        ? <RecipeModal popUpHandler={popUpHandler} receipe={receipe} />
        : null}
    </>
  );
}

Post.propTypes = {
  receipe: Proptypes.instanceOf(Object).isRequired,
};
