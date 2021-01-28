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
        lineHeight: ['60px', '', '38px'],
        textDecoration: 'none',
        fontFamily: theme.fontFamily.cormorant,
        fontSize: ['75px', '', '', '100px'],
        color: theme.colours.navy,
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
          '&:after': {
            width: '0px',
            transition: 'width 0.2s ease',
          },
        },
        '&:focus': {
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
