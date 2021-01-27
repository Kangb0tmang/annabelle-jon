import React from 'react';
import { Box } from 'rebass';
import Container from './Container';
import Layout from './Layout';
import Nav from './Nav';
import backgroundImage from '../images/background.jpg';

const Page = ({ children }) => {
  return (
    <Layout>
      <Container>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: ['100% 250px', '', '', '100%'],
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Nav />
          {children}
          <Box
            sx={{
              mt: ['40px', '', '', '30px'],
              mb: ['120px', '', '150px', '', '220px'],
              width: '100%',
            }}
          />
        </Box>
      </Container>
    </Layout>
  );
};

export default Page;
