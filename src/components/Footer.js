import React from 'react';
import { Box } from 'rebass';
import RSVPButton from './RSVPButton';

const Footer = () => (
  <>
    <Box
      sx={{
        mt: [0, '', '', '65px'],
        p: ['15px', '', '', '25px'],
        textAlign: 'center',
      }}
    >
      <RSVPButton />
    </Box>
  </>
);

export default Footer;
