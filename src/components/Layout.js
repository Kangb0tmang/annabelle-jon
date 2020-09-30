import React from 'react';
import { Helmet } from 'react-helmet';
import { Box } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../styles/theme';
import '../styles/reset.scss';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex" />
        <title>Annabelle Jon</title>
      </Helmet>
      <Box sx={{ position: 'relative' }}>{children}</Box>
    </ThemeProvider>
  );
};

export default Layout;
