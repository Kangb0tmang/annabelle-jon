import React from 'react';
import Page from '../components/Page';
import SEO from '../components/SEO';
import Accordion from '../components/Accordion';

const Home = () => (
  <Page>
    <SEO title="FAQ" />
    <h1>Frequently Asked Questions</h1>
    <Accordion />
  </Page>
);

export default Home;
