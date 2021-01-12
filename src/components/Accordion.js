import React, { useState, useRef } from 'react';
import { Box, Flex, Text } from 'rebass';
import { theme } from '../styles/theme';
import { ContentWrapper } from './Container';
import { faqs } from '../content/faq-content';
import Plus from '../assets/plus.svg';
import Minus from '../assets/minus.svg';

const AccordionItem = ({ faq, index }) => {
  const [isActive, setIsActive] = useState(false);
  const [setHeight, setHeightState] = useState('0px');
  const contentRef = useRef();

  return (
    <Box key={index} sx={{ mb: '20px', '&:last-child': { mb: 0 } }}>
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
        <Box
          sx={{
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            width: '30px',
            height: '30px',
          }}
        >
          {isActive ? <Minus /> : <Plus />}
        </Box>
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
          mb: ['100px', '', '150px'],
          px: '20px',
        }}
      >
        {faqs.map((faq, index) => (
          <AccordionItem faq={faq} index={index} />
        ))}
      </Flex>
    </ContentWrapper>
  );
};

export default Accordion;
