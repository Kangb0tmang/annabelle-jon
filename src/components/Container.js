import React from 'react';
import { Box, Flex } from 'rebass';
import { theme } from '../styles/theme';

export const ImageWrapper = ({ ...props }) => (
  <Box
    sx={{
      position: 'relative',
      alignSelf: ['center', '', 'flex-start'],
      px: ['20px', '', 0],
      maxWidth: ['540px', '', '500px'],
      width: '100%',
      boxShadow: ['none', '', `30px 30px 0px ${theme.colours.lightblue}`],
    }}
    {...props}
  />
);

export const ContentWrapper = ({ ...props }) => (
  <Box
    sx={{
      margin: '0 auto',
      maxWidth: '960px',
      width: '100%',
    }}
    {...props}
  />
);

const Container = ({ children }) => {
  return (
    <Flex
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {children}
    </Flex>
  );
};

export default Container;
