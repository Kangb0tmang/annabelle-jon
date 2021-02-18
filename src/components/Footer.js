import React from 'react';
import { Box } from 'rebass';
import Countdown from './Countdown';
import RSVPButton from './RSVPButton';

const Footer = () => (
  <>
    <Countdown />
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
