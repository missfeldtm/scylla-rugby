import React from 'react';
import Layout from './src/components/Layout';
/* eslint-disable react/jsx-props-no-spreading */
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
