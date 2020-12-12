import React from 'react';
import Proptypes from 'prop-types';
import arrow from '../../assets/icons/right-chev.svg';

export default function EntryDetails(props) {
  const { url } = props;

  return (
    <>
      <h4 className="entry__details">
        {url === '/login'
          ? "Don't have an account ?"
          : 'Already have an account ?'}
        <img data-testid="arrow" src={arrow} alt="right cheveron arrow" className="entry__guide-arrow" />
      </h4>
    </>
  );
}

EntryDetails.propTypes = {
  url: Proptypes.string.isRequired,
};