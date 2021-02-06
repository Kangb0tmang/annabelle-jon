import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Text } from 'rebass';
import { theme } from '../styles/theme';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageIntro from '../components/PageIntro';
import Map from '../components/Map';
import Schedule from '../components/Schedule';
import { ContentWrapper, ImageWrapper } from '../components/Container';
import Footer from '../components/Footer';

const OnTheDay = () => {
  const data = useStaticQuery(graphql`
    query theDayImgQuery {
      file(relativePath: { eq: "the-day.jpg" }) {
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
      <SEO title="The Day" />
      <PageIntro>
        <Text
          as="h1"
          sx={{
            mb: ['30px', '', '', '40px'],
            lineHeight: ['45px', '', '', '55px'],
            textTransform: 'uppercase',

            fontSize: ['55px', '', '', '70px'],
            fontWeight: theme.fontWeights.regular,
            color: theme.colours.black,
          }}
        >
          The Day
        </Text>
        <Text
          as="p"
          sx={{
            lineHeight: ['20px', '', '', '30px'],

            fontSize: ['25px', '', '', '35px'],
            fontWeight: theme.fontWeights.regular,
            color: theme.colours.black,
          }}
        >
          What happens on the day?
        </Text>
      </PageIntro>
      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
      <ContentWrapper>
        <Map />
        <Schedule />
      </ContentWrapper>
      <Footer />
    </Page>
  );
};

export default OnTheDay;
