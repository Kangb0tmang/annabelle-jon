import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Flex, Box, Text, Link } from 'rebass';
import { theme } from '../styles/theme';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageIntro from '../components/PageIntro';
import Map from '../components/Map';
import Schedule from '../components/Schedule';
import { ImageWrapper } from '../components/Container';
import Footer from '../components/Footer';

const OnTheDay = () => {
  const data = useStaticQuery(graphql`
    query theDayImgQuery {
      file(relativePath: { eq: "the-day.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Page>
      <SEO title="The Day" />
      <PageIntro>
        <Text
          as="h1"
          sx={{
            mb: ['30px', '', '', '40px'],
            lineHeight: ['45px', '', '', '55px'],
            textTransform: 'uppercase',
            fontSize: ['55px', '', '', '70px'],
            fontWeight: theme.fontWeights.regular,
            color: theme.colours.darkgrey,
          }}
        >
          The Day
        </Text>
        <Text
          as="p"
          sx={{
            lineHeight: ['20px', '', '', '30px'],
            fontSize: ['25px', '', '', '35px'],
            fontWeight: theme.fontWeights.regular,
            color: theme.colours.darkgrey,
          }}
        >
          What happens on the day?
        </Text>
      </PageIntro>
      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
      <Flex
        sx={{
          flexDirection: ['column', '', '', 'row'],
          alignItems: ['center', '', '', 'flex-start'],
          margin: ['20px auto 0', '', '', '40px auto 0'],
          maxWidth: '1240px',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: ['100%', '', '', '50%'],
            mr: ['', '', '', '50px'],
            ml: ['', '', '', '20px'],
            '@media only screen and (min-width: 1250px)': {
              ml: 0,
            },
          }}
        >
          <Map />
          <Box sx={{ mb: ['50px', '', '', '', 0], ml: ['20px', '', '', 0] }}>
            <Text
              sx={{
                mb: ['20px', '', '', '30px'],
                fontSize: ['30px', '', '', '40px'],
              }}
            >
              Potters Reception
            </Text>
            <Link
              href="https://maps.google.com/maps?ll=-37.746879,145.236478&z=15&t=m&hl=en-GB&gl=US&mapclient=apiv3&cid=5984047495981433388"
              target="_blank"
              sx={{
                position: 'relative',
                lineHeight: '28px',
                textDecoration: 'none',
                fontSize: '22px',
                fontWeight: theme.fontWeights.semiBold,
                color: theme.colours.black,
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: '0',
                  bottom: '-5px',
                  height: '2px',
                  width: '0px',
                },
                '&:hover': {
                  color: theme.colours.navy,
                  '&:after': {
                    width: '100%',
                    bg: theme.colours.navy,
                    transition: 'width 0.2s ease',
                  },
                },
                '&:focus': {
                  color: theme.colours.navy,
                  '&:after': {
                    width: '100%',
                    bg: theme.colours.navy,
                    transition: 'width 0.2s ease',
                  },
                },
                '@media only screen and (max-width: 425px)': {
                  '&:hover': {
                    '&:after': {
                      width: '0px',
                      bg: theme.colours.navy,
                      transition: 'none',
                    },
                  },
                  '&:focus': {
                    '&:after': {
                      width: '0px',
                      bg: theme.colours.navy,
                      transition: 'none',
                    },
                  },
                },
              }}
            >
              321 Jumping Creek Rd, Warrandyte VIC 3113
            </Link>
          </Box>
        </Box>
        <Box sx={{ width: ['100%', '', '', '50%'] }}>
          <Schedule />
        </Box>
      </Flex>
      <Footer />
    </Page>
  );
};

export default OnTheDay;
