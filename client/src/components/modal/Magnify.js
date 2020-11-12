import React from 'react';

function Magnify(props) {

    return (
        <div className='magnify__container'>
            <div className='magnify'>
                <div className='maginify__header'>
                    <div className='magnify__img-container'>
                        <img className='magnify__img' src={props.receipe.img} alt=''/>
                        <svg className='magnify__exit' onClick={props.popUpHandler} width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='magnify__exit-icon' d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#13182C"/>
                        </svg>
                    </div>
                    <div className='magnify__receipe'>
                        <h1>{props.receipe.title}</h1>
                    </div>
                    <div className='magnify__description'>
                        <p> {props.receipe.description} </p>
                    </div>
                </div>
                <div className='magnify__ingredients'>
                    <h3>INGREDIENTS</h3>
                    <div className='add__option'>
                        <ul>
                            {props.receipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                        </ul>
                    </div>
                </div>
                <div className='magnify__directions'>
                    <h3>INSTRUCTIONS</h3>
                    <div className='addDirection__option'>
                        <ol>
                            {props.receipe.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
                        </ol>
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default Magnify;
