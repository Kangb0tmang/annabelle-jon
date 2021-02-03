import React from 'react';
import { Link } from 'gatsby';
import { Box, Text } from 'rebass';
import HeaderText from '../components/HeaderText';
import Page from '../components/Page';
import SEO from '../components/SEO';
import { theme } from '../styles/theme';

const NotFoundPage = () => (
  <Page>
    <SEO title="Page Not Found" />
    <Box sx={{ my: ['50px', '', '100px'] }}>
      <HeaderText
        as="h1"
        styles={{
          mb: ['30px', '', '', '40px'],
          lineHeight: ['45px', '', '', '55px'],
          fontFamily: theme.fontFamily.cormorant,
          fontSize: ['55px', '', '', '70px'],
          fontWeight: theme.fontWeights.regular,
          color: theme.colours.black,
        }}
      >
        Page not found
      </HeaderText>
      <Text
        as={Link}
        to="/"
        sx={{
          color: theme.colours.black,
          '&:hover': {
            color: theme.colours.black,
          },
          '&:focus': {
            color: theme.colours.black,
          },
        }}
      >
        Back home
      </Text>
    </Box>
  </Page>
);

export default NotFoundPage;
