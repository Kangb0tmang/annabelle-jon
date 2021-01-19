import React from 'react';
import { Text } from 'rebass';
import { theme } from '../styles/theme';

const PageTagline = ({ ...props }) => {
  return (
    <Text
      as="p"
      sx={{
        mr: '20px',
        lineHeight: '18px',
        br: {
          display: ['none', '', 'block'],
        },
      }}
    >
      {props.children}
    </Text>
  );
};

export default PageTagline;
