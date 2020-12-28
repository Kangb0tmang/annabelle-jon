import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from 'rebass';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { ImageWrapper } from '../components/Container';

const Registry = () => {
  const data = useStaticQuery(graphql`
    query registryImgQuery {
      file(relativePath: { eq: "registry.jpg" }) {
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
      <SEO title="Registry" />
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
            mx: ['auto', '', 0],
            mb: ['50px', '', 0],
            pl: ['20px', '', 0],
          }}
        >
          <PageHeading>Gift Registry</PageHeading>
        </Box>
        <ImageWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImageWrapper>
      </Box>
    </Page>
  );
};

export default Registry;
