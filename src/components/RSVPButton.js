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
        color: theme.colours.black,
        '&:after': {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '3px',
          width: '100%',
          height: '2px',
          bg: theme.colours.navy,
        },
        '&:hover': {
          color: theme.colours.navy,
          '&:after': {
            width: '0px',
            transition: 'width 0.2s ease',
          },
        },
        '&:focus': {
          color: theme.colours.navy,
          '&:after': {
            width: '0px',
            transition: 'width 0.2s ease',
          },
        },
      }}
    >
      RSVP
    </Text>
  );
};

export default RSVPButton;
