import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Flex, Text } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
import { theme } from '../styles/theme';
import { ContentWrapper } from './Container';

const RSVPForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <ContentWrapper>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '550px',
            margin: '0 auto',
            px: '20px',
          }}
        >
          <Box sx={{ width: '100%', mb: '20px' }}>
            <Label
              htmlFor="name"
              sx={{
                mb: '5px',
                fontSize: ['20px', '', '24px'],
                fontWeight: theme.fontWeights.medium,
              }}
            >
              Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              sx={{ fontSize: ['18px', '', '22px'] }}
              ref={register({
                required: 'Please enter your name',
              })}
            />
            <Text
              as="p"
              sx={{
                fontSize: ['16px'],
                fontWeight: theme.fontWeights.medium,
                color: theme.colors.formError,
              }}
            >
              {errors.name && errors.name.message}
            </Text>
          </Box>
          <Box sx={{ width: '100%', mb: '20px' }}>
            <Label
              htmlFor="email"
              sx={{
                mb: '5px',
                fontSize: ['20px', '', '24px'],
                fontWeight: theme.fontWeights.medium,
              }}
            >
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              sx={{ fontSize: ['18px', '', '22px'] }}
              ref={register({
                required: 'Please enter your email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            <Text
              as="p"
              sx={{
                fontSize: ['16px'],
                fontWeight: theme.fontWeights.medium,
                color: theme.colors.formError,
              }}
            >
              {errors.email && errors.email.message}
            </Text>
          </Box>
          <Box sx={{ width: '100%', mb: '20px' }}>
            <Label
              htmlFor="dietary-req"
              sx={{
                mb: '5px',
                fontSize: ['20px', '', '24px'],
                fontWeight: theme.fontWeights.medium,
              }}
            >
              Dietary Requirements
            </Label>
            <Textarea
              id="dietary-req"
              name="dietary-req"
              sx={{ fontSize: ['18px', '', '22px'] }}
            />
          </Box>
          <Box
            as="button"
            sx={{
              alignSelf: 'flex-start',
              p: '10px',
              mt: ['10px', '', '20px'],
              border: `1px solid ${theme.colors.black}`,
              borderRadius: '2px',
              lineHeight: ['16px', '', '20px'],
              fontSize: ['18px', '', '22px'],
              fontWeight: theme.fontWeights.medium,
            }}
          >
            RSVP
          </Box>
        </Flex>
      </Box>
    </ContentWrapper>
  );
};

export default RSVPForm;
