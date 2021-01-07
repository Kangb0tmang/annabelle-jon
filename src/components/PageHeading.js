import React from 'react';
import { Text } from 'rebass';
import { theme } from '../styles/theme';

const PageHeading = ({ ...props }) => {
  return (
    <Text
      as="h1"
      sx={{
        mb: '15px',
        mr: '20px',
        textTransform: 'uppercase',
        color: theme.colours.black,
      }}
    >
      {props.children}
    </Text>
  );
};

export default PageHeading;
