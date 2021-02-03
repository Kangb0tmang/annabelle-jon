import React from 'react';
import Branch from '../assets/branch.svg';
import { Box } from 'rebass';

// Leaf for header
const HeaderLeaf = () => (
  <Box
    sx={{
      display: ['none', '', '', 'block'],
      width: 'auto',
      mt: '-35px',
      mr: ['20px', '', '', 0],
      svg: { width: '250px', height: '230px' },
    }}
  >
    <Branch />
  </Box>
);

export default HeaderLeaf;
