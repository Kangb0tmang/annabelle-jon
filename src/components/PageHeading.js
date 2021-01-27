import React from 'react';
import { Text } from 'rebass';
import { theme } from '../styles/theme';

const PageHeading = ({ ...props }) => {
  return (
    <Text
      as="h1"
      sx={{
        mb: '15px',
        minWidth: [0, '', '', '150px'],
        lineHeight: '32px',
        textTransform: 'uppercase',
        color: theme.colours.black,
        br: {
          display: ['none', '', '', 'block'],
        },
      }}
    >
      {props.children}
    </Text>
  );
};

export default PageHeading;
