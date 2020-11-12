import React from 'react';
import {Link} from 'react-router-dom';

function EntryHeader(props) {
    
    const currentPath = props.url;

    return (
        <>
            <div className='entryheader'>
                <div className='entryheader__header'>
                    {currentPath === '/login' ? 
                        <>
                            <h1 className='entryheader__header'>Login</h1>
                            <h3>Don't have an account?
                                <Link to={'/register'}>
                                    <button className='entryheader__login-btn'>Sign Up</button>
                                </Link>
                            </h3>
                        </>
                        :
                        <> 
                            <h1 className='entryheader__header'>Sign Up</h1>
                            <h3>Already have an account? 
                                <Link to={'/login'}>
                                    <button className='entryheader__login-btn'>Log In</button>
                                </Link>
                            </h3>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default EntryHeader;