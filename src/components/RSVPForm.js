import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Flex, Text } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
import { theme } from '../styles/theme';
import { ContentWrapper } from './Container';
import Yes from '../assets/yes.svg';
import No from '../assets/no.svg';

const RSVPForm = () => {
  const { handleSubmit, register, errors, formState } = useForm();
  const [rsvp, setRSVP] = useState('');
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

  // https://docs.netlify.com/forms/setup/?_ga=2.149481398.1247306375.1611640096-1259089272.1600833667

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
            {rsvp === 'Yes' ? (
              <Yes fill={`${theme.colours.darknavy}`} />
            ) : (
              <No fill={`${theme.colours.darknavy}`} />
            )}
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
            {rsvp === 'Yes'
              ? 'Thank you for your RSVP. We look forward to celebrating with you!'
              : "We're sorry to hear you can't make it. We'll be sharing the day with our friends, family and loved ones by email and through social media."}
          </Text>
        </Flex>
      ) : (
        <>
          {/* https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/?_ga=2.108103426.1247306375.1611640096-1259089272.1600833667 */}
          <form
            name="the-kangs-rsvp"
            data-netlify
            data-netlify-honeypot="bot-field"
            hidden
          >
            <fieldset>
              <input type="radio" name="rsvp" id="Yes" value="Yes" />
              <input type="radio" name="rsvp" id="No" value="No" />
            </fieldset>
            <input type="text" name="name" id="name" />
            <input type="email" name="email" id="email" />
            <input type="tel" name="number" id="number" />
            <textarea name="dietary" id="dietary" />
          </form>
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
              mb: [
                rsvp === 'Yes' || rsvp === 'No' ? '50px' : 0,
                '',
                rsvp === 'Yes' || rsvp === 'No' ? '100px' : 0,
              ],
              height: ['730px', '', '780px'],
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
              {/* Radio buttons: https://codepen.io/gabrielferreira/pen/oYxNVy/ */}
              <Box
                as="fieldset"
                sx={{
                  display: 'flex',
                  width: '100%',
                  mb: '30px',
                  border: 'none',
                }}
              >
                <Box sx={{ mr: '20px' }}>
                  <Label>
                    <Input
                      type="radio"
                      name="rsvp"
                      id="Yes"
                      value="Yes"
                      checked={rsvp === 'Yes'}
                      onChange={() => setRSVP('Yes')}
                      ref={register}
                      sx={{
                        display: 'none',
                        '&:checked': {
                          '+ div': {
                            borderColor: theme.colours.navy,
                            bg: theme.colours.navy,
                            span: { color: theme.colours.white },
                          },
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        p: ['20px 30px', '', '', '30px 40px'],
                        border: `1px solid ${theme.colours.black}`,
                        borderRadius: '4px',
                        textAlign: 'center',
                        willChange: 'transition',
                        transition: 'all, 250ms ease',
                      }}
                    >
                      {/* https://dev.to/abachi/how-to-change-svg-s-color-in-react-42g2 */}
                      <Box sx={{ mb: '15px' }}>
                        <Yes
                          fill={
                            rsvp === 'Yes'
                              ? `${theme.colours.white}`
                              : `${theme.colours.darknavy}`
                          }
                        />
                      </Box>
                      <Text
                        as="span"
                        sx={{
                          fontSize: ['18px', '', '', '20px'],
                          fontWeight: theme.fontWeights.bold,
                        }}
                      >
                        Yes
                      </Text>
                    </Box>
                  </Label>
                </Box>
                <Box>
                  <Label>
                    <Input
                      type="radio"
                      name="rsvp"
                      id="No"
                      value="No"
                      checked={rsvp === 'No'}
                      onChange={() => setRSVP('No')}
                      ref={register}
                      sx={{
                        display: 'none',
                        '&:checked': {
                          '+ div': {
                            borderColor: theme.colours.pink,
                            bg: theme.colours.pink,
                            span: { color: theme.colours.navy },
                          },
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        p: ['20px 30px', '', '', '30px 40px'],
                        border: `1px solid ${theme.colours.black}`,
                        borderRadius: '4px',
                        textAlign: 'center',
                        willChange: 'transition',
                        transition: 'all, 250ms ease',
                      }}
                    >
                      <Box sx={{ mb: '15px' }}>
                        <No
                          fill={
                            rsvp === 'No'
                              ? `${theme.colours.navy}`
                              : `${theme.colours.darknavy}`
                          }
                        />
                      </Box>
                      <Text
                        as="span"
                        sx={{
                          fontSize: ['18px', '', '', '20px'],
                          fontWeight: theme.fontWeights.bold,
                        }}
                      >
                        No
                      </Text>
                    </Box>
                  </Label>
                </Box>
              </Box>
              {rsvp && (
                <>
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
                  {rsvp === 'Yes' && (
                    <>
                      <Box sx={{ width: '100%', mb: '20px' }}>
                        <Label
                          htmlFor="number"
                          sx={{
                            mb: '5px',
                            fontSize: ['20px', '', '', '24px'],
                            fontWeight: theme.fontWeights.bold,
                          }}
                        >
                          Contact Number*
                        </Label>
                        {/* https://www.etl-tools.com/regular-expressions/is-australian-mobile-number.html */}
                        <Input
                          type="tel"
                          id="number"
                          name="number"
                          size="10"
                          sx={{ fontSize: ['18px', '', '', '22px'] }}
                          ref={register({
                            required: 'Please enter your contact number',
                            pattern: {
                              value: /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/,
                              message: 'Please enter a valid contact number',
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
                          {errors.number && errors.number.message}
                        </Text>
                      </Box>
                      <Box sx={{ width: '100%', mb: '20px' }}>
                        <Label
                          htmlFor="dietary"
                          sx={{
                            mb: '5px',
                            fontSize: ['20px', '', '', '24px'],
                            fontWeight: theme.fontWeights.bold,
                          }}
                        >
                          Dietary Requirements
                        </Label>
                        <Textarea
                          id="dietary"
                          name="dietary"
                          rows="5"
                          sx={{ fontSize: ['18px', '', '', '22px'] }}
                          ref={register}
                        />
                      </Box>
                    </>
                  )}
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
                </>
              )}
            </Flex>
          </Box>
        </>
      )}
    </ContentWrapper>
  );
};

export default RSVPForm;
