import React from 'react';
import Layout from './Layout';
import Nav from './Nav';

const Page = ({ children }) => {
  return (
    <Layout>
      <Nav />
      {children}
    </Layout>
  );
};

export default Page;
