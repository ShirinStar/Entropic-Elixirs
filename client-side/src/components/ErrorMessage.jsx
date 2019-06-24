import React, { useState } from 'react';

const ErrorMessageContainer: React.FC<{errorMessage: string | null}> =
({
  errorMessage
}) => {
  return <ErrorMessage>{errorMessage}</ErrorMessage>;
};

export default ErrorMessageContainer;
