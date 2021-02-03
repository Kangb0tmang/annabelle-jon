import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { theme } from '../styles/theme';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageIntro from '../components/PageIntro';
import HeaderText from '../components/HeaderText';
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
        <HeaderText
          as="h1"
          styles={{
            mb: ['30px', '', '', '40px'],
            lineHeight: ['45px', '', '', '55px'],
            fontFamily: theme.fontFamily.cormorant,
            fontSize: ['55px', '', '', '70px'],
            fontWeight: theme.fontWeights.regular,
            color: theme.colours.black,
          }}
        >
          FAQs
        </HeaderText>
        <HeaderText
          as="p"
          styles={{
            mb: '10px',
            lineHeight: ['20px', '', '', '30px'],
            fontFamily: theme.fontFamily.cormorant,
            fontSize: ['25px', '', '', '35px'],
            fontWeight: theme.fontWeights.regular,
            color: theme.colours.black,
          }}
        >
          Answers to questions you might have
        </HeaderText>
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
