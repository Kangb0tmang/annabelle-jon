import React from 'react';
import { Box, Flex } from 'rebass';

export const ImageWrapper = ({ ...props }) => (
  <Box
    sx={{
      maxWidth: '1000px',
      width: '100%',
      mx: 'auto',
      my: ['30px', '', '50px', '100px'],
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
