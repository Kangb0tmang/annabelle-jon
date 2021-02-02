import React from 'react';
import { Text } from 'rebass';
import { theme } from '../styles/theme';

const PageHeading = ({ ...props }) => {
  return (
    <Text
      as="h1"
      sx={{
        mb: ['20px', '', '', '30px'],
        lineHeight: ['45px', '', '', '55px'],
        fontFamily: theme.fontFamily.cormorant,
        fontSize: ['55px', '', '', '70px'],
        fontWeight: theme.fontWeights.regular,
        color: theme.colours.black,
      }}
    >
      {props.children}
    </Text>
  );
};

export default PageHeading;
