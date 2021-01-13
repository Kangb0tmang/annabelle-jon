import React from 'react';
import { Link } from 'gatsby';
import { Box, Text } from 'rebass';
import PageHeading from '../components/PageHeading';
import Page from '../components/Page';
import SEO from '../components/SEO';
import { theme } from '../styles/theme';

const NotFoundPage = () => (
  <Page>
    <SEO title="Page Not Found" />
    <Box sx={{ my: ['50px', '', '100px'] }}>
      <PageHeading>Page not found</PageHeading>
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
