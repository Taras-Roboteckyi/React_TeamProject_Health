import React from 'react';
import { Rings } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const AppLoader = () => {
  return (
    <LoaderWrapper>
      <Rings ariaLabel="loading-indicator" />
    </LoaderWrapper>
  );
};

export default AppLoader;
