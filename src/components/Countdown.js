import React, { useEffect, useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { theme } from '../styles/theme';

/* https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks */

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('05/06/2021') - +new Date();
    let timeLeft = {};

    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    timerComponents.push(
      <Box
        key={index}
        sx={{
          mr: ['25px', '', '40px'],
          textAlign: 'center',
          '@media only screen and (max-width: 500px)': {
            mr: '0',
            flex: '1 1 50%',
            p: '10px',
          },
          '&:last-child': {
            mr: ['', '', '0'],
          },
        }}
      >
        <Text
          as="p"
          sx={{
            pb: '20px',
            lineHeight: ['28px', '', '48px'],
            fontSize: ['30px', '', '50px'],
            fontWeight: theme.fontWeights.bold,
          }}
        >
          {timeLeft[interval]}
        </Text>
        <Text
          as="p"
          sx={{
            p: '10px',
            lineHeight: ['18px', '', '28px'],
            fontSize: ['20px', '', '30px'],
            fontWeight: theme.fontWeights.bold,
            color: theme.colours.navy,
          }}
        >
          {interval}
        </Text>
      </Box>
    );
  });

  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '600px',
        m: '0 auto',
        px: '20px',
        '@media only screen and (max-width: 500px)': {
          flexWrap: 'wrap',
        },
      }}
    >
      {timerComponents.length ? (
        timerComponents
      ) : (
        <Text as="h2">Today is the day!</Text>
      )}
    </Flex>
  );
};

export default Countdown;
