import React from 'react';
import Container from './Container';
import Layout from './Layout';
import Nav from './Nav';
import Footer from './Footer';

const Page = ({ children }) => {
  return (
    <Layout>
      <Container>
        <Nav />
        {children}
        <Footer />
      </Container>
    </Layout>
  );
};

export default Page;
