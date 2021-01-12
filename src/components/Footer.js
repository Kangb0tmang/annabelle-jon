import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { theme } from '../styles/theme';
import { ContentWrapper } from '../components/Container';

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        mt: ['40px', '', '30px'],
        mb: ['120px', '', '150px', '200px'],
        width: '100%',
      }}
    >
      <Flex
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          m: '0 auto',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', '', 'row'],
            alignItems: 'center',
          }}
        >
          <Text
            as="p"
            sx={{
              fontSize: ['14px', '', '20px'],
              fontWeight: theme.fontWeights.bold,
              color: theme.colours.navy,
              a: {
                textDecoration: 'none',
                color: theme.colours.navy,
              },
            }}
          >
            Annabelle: <a href="tel:0433222111">0433222111</a>
          </Text>
          <Box
            sx={{
              display: ['none', '', 'block'],
              width: '2px',
              height: '30px',
              mx: '8px',
              bg: theme.colours.navy,
            }}
          />
          <Text
            as="p"
            sx={{
              fontSize: ['14px', '', '20px'],
              fontWeight: theme.fontWeights.bold,
              color: theme.colours.navy,
              a: {
                textDecoration: 'none',
                color: theme.colours.navy,
              },
            }}
          >
            Jon: <a href="tel:0488222333">0488222333</a>
          </Text>
        </Box>
        <Box>
          <Text
            as="p"
            sx={{
              fontSize: ['14px', '', '20px'],
              fontWeight: theme.fontWeights.bold,
              color: theme.colours.navy,
            }}
          >
            Website by: Jon Kang
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
