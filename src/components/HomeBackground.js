import React from 'react';
import { Box } from 'rebass';

const HomeBackground = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundImage: 'url(../images/background.jpg)',
        backgroundSize: '1400px',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default HomeBackground;
