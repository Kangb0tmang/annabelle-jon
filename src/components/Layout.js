import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../styles/theme';
import '../styles/layout.scss';

const Layout = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Layout;
