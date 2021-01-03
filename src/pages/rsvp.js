import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from 'rebass';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { ImageWrapper } from '../components/Container';
import RSVPForm from '../components/RSVPForm';

const RSVP = () => {
  const data = useStaticQuery(graphql`
    query rsvpImgQuery {
      file(relativePath: { eq: "rsvp.jpg" }) {
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
      <SEO title="RSVP" />
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
          <PageHeading>RSVP</PageHeading>
        </Box>
        <ImageWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImageWrapper>
      </Box>
      <RSVPForm />
    </Page>
  );
};

export default RSVP;
