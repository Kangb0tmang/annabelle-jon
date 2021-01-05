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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Box sx={{ position: 'relative' }}>{children}</Box>
    </ThemeProvider>
  );
};

export default Layout;
