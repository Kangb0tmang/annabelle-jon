import React from 'react';
import { Text } from 'rebass';

const PageTagline = ({ ...props }) => {
  return (
    <Text
      as="p"
      sx={{
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
