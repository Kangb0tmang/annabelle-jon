import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { theme } from '../styles/theme';
import { events } from '../content/events-content';

const Schedule = () => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        mt: '50px',
        mb: ['70px', '', '', '100px'],
      }}
    >
      {events.map((event, index) => (
        <Flex
          key={index}
          sx={{ flexDirection: 'row', justifyContent: 'center' }}
        >
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '225px',
              p: '20px 40px 20px 0',
              svg: {
                width: '80px',
              },
            }}
          >
            {event.icon}
            <Text
              sx={{
                fontSize: '24px',
                fontWeight: theme.fontWeights.semiBold,
              }}
            >
              {event.time}
            </Text>
          </Flex>
          <Box
            sx={{
              width: '1px',
              bg: theme.colours.black,
            }}
          />
          <Box
            sx={{ alignSelf: 'center', width: '210px', p: '20px 0 20px 20px' }}
          >
            <Text
              sx={{
                fontSize: '24px',
                fontWeight: theme.fontWeights.semiBold,
              }}
            >
              {event.description}
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default Schedule;
