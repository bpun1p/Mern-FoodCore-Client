import React, { useState} from 'react';
import SocialSignUp from './SocialSignUp';
import Media from 'react-media';
import AuthService from '../../service/AuthService';
import {useHistory } from 'react-router-dom';

function SignUpForm () {
    
    const [user, setUser] = useState({username: "", password: ""});
    const [isMatch, setMatch] = useState(true);

    const history = useHistory();

    const onChange = (event) => {
        setUser({...user, [event.target.name] : event.target.value});
    };

    const resetForm = () => {
        setUser({username : "", password: ""});
    };

    function refreshPage() {
        window.location.reload();
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const signUpForm = document.getElementById('signup__form');
        if(signUpForm.username.value !== signUpForm.usernameconfirm.value || signUpForm.password.value !== signUpForm.passconfirm.value)
            setMatch(false);
        else{
            AuthService.register(user)
            .then(data => {
                const {message} = data;
                resetForm();
                if(!message.msgError) {
                    history.push('/login');
                }})
            .then(res => {
                if(window.location.pathname === '/login')
                    refreshPage();
                }); 
        };
    };

    return (
        <div className='signup'>
            <Media query='(min-width: 1080px)'>
                <h1 className='entryheader__header'>Sign Up</h1>
            </Media>
            <form id='signup__form' onSubmit={onSubmit}>
                <div className='signup__inputs'>
                    <input 
                        placeholder='Username' 
                        type='text' 
                        id='username' 
                        name='username' 
                        className='signup__email' 
                        onChange={onChange}
                    />
                    <input 
                        placeholder='Re-enter Username' 
                        type='text' 
                        id='usernameconfirm' 
                        name='usernameconfirm' 
                        className='signup__e-confirm'
                    />
                    <input 
                        placeholder='Choose a password' 
                        type='password' 
                        id='password' 
                        name='password' 
                        className='signup__password' 
                        onChange={onChange}
                    />
                    <input 
                        placeholder='Re-enter password' 
                        type='password' 
                        id='passconfirm' 
                        name='passconfirm' 
                        className='signup__pass-confirm'
                    />
                </div>
                {isMatch !== true ? 
                    <h1>username or password do not match</h1> 
                    : 
                    null
                }
                <input type='submit' value='Sign Up' className='form__submit-btn'/>
            </form>
            <div className='signup__submits'>
                <p className='signup__alt-text'>Or sign up with</p>
                <SocialSignUp/>
            </div>
        </div>
    );
};

export default SignUpForm;
