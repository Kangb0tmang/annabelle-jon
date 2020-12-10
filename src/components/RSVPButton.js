import React from 'react';
import { Link } from 'gatsby';
import { Box, Text } from 'rebass';
import { theme } from '../styles/theme';

const RSVPButton = () => {
  return (
    <Box
      sx={{
        mt: ['50px', '', '80px'],
        padding: ['15px', '', '25px'],
        textAlign: 'center',
      }}
    >
      <Text
        as={Link}
        to="/rsvp"
        sx={{
          position: 'relative',
          lineHeight: ['28px', '', '38px'],
          textDecoration: 'none',
          fontSize: ['30px', '', '40px'],
          fontWeight: theme.fontWeights.bold,
          color: theme.colours.black, // Temporary
          '&:after': {
            content: '""',
            position: 'absolute',
            left: '0',
            bottom: '3px',
            width: '0px',
            height: '2px',
          },
          '&:hover': {
            color: theme.colours.navy, // Temporary
            '&:after': {
              width: '100%',
              transition: 'width 0.2s ease',
              bg: theme.colours.purple, // Temporary
            },
          },
          '&:focus': {
            color: theme.colours.navy, // Temporary
            '&:after': {
              width: '100%',
              bg: theme.colours.purple, // Temporary
            },
          },
        }}
      >
        RSVP
      </Text>
    </Box>
  );
};

export default RSVPButton;
