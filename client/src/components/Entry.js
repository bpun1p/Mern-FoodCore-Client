import React, {useState, useEffect} from 'react';
import '../assets/styles/Main.css';
import EntryHeader from '../components/entry/EntryHeader';
import SignUp from './entry/SignUpForm';
import EntryFooter from '../components/entry/EntryFooter';
import Login from './entry/LoginForm';
import FCoreLogo from '../assets/logo/logo-white.svg'
import {Link} from 'react-router-dom';
import Media from 'react-media';
import DualSplit from '../components/entry/DualEntrySplit';

function Entry(){

    const [currentUrl, setCurrentUrl] = useState(window.location.href.slice(21, 30));
    
    useEffect(() => {
        let isMounted = true;
        if(currentUrl !== window.location.href) {
          setCurrentUrl(window.location.href.slice(21, 30));
        };
        return () => {isMounted = false}
      });

    return (
        <Media query='(max-width: 1079px)'>
            {matches => {
                return matches ? 
                <>
                    <Link to='/'>
                        <img className='entry__logo' alt='web main logo' src={FCoreLogo}/>
                    </Link>
                    <div className='entry'>
                        <EntryHeader url={currentUrl}/>
                        {currentUrl === '/login' ? 
                            <Login/> 
                            : 
                            <SignUp/>
                        }
                        <EntryFooter/>
                    </div> 
                </> 
                :
                <>
                    <Link to='/'>
                        <img className='entry__logo' alt='web main logo' src={FCoreLogo}/>
                    </Link> 
                    <div className='dualEntry'>
                        <div className='dualEntry__form'>
                            {currentUrl === '/register' ?
                                <>
                                    <SignUp/>
                                    <DualSplit url={currentUrl}/>
                                    <Login/>
                                </> 
                                :
                                <>
                                    <Login/>
                                    <DualSplit url={currentUrl}/>
                                    <SignUp/>
                                </>
                                }
                        </div>
                        <EntryFooter/>
                    </div> 
                </>
            }}
        </Media>
    );
};

export default Entry; 