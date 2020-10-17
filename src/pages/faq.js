import React from 'react';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import Accordion from '../components/Accordion';

const FAQ = () => (
  <Page>
    <SEO title="FAQ" />
    <PageHeading>Frequently Asked Questions</PageHeading>
    <Accordion />
  </Page>
);

export default FAQ;
