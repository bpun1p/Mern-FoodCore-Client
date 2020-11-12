import React, {useState, useContext} from 'react';
import AddIngredient from './AddIngredient';
import AddInstruction from './AddInstruction';
import ReceipeService from '../../service/ReceipeService';
import {AuthContext} from '../../Context/AuthContext';
import {useHistory} from 'react-router-dom';
import imageCompression from 'browser-image-compression';

function CreateForm() {
    const [isDisplay, setDisplay] = useState('');
    const [ingredientInputed, setIngredientInputed] = useState(true);
    const [instructionInputed, setInstructionInputed] = useState(true);

    const [ingredientsElem, setIngredientsElem] = useState([]);
    const [instructionsElem, setInstructionsElem] = useState([]);
    const [isSelectedFile, setSelectedFile] = useState('');
    const [receipe, setReceipe] = useState({title : '', description: '', ingredients: '', instructions : '', img : '', author: ''});

    const authContext = useContext(AuthContext);
    const {user} = useContext(AuthContext);
    const history = useHistory();

    const onSubmit = event => {
        event.preventDefault();
        if(ingredientsElem.length !== 0 && instructionsElem.length !== 0) {
            ReceipeService.postReceipe(
                {...receipe, ['ingredients'] : ingredientsElem, ['instructions'] : instructionsElem, ['img'] : isSelectedFile, ['author'] : user.username})
                .then(data => {
                    resetForm();
                    if(!data.message.msgError) {
                        ReceipeService.postAllReceipes(
                            {...receipe, ['ingredients'] : ingredientsElem, ['instructions'] : instructionsElem, ['img'] : isSelectedFile, ['author'] : user.username})
                            .then(data => history.push('/profile/global'));
                    }
                    else if(data.message.msgBody === 'UnAuthorized'){
                        authContext.setUser({username : ''});
                        authContext.setIsAuthenticated(false);
                    }
                    else
                        console.log('error in form');
                })
        }else{
            console.log('ingredients feild or instructions is empty, please fill in');
        }
    }

    const toBase64 = file => new Promise ((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    function imageFileHandler(file) {
        setDisplay(file);
        toBase64(file).then(data => setSelectedFile(data));
    }

    function imageCompressor(event) {
        const file = event.target.files[0];
        console.log('original file size', file.size)
        const options = {
            maxSizeMB: 0.05,
            maxWidthOrHeight: 700,
            useWebWorker: true
        };
        imageCompression(file, options)
            .then(compressedFile => {
                console.log('compressed file size', compressedFile.size)
                imageFileHandler(compressedFile);
            })
            .catch(err => console.log(err));
    };

    const onChange = event => {
        setReceipe({...receipe, [event.target.name] : event.target.value});
    }

    const submitIngredients = (ingredient) => {
        if(ingredient !== ''){
            setIngredientInputed(true);
            setIngredientsElem(ingredientsElem => [...ingredientsElem, ingredient]);
        }else{
            setIngredientInputed(false);
        }
    }
    const submitInstructions= (instruction) => {
        if(instruction !== ''){
            setInstructionInputed(true);
            setInstructionsElem(instructions => [...instructions, instruction]);
        }else{
            setInstructionInputed(false);
        }
    }

    const resetForm = () => {
        setReceipe({
            title : '', 
            description: '',
            ingredients: '', 
            instructions : '' 
        });
    };
 
    return (
        <div>
            <form className='createform' onSubmit={onSubmit}>
                <div className='createform__about'>
                    <div className='createform__upload'>
                        <input 
                            type='file' 
                            name='picture' 
                            id='uploadedPhoto' 
                            onChange={imageCompressor} 
                        />       
                        {isSelectedFile !== '' ? 
                            <img alt='upload' className='image__uploaded' src={URL.createObjectURL(isDisplay)} /> 
                            : 
                            null
                        }         
                    </div>
                    <div className='createform__receipe'>
                        <label htmlFor='receipe'>Receipe's Name:</label>
                        <input 
                            type='text' 
                            id='receipe-title' 
                            name='title' 
                            value={receipe.title}
                            onChange={onChange}
                            placeholder='Input Name'/>
                    </div>
                    <div className='createform__description'>
                        <label className='description-text' htmlFor='description'>Decription:</label>
                        <textarea 
                            type='text' 
                            rows='20' 
                            id='receipe-description' 
                            name='description' 
                            value={receipe.description}
                            onChange={onChange}
                            placeholder='Input Description'/>
                    </div>
                </div>
                <div className='createform__ingredients' id='hello'>
                    <h1 className='ingredients__header'>INGREDIENTS</h1>
                    <ul>
                        {ingredientsElem.length !== 0 ? 
                            ingredientsElem.map((ingredient, index) => 
                                <li key={index}>{ingredient}</li>)
                            :
                            null
                        }
                    </ul>
                    <AddIngredient submitIngredients={submitIngredients}/>
                    {ingredientInputed !== true ? 
                        <p>input valid entry</p> 
                        : 
                        null}
                </div>
                <div className='createform__directions'>
                    <h1>INSTRUCTIONS</h1>
                    <ol>
                        {instructionsElem.length !== 0 ? 
                            instructionsElem.map((instruction, index) => 
                                <li key={index}>{instruction}</li>)
                            :
                            null
                        }
                    </ol>
                    <AddInstruction submitInstructions={submitInstructions}/>
                    {instructionInputed !== true ? 
                        <p>input valid entry</p> 
                        : 
                        null
                        }
                </div>
                <div className='createform__submission'>
                    <button type='submit' className='createform__submit'>Create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateForm;
