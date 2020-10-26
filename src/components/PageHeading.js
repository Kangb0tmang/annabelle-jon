import React from 'react';
import { Text } from 'rebass';
import { theme } from '../styles/theme';

const PageHeading = ({ ...props }) => {
  return (
    <Text
      as="h1"
      sx={{
        mt: ['30px', '', '50px', '80px'],
        lineHeight: ['30px', '', '45px'],
        fontSize: ['35px', '', '50px'],
        fontWeight: theme.fontWeights.bold,
        color: theme.colours.navy,
      }}
    >
      {props.children}
    </Text>
  );
};

export default PageHeading;
