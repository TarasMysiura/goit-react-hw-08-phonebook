import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { InfinitySpinStyle } from './Loader.styled';

export const Loader = () => {
  return (
    <InfinitySpinStyle>
      <InfinitySpin width="200" color="#2f2fef" />
    </InfinitySpinStyle>
  );
};
