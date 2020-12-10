import React from 'react';
import { Text } from 'rebass';
import { theme } from '../styles/theme';

const PageHeading = ({ ...props }) => {
  return (
    <Text
      as="h1"
      sx={{
        mt: ['80px', '', '50px'],
        lineHeight: ['30px', '', '45px'],
        textAlign: 'center',
        fontFamily: theme.fontFamily.heading,
        fontSize: ['35px', '', '50px'],
        fontWeight: theme.fontWeights.bold,
        color: theme.colours.black,
      }}
    >
      {props.children}
    </Text>
  );
};

export default PageHeading;
