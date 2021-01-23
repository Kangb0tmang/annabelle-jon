import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Text } from 'rebass';
import Page from '../components/Page';
import SEO from '../components/SEO';
import { theme } from '../styles/theme';
import PageHeading from '../components/PageHeading';
import PageTagline from '../components/PageTagline';
import RSVPButton from '../components/RSVPButton';
import { ImageWrapper } from '../components/Container';
import Countdown from '../components/Countdown';

const Home = () => {
  const data = useStaticQuery(graphql`
    query homeImgQuery {
      file(relativePath: { eq: "home.jpg" }) {
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
    <Page>
      <SEO title="The Kangs" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', '', 'row'],
          justifyContent: 'center',
          width: '100%',
          mb: '50px',
          px: [0, '', '20px'],
        }}
      >
        <Box
          sx={{
            display: ['block', '', 'none'],
            m: '60px auto',
            textAlign: 'center',
          }}
        >
          <RSVPButton />
        </Box>
        <Box
          sx={{
            alignSelf: ['flex-start', '', 'center'],
            width: ['100%', '', 'auto'],
            mx: ['auto', '', 0],
            mb: ['50px', '', 0],
            pl: ['20px', '', 0],
          }}
        >
          <PageHeading>
            The <br /> Kangs
          </PageHeading>
          <PageTagline>
            You&apos;re invited <br /> to our <br /> wedding!
          </PageTagline>
        </Box>
        <ImageWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImageWrapper>
      </Box>
      <Box sx={{ mx: '20px', mt: [0, '', '20px'], mb: ['40px', '', 0] }}>
        <Text
          sx={{
            lineHeight: ['36px', '', '50px'],
            fontFamily: theme.fontFamily.cormorant,
            fontSize: ['36px', '', '50px'],
            fontWeight: theme.fontWeights.bold,
            color: theme.colours.navy,
            '@media only screen and (min-width: 500px) and (max-width: 739px)': {
              lineHeight: '50px',
              fontSize: '50px',
            },
          }}
        >
          Saturday, June 5, 2021
        </Text>
      </Box>
      <Countdown />
      <Box
        sx={{
          display: ['none', '', 'block'],
          mt: ['50px', '', '80px'],
          padding: ['15px', '', '25px'],
          textAlign: 'center',
        }}
      >
        <RSVPButton />
      </Box>
      <Box
        sx={{
          display: ['none', '', 'block'],
          width: '2px',
          height: '100px',
          mt: '50px',
          bg: theme.colours.black,
        }}
      />
    </Page>
  );
};

export default Home;
