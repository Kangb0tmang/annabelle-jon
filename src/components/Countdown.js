import React, { useEffect, useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { theme } from '../styles/theme';

/* https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks */

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('06/05/2021') - +new Date();
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
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          px: '40px',
          textAlign: 'center',
          '@media only screen and (max-width: 500px)': {
            px: '10px',
          },
        }}
      >
        <Text
          as="p"
          sx={{
            pb: '20px',
            lineHeight: ['35px', '', '50px'],

            fontSize: ['50px', '', '65px'],
            fontWeight: theme.fontWeights.semiBold,
            color: theme.colours.navy,
          }}
        >
          {timeLeft[interval]}
        </Text>
        <Text
          as="p"
          sx={{
            p: '10px',
            lineHeight: ['18px', '', '', '28px'],
            textTransform: 'capitalize',

            fontSize: ['18px', '', '24px'],
            fontWeight: theme.fontWeights.semiBold,
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
        m: ['0 auto 50px', '', '', 0],
        px: '20px',
        '@media only screen and (max-width: 500px)': {
          px: '10px',
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
