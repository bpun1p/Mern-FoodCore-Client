import React, {useState, useContext} from 'react';
import Magnify from '../modal/Magnify';
import {AuthContext} from '../../Context/AuthContext';

function Post(props) {
    const [isPopUp, setPopUp] = useState(false);

    const popUpHandler = () => {
        setPopUp(!isPopUp);
    };

    const postImage = {
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${props.receipe.img})`
    };

    return (
        <>
            <div className='card__container' onClick={popUpHandler}>
                <div className='card' style={postImage}>
                    <div className='card__description'>
                        <h1 className='card__name'> {props.receipe.title} </h1>
                        <h3 className='card__author'>By<br></br> {props.receipe.author}</h3>
                    </div>
                </div>
            </div>
            {isPopUp === true ? 
                <Magnify popUpHandler={popUpHandler} receipe={props.receipe} /> 
                : 
                null
            }
        </>
    );
};

export default Post;