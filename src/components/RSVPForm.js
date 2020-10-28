import React from 'react';
import { useForm } from 'react-hook-form';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Flex, Text } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
import { theme } from '../styles/theme';
import { ContentWrapper, ImageWrapper } from './Container';

const RSVPForm = () => {
  const { handleSubmit, register, errors, formState } = useForm();
  const { isSubmitSuccessful } = formState;
  const functionURL = 'https://sand-wildebeest-1919.twil.io/send-email';
  const onSubmit = async (form) => {
    const fromEmail = `${form.email}`;
    const name = `${form.name}`;
    const subject = `Wedding RSVP from ${form.name}`;
    const body = `${form.dietary}`;

    const response = await fetch(functionURL, {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: new URLSearchParams({ fromEmail, name, subject, body }).toString(),
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
                  fontWeight: theme.fontWeights.medium,
                }}
              >
                Thank you for your RSVP. We look forward to celebrating with
                you!
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
              alignItems: 'center',
              width: '100%',
              maxWidth: '550px',
              m: '0 auto',
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
                  color: theme.colours.formError,
                }}
              >
                {errors.email && errors.email.message}
              </Text>
            </Box>
            <Box sx={{ width: '100%', mb: '20px' }}>
              <Label
                htmlFor="dietary"
                sx={{
                  mb: '5px',
                  fontSize: ['20px', '', '24px'],
                  fontWeight: theme.fontWeights.medium,
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
                fontWeight: theme.fontWeights.medium,
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
