import React from 'react';
import Layout from './src/components/layout/layout';

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
