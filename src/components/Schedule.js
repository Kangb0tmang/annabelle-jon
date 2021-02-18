import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { theme } from '../styles/theme';
import { events } from '../content/events-content';

const Schedule = () => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        mr: ['', '', '', '20px', 0],
        mb: ['70px', '', '', '100px'],
      }}
    >
      {events.map((event, index) => (
        <Flex
          key={index}
          sx={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '225px',
              p: ['20px 25px 20px 20px', '', '20px 35px 20px 0'],
              svg: {
                width: ['40px', '', '60px', '', '80px'],
              },
              '@media only screen and (min-width: 400px) and (max-width: 739px)': {
                svg: {
                  width: '60px',
                },
              },
            }}
          >
            {event.icon}
            <Text
              sx={{
                fontSize: ['20px', '', '24px'],
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
            sx={{ alignSelf: 'center', width: '250px', p: '20px 0 20px 20px' }}
          >
            <Text
              sx={{
                fontSize: ['20px', '', '24px'],
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
