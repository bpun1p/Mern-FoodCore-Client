import React, { useState, useContext } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { useHistory } from 'react-router-dom';
import AddIngredient from './AddIngredient';
import AddInstruction from './AddInstruction';
import RecipeService from '../../service/RecipeService';
import { AuthContext } from '../../context/AuthContext';
import ImageCompressor from '../Utils/ImageCompressor';
import ToBase64 from '../Utils/ToBase64';

export default function CreateForm() {
  const [isDisplay, setDisplay] = useState('');
  const [ingredientSaved, setIngredientSaved] = useState(true);
  const [instructionSaved, setInstructionSaved] = useState(true);
  const [errorForm, setErrorForm] = useState('');

  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [instructionsArray, setInstructionsArray] = useState([]);
  const [isSelectedFile, setSelectedFile] = useState('');
  const [recipe, setRecipe] = useState({
    title: '', description: '', ingredients: '', instructions: '', img: '', author: '',
  });
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const resetForm = () => {
    setRecipe({
      title: '',
      description: '',
      ingredients: '',
      instructions: '',
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (ingredientsArray.length !== 0 && instructionsArray.length !== 0) {
      RecipeService.postRecipe(
        {
          ...recipe,
          ingredients: ingredientsArray,
          instructions: instructionsArray,
          img: isSelectedFile,
          author: user.username,
        },
      )
        .then((data) => {
          resetForm();
          if (!data.message.msgError) {
            RecipeService.postAllRecipes(
              {
                ...recipe,
                ingredients: ingredientsArray,
                instructions: instructionsArray,
                img: isSelectedFile,
                author: user.username,
              },
            )
              .then(() => history.push('/dashboard/global'));
          }
        });
    } else setErrorForm('Please fill in all feilds');
  };

  function imageFileHandler(event) {
    const file = event.target.files[0];
    if (file.type.slice(0, 5) === 'image') {
      ImageCompressor(file).then((compressedFile) => {
        setDisplay(compressedFile);
        ToBase64(compressedFile).then((data) => {
          setSelectedFile(data);
        });
      });
    } else setErrorForm('unable to convert image file');
  }

  const onChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const saveIngredient = (ingredient) => {
    if (ingredient) {
      setIngredientSaved(true);
      setIngredientsArray((ingredients) => [...ingredients, ingredient]);
    } else setIngredientSaved(false);
  };

  const saveInstruction = (instruction) => {
    if (instruction) {
      setInstructionSaved(true);
      setInstructionsArray((instructions) => [...instructions, instruction]);
    } else setInstructionSaved(false);
  };

  return (
    <div>
      <form className="create-form" onSubmit={onSubmit}>
        <div className="create-form__about">
          <div className="create-form__upload">
            <input
              type="file"
              name="picture"
              id="uploaded-photo"
              onChange={imageFileHandler}
              data-testid="image-input"
            />
            {isSelectedFile !== ''
              ? <img alt="upload" className="image__uploaded" data-testid="displayed-image" src={URL.createObjectURL(isDisplay)} />
              : null}
          </div>
          <div className="create-form__recipe">
            <h2 htmlFor="recipe">Recipe&apos;s Name:</h2>
            <input
              type="text"
              id="recipe-title"
              name="title"
              value={recipe.title}
              onChange={onChange}
              placeholder="Input Name"
              data-testid="recipe-name-text-field"
            />
          </div>
          <br />
          <div className="create-form__description">
            <h2 className="create-form__description-text" htmlFor="description">Description:</h2>
            <textarea
              type="text"
              rows="20"
              id="recipe-description"
              name="description"
              value={recipe.description}
              onChange={onChange}
              placeholder="Input Description"
              data-testid="description-text-field"
            />
          </div>
        </div>
        <div className="create-form__ingredients">
          <h1 className="ingredients__header">INGREDIENTS</h1>
          <ul>
            {ingredientsArray.length !== 0
              ? ingredientsArray.map((ingredient) => <li key={uuidv1()}>{ingredient}</li>)
              : null}
          </ul>
          <AddIngredient saveIngredient={saveIngredient} />
          {!ingredientSaved
            ? <p>input valid entry</p>
            : null}
        </div>
        <div className="create-form__instructions">
          <h1>INSTRUCTIONS</h1>
          <ol>
            {instructionsArray.length !== 0
              ? instructionsArray.map((instruction) => <li key={uuidv1()}>{instruction}</li>)
              : null}
          </ol>
          <AddInstruction saveInstruction={saveInstruction} />
          {!instructionSaved
            ? <p>input valid entry</p>
            : null}
        </div>
        {errorForm ? <p>{errorForm}</p> : null}
        <div className="create-form__submission">
          <button type="submit" className="create-form__submit">Create</button>
        </div>
      </form>
    </div>
  );
}
