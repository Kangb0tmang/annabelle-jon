import React from 'react';
import { Box } from 'rebass';
import Container from './Container';
import Layout from './Layout';
import Nav from './Nav';
import Footer from './Footer';
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
            backgroundSize: ['100% 250px', '', '100%'],
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Box
            sx={{
              maxWidth: '1000px',
              width: '100%',
              backgroundColor: [
                'transparent',
                '',
                '',
                'rgba(255, 255, 255, 0.7)',
              ],
            }}
          >
            <Nav />
            {children}
            <Footer />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Page;
