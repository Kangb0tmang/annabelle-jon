import React, { useState, useRef } from 'react';
import { Box, Flex, Text } from 'rebass';
import { theme } from '../styles/theme';
import { useEventListener, debounce } from '../scripts/helpers';
import { ContentWrapper } from './Container';
import { faqs } from '../content/faq-content';

const AccordionItem = ({ faq, index }) => {
  const [isActive, setIsActive] = useState(false);
  const [setHeight, setHeightState] = useState('0px');
  const contentRef = useRef();

  const handleResize = () => {
    setHeightState(isActive && `${contentRef.current.scrollHeight}px`);
  };

  useEventListener('resize', debounce(handleResize, 100));

  return (
    <Box sx={{ mb: '20px', '&:last-child': { mb: 0 } }}>
      <Box
        as="button"
        sx={{
          position: 'relative',
          width: '100%',
          py: '15px',
          pr: ['60px', '', '15px'],
          pl: '15px',
          border: `1px solid ${theme.colours.grey}`,
          borderRadius: '4px',
          textAlign: 'left',
          fontSize: ['18px', '', '24px'],
          fontWeight: theme.fontWeights.bold,
          transition: 'background 0.2s ease',
          '&:hover': {
            cursor: 'pointer',
            bg: theme.colours.lightgreyHover,
          },
        }}
        onClick={() => {
          setIsActive(!isActive);
          setHeightState(
            isActive ? '0px' : `${contentRef.current.scrollHeight}px`
          );
        }}
      >
        {faq.question}
        {/* Inspired by https://codepen.io/christeldesign/pen/mxdjMo */}
        <Box
          sx={{
            position: 'absolute',
            display: 'inline-block',
            top: isActive ? '50%' : '47%',
            right: '20px',
            transform: 'translateY(-50%)',
            width: '30px',
            height: '30px',
            '&:before': {
              content: '""',
              position: 'absolute',
              display: 'block',
              top: '50%',
              width: '100%',
              height: '4px',
              bg: isActive ? theme.colours.lightblue : theme.colours.navy,
              transform: isActive ? 'rotate(180deg)' : 'rotate(90deg)',
              transition: 'transform 300ms, opacity 200ms, background 600ms',
            },
            '&:after': {
              content: '""',
              position: 'absolute',
              display: 'block',
              top: '50%',
              width: '100%',
              height: '4px',
              opacity: isActive ? '0' : '1',
              bg: isActive ? theme.colours.lightblue : theme.colours.navy,
              transform: isActive ? 'rotate(360deg)' : 'rotate(0deg)',
              transition: 'transform 300ms, opacity 200ms, background 600ms',
            },
          }}
        />
      </Box>
      <Box
        index={index}
        sx={{
          overflow: 'hidden',
          height: isActive ? setHeight : '0px',
          transition: 'height 0.3s 0s ease-in-out',
        }}
      >
        <Text
          ref={contentRef}
          as="p"
          sx={{
            fontSize: ['16px', '', '18px'],
            py: '10px',
            pr: '20px',
            pl: '15px',
            transition: 'opacity 0.3s 0s ease-in-out',
            opacity: isActive ? '1' : '0',
          }}
        >
          {faq.response}
        </Text>
      </Box>
    </Box>
  );
};

const Accordion = () => {
  return (
    <ContentWrapper>
      <Flex
        sx={{
          flexDirection: 'column',
          width: '100%',
          mt: ['', '', '50px'],
          mb: ['50px', '100px', '', '150px'],
          px: '20px',
          '@media only screen and (min-width: 850px) and (max-width: 999px)': {
            mb: '150px',
          },
          '@media only screen and (min-width: 1000px) and (max-width: 1139px)': {
            mb: '180px',
          },
        }}
      >
        {faqs.map((faq, index) => (
          <AccordionItem key={index} faq={faq} index={index} />
        ))}
      </Flex>
    </ContentWrapper>
  );
};

export default Accordion;
