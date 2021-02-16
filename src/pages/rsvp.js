import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Text } from 'rebass';
import { theme } from '../styles/theme';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageIntro from '../components/PageIntro';
import { ImageWrapper } from '../components/Container';
import RSVPForm from '../components/RSVPForm';

const RSVP = () => {
  const data = useStaticQuery(graphql`
    query rsvpImgQuery {
      file(relativePath: { eq: "rsvp.jpg" }) {
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
      <SEO title="RSVP" />
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
          RSVP
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
          We hope you can celebrate with us!
        </Text>
      </PageIntro>
      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
      <RSVPForm />
    </Page>
  );
};

export default RSVP;
