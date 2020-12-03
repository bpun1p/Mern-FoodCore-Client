import React, { useState, useContext } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { useHistory } from 'react-router-dom';
// import imageCompression from 'browser-image-compression';
import AddIngredient from './AddIngredient';
import AddInstruction from './AddInstruction';
import ReceipeService from '../../service/ReceipeService';
import { AuthContext } from '../../context/AuthContext';
import imageCompressor from '../utils/ImageCompressor';
import ToBase64 from '../utils/ToBase64';

function CreateForm() {
  const [isDisplay, setDisplay] = useState('');
  const [ingredientInputed, setIngredientInputed] = useState(true);
  const [instructionInputed, setInstructionInputed] = useState(true);
  const [errorForm, setErrorForm] = useState('');

  const [ingredientsElem, setIngredientsElem] = useState([]);
  const [instructionsElem, setInstructionsElem] = useState([]);
  const [isSelectedFile, setSelectedFile] = useState('');
  const [receipe, setReceipe] = useState({
    title: '', description: '', ingredients: '', instructions: '', img: '', author: '',
  });

  const resetForm = () => {
    setReceipe({
      title: '',
      description: '',
      ingredients: '',
      instructions: '',
    });
  };

  const authContext = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    if (ingredientsElem.length !== 0 && instructionsElem.length !== 0) {
      ReceipeService.postReceipe(
        {
          ...receipe,
          ingredients: ingredientsElem,
          instructions: instructionsElem,
          img: isSelectedFile,
          author: user.username,
        },
      )
        .then((data) => {
          resetForm();
          if (!data.message.msgError) {
            ReceipeService.postAllReceipes(
              {
                ...receipe,
                ingredients: ingredientsElem,
                instructions: instructionsElem,
                img: isSelectedFile,
                author: user.username,
              },
            )
              .then(() => history.push('/profile/global'));
          } else if (data.message.msgBody === 'UnAuthorized') {
            authContext.setUser({ username: '' });
            authContext.setIsAuthenticated(false);
          } else setErrorForm('error in form, please try again later');
        });
    } else {
      setErrorForm('Please fill in all feilds');
    }
  };

  function imageFileHandler(event) {
    const file = event.target.files[0];
    imageCompressor(file).then((compressedFile) => {
      setDisplay(compressedFile);
      ToBase64(compressedFile).then((data) => setSelectedFile(data));
    }).catch(() => setErrorForm('unable to convert image file'));
  }

  const onChange = (event) => {
    setReceipe({ ...receipe, [event.target.name]: event.target.value });
  };

  const submitIngredients = (ingredient) => {
    if (ingredient !== undefined) {
      setIngredientInputed(true);
      setIngredientsElem((ingredientElem) => [...ingredientElem, ingredient]);
    } else {
      setIngredientInputed(false);
    }
  };

  const submitInstructions = (instruction) => {
    if (instruction !== undefined) {
      setInstructionInputed(true);
      setInstructionsElem((instructions) => [...instructions, instruction]);
    } else {
      setInstructionInputed(false);
    }
  };

  return (
    <div>
      <form className="createform" onSubmit={onSubmit}>
        <div className="createform__about">
          <div className="createform__upload">
            <input
              type="file"
              name="picture"
              id="uploadedPhoto"
              onChange={imageFileHandler}
              data-testid="image-input"
            />
            {isSelectedFile !== ''
              ? <img alt="upload" className="image__uploaded" src={URL.createObjectURL(isDisplay)} />
              : null}
          </div>
          <div className="createform__receipe">
            <h2 htmlFor="receipe">Receipe&apos;s Name:</h2>
            <input
              type="text"
              id="receipe-title"
              name="title"
              value={receipe.title}
              onChange={onChange}
              placeholder="Input Name"
              data-testid="receipe-name-text-field"
            />
          </div>
          <br />
          <div className="createform__description">
            <h2 className="description-text" htmlFor="description">Description:</h2>
            <textarea
              type="text"
              rows="20"
              id="receipe-description"
              name="description"
              value={receipe.description}
              onChange={onChange}
              placeholder="Input Description"
              data-testid="description-text-field"
            />
          </div>
        </div>
        <div className="createform__ingredients">
          <h1 className="ingredients__header">INGREDIENTS</h1>
          <ul>
            {ingredientsElem.length !== 0
              ? ingredientsElem.map((ingredient) => <li key={uuidv1()}>{ingredient}</li>)
              : null}
          </ul>
          <AddIngredient submitIngredients={submitIngredients} />
          {ingredientInputed !== true
            ? <p>input valid entry</p>
            : null}
        </div>
        <div className="createform__directions">
          <h1>INSTRUCTIONS</h1>
          <ol>
            {instructionsElem.length !== 0
              ? instructionsElem.map((instruction) => <li key={uuidv1()}>{instruction}</li>)
              : null}
          </ol>
          <AddInstruction submitInstructions={submitInstructions} />
          {instructionInputed !== true
            ? <p>input valid entry</p>
            : null}
        </div>
        {errorForm ? <p>{errorForm}</p> : null}
        <div className="createform__submission">
          <button type="submit" className="createform__submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
