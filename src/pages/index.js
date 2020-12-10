import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box } from 'rebass';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Nav from '../components/Nav';
import Img from 'gatsby-image';
import Footer from '../components/Footer';
import PageHeading from '../components/PageHeading';
import Container, {
  ContentWrapper,
  ImageWrapper,
} from '../components/Container';
import Countdown from '../components/Countdown';
import RSVPButton from '../components/RSVPButton';
import backgroundImage from '../images/background.jpg';

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
    <Layout>
      <SEO title="Home" />
      <Container>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: ['100% 250px', '', '100%'],
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Box
            sx={{
              maxWidth: '1000px',
              width: '100%',
              backgroundColor: [
                'transparent',
                '',
                '',
                'rgba(255, 255, 255, 0.7)',
              ],
            }}
          >
            <Nav />
            <PageHeading>The Kangs</PageHeading>
            <ImageWrapper>
              <Img fluid={data.file.childImageSharp.fluid} />
            </ImageWrapper>
            <ContentWrapper>
              <Countdown />
            </ContentWrapper>
            <RSVPButton />
            <Footer />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
