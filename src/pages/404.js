import React from 'react';
import { Link } from 'gatsby';
import Page from '../components/Page';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Page>
    <SEO title="404: Not found" />
    <h1>Page not found</h1>
    <Link to="/home">Head back home</Link>
  </Page>
);

export default NotFoundPage;
