import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from 'rebass';
import SEO from '../components/SEO';
import Page from '../components/Page';
import PageHeading from '../components/PageHeading';
import PageTagline from '../components/PageTagline';
import { ImageWrapper } from '../components/Container';
import Footer from '../components/Footer';

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
          flexDirection: ['column', '', '', 'row'],
          justifyContent: 'center',
          width: '100%',
          mt: ['50px', '', '', 0],
          mb: ['100px', '', '', '150px'],
          px: [0, '', '', '20px'],
        }}
      >
        <Box
          sx={{
            alignSelf: ['', '', '', 'center'],
            width: ['100%', '', '', 'auto'],
            mx: ['auto', '', '', 0],
            mb: ['50px', '', '', 0],
            textAlign: ['center', '', '', 'left'],
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
      <Footer />
    </Page>
  );
};

export default Home;
