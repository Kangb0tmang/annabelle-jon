import React from 'react';
import { Link } from 'gatsby';
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
        bg: theme.colours.navy,
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
                    color: theme.colours.white,
                    a: {
                      textDecoration: 'none',
                      color: theme.colours.white,
                    },
                  }}
                >
                  Annabelle: <Link to="0433222111">0433222111</Link>
                </Text>
              </Box>
              <Box as="li">
                <Text
                  as="p"
                  sx={{
                    color: theme.colours.white,
                    a: {
                      textDecoration: 'none',
                      color: theme.colours.white,
                    },
                  }}
                >
                  Jon: <Link to="0488222333">0488222333</Link>
                </Text>
              </Box>
            </Box>
            <Box>
              <Text
                as="p"
                sx={{ mt: ['20px', '', '0'], color: theme.colours.white }}
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
