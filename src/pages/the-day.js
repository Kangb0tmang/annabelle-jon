import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from 'rebass';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import PageTagline from '../components/PageTagline';
import MapContainer from '../components/Map';
import Schedule from '../components/Schedule';
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
            maxWidth: ['540px', '', 'none'],
            width: ['100%', '', 'auto'],
            m: ['30px auto 50px', '', 0],
            pl: ['20px', '', 0],
          }}
        >
          <PageHeading>
            The <br /> Day
          </PageHeading>
          <PageTagline>
            What happens <br /> on the big day?
          </PageTagline>
        </Box>
        <ImageWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImageWrapper>
      </Box>
      <ContentWrapper>
        <MapContainer />
        <Schedule />
      </ContentWrapper>
    </Page>
  );
};

export default OnTheDay;
