import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from 'rebass';
import Page from '../components/Page';
import SEO from '../components/SEO';
import Map from '../components/Map';
import PageHeading from '../components/PageHeading';
import { ContentWrapper, ImageWrapper } from '../components/Container';

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
      <SEO title="The Day" />
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
            alignSelf: ['flex-start', '', 'center'],
            width: ['540px', '', 'auto'],
            m: ['30px auto 50px', '', 0],
            pl: ['20px', '', 0],
          }}
        >
          <PageHeading>The Day</PageHeading>
        </Box>
        <ImageWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImageWrapper>
      </Box>
      <ContentWrapper>
        <Map />
      </ContentWrapper>
    </Page>
  );
};

export default OnTheDay;
