import React from 'react';
import Proptypes from 'prop-types';
import arrow from '../../assets/icons/right-chev.svg';

function DualEntrySplit(props) {
  const { url } = props;

  return (
    <>
      <h4 className="dualEntry__split">
        {url === '/login'
          ? 'Dont have an account'
          : 'Already have an account?'}
        <img src={arrow} alt="right cheveron arrow" className="dualEntry__guide-arrow" />
      </h4>
    </>
  );
}

DualEntrySplit.propTypes = {
  url: Proptypes.string.isRequired,
};

export default DualEntrySplit;
