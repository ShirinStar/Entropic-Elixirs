import React, { useState } from 'react';

const useErrorHandler = (initialState: string | null) => {
  const [error, setError] = React.useSate(initialState);
  const showError = (errorMessage: string | null) => {
    setError(errorMessage);
    wondow.setTimeout(() => {
      setError(null);
    }, 3000);
  };
  return { error, showError };
};

export default useErrorHandler;
