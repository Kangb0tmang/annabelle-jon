import React from 'react';
import { Text } from 'rebass';

const HeaderText = ({ ...props }) => {
  return (
    <Text as={props.as} sx={props.styles}>
      {props.children}
    </Text>
  );
};

export default HeaderText;
