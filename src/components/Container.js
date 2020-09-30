import React from 'react';
import { Box, Flex } from 'rebass';

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

export const ImageWrapper = ({ ...props }) => (
  <Box
    sx={{
      margin: '0 auto',
      maxWidth: '1440px',
      width: '100%',
    }}
    {...props}
  />
);

export const ContentWrapper = ({ ...props }) => (
  <Box
    sx={{
      margin: '0 auto',
      maxWidth: '1180px',
      width: '100%',
    }}
    {...props}
  />
);

export default Container;
