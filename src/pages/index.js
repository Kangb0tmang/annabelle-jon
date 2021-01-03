import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Text } from 'rebass';
import Page from '../components/Page';
import SEO from '../components/SEO';
import { theme } from '../styles/theme';
import PageHeading from '../components/PageHeading';
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
            maxWidth: ['540px', '', 'none'],
            width: ['100%', '', 'auto'],
            mx: ['auto', '', 0],
            mb: ['50px', '', 0],
            pl: ['20px', '', 0],
          }}
        >
          <PageHeading>The Kangs</PageHeading>
          <Text
            as="p"
            sx={{
              mr: '20px',
              lineHeight: '18px',
              br: {
                display: ['none', '', 'block'],
              },
            }}
          >
            You&apos;re invited to <br /> our wedding!
          </Text>
        </Box>
        <ImageWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImageWrapper>
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
          m: '50px 0',
          bg: theme.colours.black,
        }}
      />
    </Page>
  );
};

export default Home;
