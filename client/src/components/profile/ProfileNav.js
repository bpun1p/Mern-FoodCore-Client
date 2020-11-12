import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import Media from 'react-media';
import AuthService from '../../service/AuthService';
import {AuthContext} from '../../Context/AuthContext';
import {useHistory} from 'react-router-dom';

function ProfileNav(props) {
    const {setIsAuthenticated, setUser} = useContext(AuthContext)
    const history = useHistory();

    const logoutHandler = () => {
        console.log('clicked')
        AuthService.logout().then(data => {
            if(data.success) {         //if successfully logged out, setUser data like username will be empty string and setIsAuthenticated will be false
                setUser(data.user);
                setIsAuthenticated(false)
                history.push('/login')
            }else if(!data.success) {
                history.push('/login')
            }
        })
    }
    return (
        <nav className='profile__nav'>
            <Media query='(max-width: 767px)'>
                {matches => {
                    return matches ?
                    <>
                        <Link to={'/profile/global'}>
                            <button className='profile__home'>GLOBAL</button>
                        </Link>
                        <Link to={'/profile/MyPosts'}>
                            <button className='profile__public'>MYPOSTS</button>
                        </Link>
                        <Link to={'/profile/create'}>
                            <button className='profile__create'>CREATE</button>
                        </Link>  
                        <button className='profile__private' onClick={logoutHandler}>LOGOUT</button>
                        <button onClick={props.popUpHandler}>
                            <svg alt='exit icon' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path className='header__exit-icon' d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' fill='#13182C'/>
                            </svg>
                        </button>
                        </>
                    :
                    <>
                        <Link to={'/profile/global'}>
                            <button className='profile__home'>GLOBAL</button>
                        </Link>
                        <Link to={'/profile/MyPosts'}>
                            <button className='profile__public'>MYPOSTS</button>
                        </Link>  
                        <Link to={'/profile/create'}>
                            <button className='profile__create'>CREATE</button>
                        </Link>  
                        <button className='profile__private' onClick={logoutHandler}>LOGOUT</button>
                    </>
                }}
            </Media>
        </nav>
    );
};

export default ProfileNav;