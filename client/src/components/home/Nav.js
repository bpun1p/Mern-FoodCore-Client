import React from 'react';
import {Link} from 'react-router-dom';

function Nav (props) {
    return (
        <nav className='header__nav'>
            <Link to={'/login'}>
                <button className='header__login'>LOGIN</button>
            </Link>
            <Link to={'/register'}>
                <button className='header__register'>SIGN UP</button>
            </Link> 
            <Link to={'/about-me'}>
                <button className='header__aboutme'>ABOUT ME</button>
            </Link>  
            <button className='close__nav' onClick={props.popUpHandler}>
                <svg alt='exit icon' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path className='header__exit-icon' d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' fill='#13182C'/>
                </svg>
            </button>
        </nav>
    )
};

export default Nav;