import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import { ImageWrapper } from '../components/Container';
import Accordion from '../components/Accordion';

const FAQ = () => {
  const data = useStaticQuery(graphql`
    query faqImgQuery {
      file(relativePath: { eq: "faq.jpg" }) {
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
      <SEO title="FAQ" />
      <PageHeading>Frequently Asked Questions</PageHeading>
      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
      <Accordion />
    </Page>
  );
};

export default FAQ;
