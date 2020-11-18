import React, { useState, useContext } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { useHistory } from 'react-router-dom';
import imageCompression from 'browser-image-compression';
import AddIngredient from './AddIngredient';
import AddInstruction from './AddInstruction';
import ReceipeService from '../../service/ReceipeService';
import { AuthContext } from '../../context/AuthContext';

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

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  function imageFileHandler(file) {
    setDisplay(file);
    toBase64(file).then((data) => setSelectedFile(data));
  }

  function imageCompressor(event) {
    const file = event.target.files[0];
    const options = {
      maxSizeMB: 0.05,
      maxWidthOrHeight: 700,
      useWebWorker: true,
    };
    imageCompression(file, options)
      .then((compressedFile) => {
        imageFileHandler(compressedFile);
      })
      .catch(() => setErrorForm('unable to convert image file'));
  }

  const onChange = (event) => {
    setReceipe({ ...receipe, [event.target.name]: event.target.value });
  };

  const submitIngredients = (ingredient) => {
    if (ingredient !== '') {
      setIngredientInputed(true);
      setIngredientsElem((ingredientElem) => [...ingredientElem, ingredient]);
    } else {
      setIngredientInputed(false);
    }
  };

  const submitInstructions = (instruction) => {
    if (instruction !== '') {
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
              title="foo"
              name="picture"
              id="uploadedPhoto"
              onChange={imageCompressor}
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
            />
          </div>
          <br />
          <div className="createform__description">
            <h2 className="description-text" htmlFor="description">Decription:</h2>
            <textarea
              type="text"
              rows="20"
              id="receipe-description"
              name="description"
              value={receipe.description}
              onChange={onChange}
              placeholder="Input Description"
            />
          </div>
        </div>
        <div className="createform__ingredients" id="hello">
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
