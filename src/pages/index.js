import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Text } from 'rebass';
import { theme } from '../styles/theme';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageIntro from '../components/PageIntro';
import { ImageWrapper } from '../components/Container';
import Footer from '../components/Footer';

const Home = () => {
  const data = useStaticQuery(graphql`
    query homeImgQuery {
      file(relativePath: { eq: "home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
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
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          mb: ['50px', '', '', '80px'],
        }}
      >
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
            The Kangs
          </Text>
          <Text
            as="p"
            sx={{
              mb: '10px',
              lineHeight: ['20px', '', '', '30px'],
              fontSize: ['25px', '', '', '35px'],
              fontWeight: theme.fontWeights.regular,
              color: theme.colours.darkgrey,
            }}
          >
            You&apos;re invited to our wedding
          </Text>
          <Text
            as="p"
            sx={{
              lineHeight: ['20px', '', '', '30px'],
              fontSize: ['25px', '', '', '35px'],
              fontWeight: theme.fontWeights.semiBold,
              color: theme.colours.darkgrey,
            }}
          >
            Friday, October 8th 2021
          </Text>
        </PageIntro>
        <ImageWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImageWrapper>
      </Box>
      <Footer />
    </Page>
  );
};

export default Home;
