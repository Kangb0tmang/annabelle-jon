import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Flex, Box } from 'rebass';
import { theme } from '../styles/theme';
import SEO from '../components/SEO';
import Page from '../components/Page';
import HeaderText from '../components/HeaderText';
import { ImageWrapper } from '../components/Container';
import Footer from '../components/Footer';
import Branch from '../assets/branch.svg';

// Leaf for header
const HeaderLeaf = () => (
  <Box
    sx={{
      display: ['none', '', '', 'block'],
      width: 'auto',
      mt: '-35px',
      mr: ['20px', '', '', 0],
    }}
  >
    <Branch />
  </Box>
);

const Home = () => {
  const data = useStaticQuery(graphql`
    query homeImgQuery {
      file(relativePath: { eq: "home.jpg" }) {
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
        <Flex
          sx={{
            justifyContent: 'space-between',
            width: ['100%', '', '', '', '1120px'],
            mx: 'auto',
            mb: '50px',
            // pl: ['20px', '', '', '', 0],
            px: '20px',
          }}
        >
          <Box>
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
          </Box>
          <HeaderLeaf />
        </Flex>
        <ImageWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImageWrapper>
      </Box>
      <Footer />
    </Page>
  );
};

export default Home;
