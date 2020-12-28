import React, { useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { theme } from '../styles/theme';
import { ContentWrapper } from './Container';
import { faqs } from '../content/faq-content';
// import Plus from '../assets/plus.svg';
// import Minus from '../assets/minus.svg';
import Plus from '../assets/add.svg'; //temporary
import Minus from '../assets/remove.svg'; //temporary

const Accordion = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  return (
    <ContentWrapper>
      <Flex
        sx={{
          flexDirection: 'column',
          width: '100%',
          mb: ['30px', '', '100px'],
          px: '20px',
        }}
      >
        {faqs.map((faq, index) => {
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
                  setOpen(activeItem === index ? !open : true);
                  setActiveItem(activeItem === index ? '' : index);
                }}
              >
                {faq.question}
                <Box
                  sx={{
                    position: 'absolute',
                    display: 'inline-block',
                    width: '30px',
                    height: '30px',
                    right: '20px',
                  }}
                >
                  {activeItem === index ? <Minus /> : <Plus />}
                </Box>
              </Box>
              <Box
                activeItem={activeItem}
                index={index}
                sx={{
                  overflow: 'hidden',
                  height: activeItem === index ? 'auto' : '0px',
                }}
              >
                <Text
                  as="p"
                  sx={{
                    fontSize: ['16px', '', '18px'],
                    py: '10px',
                    pr: '20px',
                    transition: 'opacity 0.3s 0s ease-in-out',
                    opacity: activeItem === index ? '1' : '0',
                  }}
                >
                  {faq.response}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </ContentWrapper>
  );
};

export default Accordion;
