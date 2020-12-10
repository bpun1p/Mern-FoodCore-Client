import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

export default function LoadingIndicator() {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress
        && (
        <div
          style={{
            width: '100',
            height: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loader type="ThreeDots" color="#e67e22" height="100" width="100" />
        </div>
        )
  );
};
