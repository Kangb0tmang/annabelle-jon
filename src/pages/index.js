import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Page from '../components/Page';
import PreLaunchPage from '../components/PreLaunchPage';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import Img from 'gatsby-image';
import { ContentWrapper, ImageWrapper } from '../components/Container';
import Countdown from '../components/Countdown';
import RSVPButton from '../components/RSVPButton';

// Or use custom variable
console.log(process.env.NODE_ENV);

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

  return process.env.NODE_ENV === 'production' ? (
    <PreLaunchPage />
  ) : (
    <Page>
      <SEO title="The Kangs" />
      <PageHeading>The Kangs</PageHeading>
      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
      <ContentWrapper>
        <Countdown />
      </ContentWrapper>
      <RSVPButton />
    </Page>
  );
};

export default Home;
