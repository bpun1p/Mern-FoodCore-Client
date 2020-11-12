import React from 'react'
import arrow from '../../assets/icons/right-chev.svg'

function DualEntrySplit(props) {

    const currentUrl = props.url;
    
    return (
        <>
            <h4 className='dualEntry__split'>
                {currentUrl === '/login' ? 
                'Dont have an account'
                :
                'Already have an account?'
                }
                <img src={arrow} alt='right cheveron arrow' className='dualEntry__guide-arrow'/>
            </h4>
        </>
    );
};

export default DualEntrySplit;
