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
        lineHeight: ['35px', '', '50px'],
        textDecoration: 'none',
        fontSize: ['50px', '', '65px'],
        fontWeight: theme.fontWeights.semiBold,
        color: theme.colours.navy,
        '&:after': {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '3px',
          height: '2px',
          width: '0px',
        },
        '&:hover': {
          '&:after': {
            width: '100%',
            bg: theme.colours.navy,
            transition: 'width 0.2s ease',
          },
        },
        '&:focus': {
          '&:after': {
            width: '100%',
            bg: theme.colours.navy,
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
