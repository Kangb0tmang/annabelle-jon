import React, { useState, useRef } from 'react';
import { Box, Flex, Text } from 'rebass';
import { theme } from '../styles/theme';
import { useEventListener, debounce } from '../scripts/helpers';
import { ContentWrapper } from './Container';
import { faqs } from '../content/faq-content';
import Leaf from '../assets/leaf.svg';

const FAQLeaf = () => (
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '10px',
      transform: 'translateY(-50%) rotate(-130deg)',
      width: '35px',
      height: 'auto',
    }}
  >
    <Leaf />
  </Box>
);

const AccordionItem = ({ faq, index }) => {
  const [isActive, setIsActive] = useState(false);
  const [setHeight, setHeightState] = useState('0px');
  const contentRef = useRef();

  const handleResize = () => {
    setHeightState(isActive && `${contentRef.current.scrollHeight}px`);
  };

  useEventListener('resize', debounce(handleResize, 100));

  return (
    <Box sx={{ mb: '25px', '&:last-child': { mb: 0 } }}>
      <Box
        as="button"
        sx={{
          position: 'relative',
          width: '100%',
          p: '15px 70px',
          borderRadius: '4px',
          textAlign: 'left',
          fontFamily: theme.fontFamily.cormorant,
          fontSize: ['18px', '', '', '24px'],
          fontWeight: theme.fontWeights.semiBold,
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
        <FAQLeaf />
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
              bg: isActive ? theme.colours.lightgrey : theme.colours.navy,
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
              bg: isActive ? theme.colours.lightgrey : theme.colours.navy,
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
            py: '10px',
            pr: '80px',
            pl: '70px',
            transition: 'opacity 0.3s 0s ease-in-out',
            opacity: isActive ? '1' : '0',
            fontFamily: theme.fontFamily.cormorant,
            fontSize: ['16px', '', '', '18px'],
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
          mt: ['50px', '', '', '80px'],
          mb: ['100px', '', '', '120px', '', '150px'],
          ml: ['', '', '', '', '15px'],
          px: '20px',
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
