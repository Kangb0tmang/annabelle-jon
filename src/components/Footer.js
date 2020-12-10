import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { theme } from '../styles/theme';
import { ContentWrapper } from '../components/Container';

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        mt: ['50px', '', '80px'],
        width: '100%',
      }}
    >
      <ContentWrapper>
        <Flex
          sx={{
            display: 'flex',
            m: '0 auto',
            p: ['50px 20px', '', '70px 20px'],
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: ['column', '', 'row'],
              justifyContent: ['center', '', 'space-between'],
              width: '100%',
            }}
          >
            <Box as="ul">
              <Box as="li">
                <Text
                  as="p"
                  sx={{
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
              </Box>
              <Box as="li">
                <Text
                  as="p"
                  sx={{
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
            </Box>
            <Box>
              <Text
                as="p"
                sx={{
                  mt: ['20px', '', '0'],
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colours.navy,
                }}
              >
                Website by: Jon Kang
              </Text>
            </Box>
          </Box>
        </Flex>
      </ContentWrapper>
    </Box>
  );
};

export default Footer;
