import React from 'react';
import { Link } from 'gatsby';
import { Text } from 'rebass';
import { theme } from '../styles/theme';

const RSVPButton = () => {
  return (
    <Text
      as={Link}
      to="/rsvp"
      sx={{
        position: 'relative',
        lineHeight: ['28px', '', '38px'],
        textDecoration: 'none',
        fontFamily: theme.fontFamily.cormorant,
        fontSize: '100px',
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
  );
};

export default RSVPButton;
