import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Flex, Text } from 'rebass';
import { Label, Input, Radio, Textarea } from '@rebass/forms';
import { theme } from '../styles/theme';
import { ContentWrapper, ImageWrapper } from './Container';

const RSVPForm = () => {
  const { handleSubmit, register, errors, formState } = useForm();
  const [rsvp, setRSVP] = useState('');
  const { isSubmitSuccessful } = formState;
  const functionURL = 'https://sand-wildebeest-1919.twil.io/send-email';
  const onSubmit = async (form) => {
    console.log(form);
    const rsvp = `${form.rsvp}`;
    const name = `${form.name}`;
    const fromEmail = `${form.email}`;
    const number = form.number ? `${form.number}` : '';
    const subject = `Wedding RSVP from ${form.name}`;
    const body = form.dietary ? `${form.dietary}` : '';

    const response = await fetch(functionURL, {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: new URLSearchParams({
        rsvp,
        fromEmail,
        name,
        number,
        subject,
        body,
      }).toString(),
    });

    // Testing only
    if (response.status === 200) {
      console.log(response.json());
    } else {
      const json = await response.json();
      console.log(json);
    }
  };

  const data = useStaticQuery(graphql`
    query rsvpImgQuery {
      file(relativePath: { eq: "rsvp.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
    <ContentWrapper>
      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
      {isSubmitSuccessful ? (
        <>
          <Flex
            sx={{
              alignItems: 'center',
              width: '100%',
              maxWidth: '600px',
              m: '0 auto',
              px: '20px',
            }}
          >
            <Box sx={{ mt: ['25px', '', '40px'] }}>
              <Text
                as="p"
                sx={{
                  lineHeight: ['28px', '36px'],
                  textAlign: 'center',
                  fontSize: ['30px', '', '40px'],
                }}
              >
                {rsvp === 'Yes'
                  ? 'Thank you for your RSVP. We look forward to celebrating with you!'
                  : "We're sorry to hear you can't make it. We'll be sharing the day with our friends, family and loved ones by email and through social media."}
              </Text>
            </Box>
          </Flex>
        </>
      ) : (
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          action={functionURL}
        >
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
                mb: '10px',
                fontSize: ['20px', '', '24px'],
                fontWeight: theme.fontWeights.bold,
              }}
            >
              Attending?
            </Text>
            <Flex sx={{ width: '100%', mb: '30px' }}>
              <Box sx={{ mr: '20px' }}>
                <Label>
                  <Radio
                    name="rsvp"
                    id="Yes"
                    value="Yes"
                    checked={rsvp === 'Yes'}
                    onChange={() => setRSVP('Yes')}
                    ref={register}
                  />
                  Yes
                </Label>
              </Box>
              <Box>
                <Label>
                  <Radio
                    name="rsvp"
                    id="No"
                    value="No"
                    checked={rsvp === 'No'}
                    onChange={() => setRSVP('No')}
                    ref={register}
                  />
                  No
                </Label>
              </Box>
            </Flex>
            {rsvp && (
              <>
                <Box sx={{ width: '100%', mb: '20px' }}>
                  <Label
                    htmlFor="name"
                    sx={{
                      mb: '5px',
                      fontSize: ['20px', '', '24px'],
                      fontWeight: theme.fontWeights.bold,
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
                      fontSize: ['20px', '', '24px'],
                      fontWeight: theme.fontWeights.bold,
                    }}
                  >
                    Email
                  </Label>
                  {/* https://react-hook-form.com/ */}
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
                      fontWeight: theme.fontWeights.bold,
                      color: theme.colours.formError,
                    }}
                  >
                    {errors.email && errors.email.message}
                  </Text>
                </Box>
                {rsvp && rsvp === 'Yes' ? (
                  <>
                    <Box sx={{ width: '100%', mb: '20px' }}>
                      <Label
                        htmlFor="number"
                        sx={{
                          mb: '5px',
                          fontSize: ['20px', '', '24px'],
                          fontWeight: theme.fontWeights.bold,
                        }}
                      >
                        Contact Number
                      </Label>
                      {/* https://www.etl-tools.com/regular-expressions/is-australian-mobile-number.html */}
                      <Input
                        type="tel"
                        id="number"
                        name="number"
                        size="10"
                        sx={{ fontSize: ['18px', '', '22px'] }}
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
                          fontSize: ['20px', '', '24px'],
                          fontWeight: theme.fontWeights.bold,
                        }}
                      >
                        Dietary Requirements
                      </Label>
                      <Textarea
                        id="dietary"
                        name="dietary"
                        rows="5"
                        sx={{ fontSize: ['18px', '', '22px'] }}
                        ref={register}
                      />
                    </Box>
                  </>
                ) : (
                  <></>
                )}
                <Box
                  as="button"
                  sx={{
                    alignSelf: 'flex-start',
                    p: '10px',
                    mt: ['10px', '', '20px'],
                    border: `1px solid ${theme.colours.black}`,
                    borderRadius: '2px',
                    lineHeight: ['16px', '', '20px'],
                    fontSize: ['18px', '', '22px'],
                    fontWeight: theme.fontWeights.bold,
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  RSVP
                </Box>
              </>
            )}
          </Flex>
        </Box>
      )}
    </ContentWrapper>
  );
};

export default RSVPForm;
