import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Page from '../components/Page';
import Map from '../components/Map';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { ImageWrapper } from '../components/Container';

const OnTheDay = () => {
  const data = useStaticQuery(graphql`
    query theDayImgQuery {
      file(relativePath: { eq: "the-day.jpg" }) {
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
      <SEO title="On The Day" />
      <PageHeading>What happens on the big day?</PageHeading>
      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
      <Map />
    </Page>
  );
};

export default OnTheDay;
