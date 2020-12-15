import React from 'react';
import Page from '../components/Page';
import PreLaunchPage from '../components/PreLaunchPage';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';
import RSVPForm from '../components/RSVPForm';

const RSVP = () =>
  process.env.NODE_ENV === 'production' ? (
    <PreLaunchPage />
  ) : (
    <Page>
      <SEO title="RSVP" />
      <PageHeading>RSVP</PageHeading>
      <RSVPForm />
    </Page>
  );

export default RSVP;
