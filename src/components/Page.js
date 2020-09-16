import React from 'react';
import Container from './Container';
import Layout from './Layout';
import Nav from './Nav';

const Page = ({ children }) => {
  return (
    <Layout>
      <Container>
        <Nav />
        {children}
      </Container>
    </Layout>
  );
};

export default Page;
