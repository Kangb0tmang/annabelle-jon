import React from 'react';
import { Flex, Box } from 'rebass';
import HeaderLeaf from '../components/HeaderLeaf';

const PageIntro = ({ ...props }) => (
  <Flex
    sx={{
      justifyContent: 'space-between',
      width: ['100%', '', '', '', '1240px'],
      maxWidth: '1260px',
      mx: 'auto',
      mb: '50px',
      px: ['20px', '', '', '20px'],
      '@media only screen and (min-width: 1140px) and (max-width: 1270px)': {
        width: '100%',
      },
    }}
  >
    <Box>{props.children}</Box>
    <HeaderLeaf leafDimensions={props.leafDimensions} />
  </Flex>
);

export default PageIntro;
