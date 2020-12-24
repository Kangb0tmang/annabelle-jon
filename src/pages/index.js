import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Text } from 'rebass';
import Img from 'gatsby-image';
import Page from '../components/Page';
import SEO from '../components/SEO';
import { theme } from '../styles/theme';
import { ContentWrapper } from '../components/Container';
import Countdown from '../components/Countdown';
import RSVPButton from '../components/RSVPButton';

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
            mt: '50px',
            mb: '80px',
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          <RSVPButton />
        </Box>
        <Box
          sx={{
            alignSelf: ['flex-start', '', 'center'],
            width: ['540px', '', 'auto'],
            mx: ['auto', '', 0],
            mb: ['50px', '', 0],
            pl: ['20px', '', 0],
          }}
        >
          <Text as="h1" sx={{ mb: '10px' }}>
            The Kangs
          </Text>
          <Text
            as="p"
            sx={{
              width: ['auto', '', '65%'],
              lineHeight: '18px',
            }}
          >
            You&apos;re invited to our wedding!
          </Text>
        </Box>
        <Box
          sx={{
            position: 'relative',
            alignSelf: ['center', '', 'flex-start'],
            px: ['20px', '', 0],
            maxWidth: ['540px', '', '500px'],
            width: '100%',
            boxShadow: ['none', '', `30px 30px 0px ${theme.colours.lightblue}`],
          }}
        >
          <Img fluid={data.file.childImageSharp.fluid} />
        </Box>
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
