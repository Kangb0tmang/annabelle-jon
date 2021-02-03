import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from 'rebass';
import { theme } from '../styles/theme';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageIntro from '../components/PageIntro';
import HeaderText from '../components/HeaderText';
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
        <PageIntro leafDimensions={{ width: '300px', height: '250px' }}>
          <HeaderText
            as="h1"
            styles={{
              mb: ['30px', '', '', '40px'],
              lineHeight: ['45px', '', '', '55px'],
              textTransform: 'uppercase',
              fontFamily: theme.fontFamily.cormorant,
              fontSize: ['55px', '', '', '70px'],
              fontWeight: theme.fontWeights.regular,
              color: theme.colours.black,
            }}
          >
            The Kangs
          </HeaderText>
          <HeaderText
            as="p"
            styles={{
              mb: '10px',
              lineHeight: ['20px', '', '', '30px'],
              fontFamily: theme.fontFamily.cormorant,
              fontSize: ['25px', '', '', '35px'],
              fontWeight: theme.fontWeights.regular,
              color: theme.colours.black,
            }}
          >
            You&apos;re invited to our wedding
          </HeaderText>
          <HeaderText
            as="p"
            styles={{
              lineHeight: ['20px', '', '', '30px'],
              fontFamily: theme.fontFamily.cormorant,
              fontSize: ['25px', '', '', '35px'],
              fontWeight: theme.fontWeights.bold,
              color: theme.colours.black,
            }}
          >
            Saturday, June 5th 2021
          </HeaderText>
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
