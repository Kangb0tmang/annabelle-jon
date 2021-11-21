import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Text } from 'rebass';
import { theme } from '../styles/theme';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageIntro from '../components/PageIntro';
import { ImageWrapper } from '../components/Container';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';

const FAQ = () => {
  const data = useStaticQuery(graphql`
    query faqImgQuery {
      file(relativePath: { eq: "faq.jpg" }) {
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
      <SEO title="FAQs" />
      <PageIntro>
        <Text
          as="h1"
          sx={{
            mb: ['30px', '', '', '40px'],
            lineHeight: ['45px', '', '', '55px'],
            fontSize: ['55px', '', '', '70px'],
            fontWeight: theme.fontWeights.regular,
            color: theme.colours.darkgrey,
          }}
        >
          FAQs
        </Text>
        <Text
          as="p"
          sx={{
            lineHeight: ['20px', '', '', '30px'],
            fontSize: ['25px', '', '', '35px'],
            fontWeight: theme.fontWeights.regular,
            color: theme.colours.darkgrey,
          }}
        >
          Answers to questions you might have
        </Text>
      </PageIntro>
      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
      <Accordion />
      <Footer />
    </Page>
  );
};

export default FAQ;
