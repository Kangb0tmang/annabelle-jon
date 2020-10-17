import React from 'react';
import { Link } from 'gatsby';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';

const NotFoundPage = () => (
  <Page>
    <SEO title="404: Not found" />
    <PageHeading>Page not found</PageHeading>
    <Link to="/home">Head back home</Link>
  </Page>
);

export default NotFoundPage;
