import React from 'react';
import Proptypes from 'prop-types';
import arrow from '../../assets/icons/right-chev.svg';

function EntryDetails(props) {
  const { url } = props;

  return (
    <>
      <h4 className="dualEntry__split">
        {url === '/login'
          ? "Don't have an account ?"
          : 'Already have an account ?'}
        <img data-testid="arrow" src={arrow} alt="right cheveron arrow" className="dualEntry__guide-arrow" />
      </h4>
    </>
  );
}

EntryDetails.propTypes = {
  url: Proptypes.string.isRequired,
};

export default EntryDetails;
