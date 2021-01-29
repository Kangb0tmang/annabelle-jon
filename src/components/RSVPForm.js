import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Flex, Text } from 'rebass';
import { Label, Input } from '@rebass/forms';
import { theme } from '../styles/theme';
import { ContentWrapper } from './Container';
import Yes from '../assets/yes.svg';

const RSVPForm = () => {
  const { handleSubmit, register, errors, formState } = useForm();
  const { isSubmitSuccessful } = formState;

  const onSubmit = async (form, event) => {
    console.log(form);

    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
    }

    let netlifyData = '';

    netlifyData = encode({
      'form-name': 'the-kangs-rsvp',
      ...form,
    });

    console.log('encode form data', netlifyData);

    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: netlifyData,
    });
  };

  // https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/?_ga=2.108103426.1247306375.1611640096-1259089272.1600833667

  return (
    <ContentWrapper>
      {isSubmitSuccessful ? (
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '560px',
            m: '0 auto',
            px: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '1',
              width: '70px',
              height: '70px',
              mb: '-25px',
              border: `1px solid ${theme.colours.grey}`,
              borderRadius: '100%',
              bg: theme.colours.white,
            }}
          >
            <Yes fill={`${theme.colours.darknavy}`} />
          </Box>
          <Text
            as="p"
            sx={{
              mb: ['100px', '', '', '150px'],
              p: '40px 30px',
              lineHeight: ['20px', '30px'],
              textAlign: 'center',
              borderRadius: '4px',
              border: `1px solid ${theme.colours.grey}`,
              fontSize: ['20px', '', '', '30px'],
            }}
          >
            Thank you for your RSVP. We look forward to celebrating with you!
          </Text>
        </Flex>
      ) : (
        <Box
          as="form"
          name="the-kangs-rsvp"
          method="post"
          action="/"
          onSubmit={handleSubmit(onSubmit)}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          sx={{
            mt: ['', '', '', '50px'],
            // mb: [
            //   rsvp === 'Yes' || rsvp === 'No' ? '50px' : 0,
            //   '',
            //   rsvp === 'Yes' || rsvp === 'No' ? '100px' : 0,
            // ],
            // height: ['730px', '', '780px'],
          }}
        >
          <Input type="hidden" name="form-name" value="the-kangs-rsvp" />
          <Flex
            sx={{
              flexDirection: 'column',
              width: '100%',
              maxWidth: '550px',
              m: '0 auto',
              px: '20px',
            }}
          >
            <Text
              as="p"
              sx={{
                mb: ['30px', '', '', '40px'],
                fontFamily: theme.fontFamily.cormorant,
                fontSize: ['30px', '', '', '40px'],
                fontWeight: theme.fontWeights.bold,
              }}
            >
              Will you be attending?
            </Text>
            <Box sx={{ width: '100%', mb: '20px' }}>
              <Label
                htmlFor="name"
                sx={{
                  mb: '5px',
                  fontSize: ['20px', '', '', '24px'],
                  fontWeight: theme.fontWeights.bold,
                }}
              >
                Name*
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                sx={{
                  p: '8px 15px',
                  fontSize: ['18px', '', '', '22px'],
                }}
                ref={register({
                  required: 'Please enter your name',
                })}
              />
              <Text
                as="p"
                sx={{
                  fontSize: ['16px'],
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colours.formError,
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
                  fontSize: ['20px', '', '', '24px'],
                  fontWeight: theme.fontWeights.bold,
                }}
              >
                Email*
              </Label>
              {/* https://react-hook-form.com/ */}
              <Input
                type="email"
                id="email"
                name="email"
                sx={{ fontSize: ['18px', '', '', '22px'] }}
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
                  fontWeight: theme.fontWeights.bold,
                  color: theme.colours.formError,
                }}
              >
                {errors.email && errors.email.message}
              </Text>
            </Box>
            <Box
              as="button"
              name="submit"
              type="submit"
              sx={{
                alignSelf: 'flex-start',
                width: '100%',
                p: '15px 10px',
                mt: ['10px', '', '20px'],
                border: `1px solid ${theme.colours.black}`,
                lineHeight: ['16px', '', '', '20px'],
                bg: theme.colours.white,
                fontSize: ['18px', '', '', '22px'],
                fontWeight: theme.fontWeights.bold,
                color: theme.colours.black,
                transition: 'background 0.3s ease',
                '&:hover': {
                  bg: theme.colours.navy,
                  cursor: 'pointer',
                  color: theme.colours.white,
                },
                '&:focus': {
                  bg: theme.colours.navy,
                  cursor: 'pointer',
                  color: theme.colours.white,
                },
              }}
            >
              RSVP
            </Box>
          </Flex>
        </Box>
      )}
    </ContentWrapper>
  );
};

export default RSVPForm;
