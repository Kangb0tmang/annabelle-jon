import React from 'react';
import { Box } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../styles/theme';
import '../styles/layout.scss';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: 'relative' }}>{children}</Box>
    </ThemeProvider>
  );
};

export default Layout;
