import React from 'react';
import { Box, Text } from 'rebass';
import { theme } from '../styles/theme';
import Container from './Container';
import Layout from './Layout';
import backgroundImage from '../images/background.jpg';

const PreLaunchPage = () => {
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
            <Box sx={{ height: '100vh', mt: ['40%', '25%', '20%'] }}>
              <Text
                as="h1"
                sx={{
                  mb: ['20px', '', '', '30px'],
                  lineHeight: ['45px', '', '', '55px'],
                  fontFamily: theme.fontFamily.cormorant,
                  fontSize: ['55px', '', '', '70px'],
                  fontWeight: theme.fontWeights.regular,
                  color: theme.colours.black,
                }}
              >
                Coming Soon
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default PreLaunchPage;
