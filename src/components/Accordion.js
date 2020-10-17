import React, { useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { ContentWrapper } from './Container';
import { theme } from '../styles/theme';
import { faqs } from '../content/faq-content';

const Accordion = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  return (
    <ContentWrapper>
      <Flex
        sx={{
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {faqs.map((faq, index) => {
          return (
            <Box key={index} sx={{ mb: 2, '&:last-child': { mb: 0 } }}>
              <Box
                as="button"
                sx={{
                  width: '100%',
                  p: 3,
                  border: `1px solid ${theme.colors.grey}`,
                  borderRadius: '4px',
                  textAlign: 'left',
                  fontSize: 4,
                  fontWeight: theme.fontWeights.medium,
                }}
                onClick={() => {
                  setOpen(activeItem === index ? !open : true);
                  setActiveItem(activeItem === index ? '' : index);
                }}
              >
                {faq.question}
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
                    fontSize: 3,
                    py: 3,
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
