import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { theme } from '../styles/theme';
import { events } from '../content/events-content';

const Schedule = () => {
  return (
    <Flex
      sx={{ flexDirection: 'column', mt: '50px', mb: ['50px', '', '100px'] }}
    >
      {events.map((event, index) => (
        <Flex
          key={index}
          sx={{ flexDirection: 'row', justifyContent: 'center' }}
        >
          <Box
            sx={{
              width: '100px',
              p: '20px 20px 20px 0',
              svg: {
                width: '80px',
              },
            }}
          >
            {event.icon}
          </Box>
          <Box
            sx={{
              width: '5px',
              bg: theme.colours.black,
            }}
          />
          <Box sx={{ width: '210px', p: '20px 0 20px 20px' }}>
            <Text sx={{ mb: '10px', fontSize: '24px' }}>
              {event.description}
            </Text>
            <Text
              sx={{
                fontFamily: theme.fontFamily.cormorant,
                fontSize: '24px',
                fontWeight: theme.fontWeights.bold,
              }}
            >
              {event.time}
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default Schedule;
