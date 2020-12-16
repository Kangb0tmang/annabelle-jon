import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Page from '../components/Page';
import PreLaunchPage from '../components/PreLaunchPage';
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
      <PageHeading>Gift Registry</PageHeading>
      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
    </Page>
  );
};

export default Registry;
