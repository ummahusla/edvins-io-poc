import React, { Component } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="About" />

    <h1>About page</h1>

    <p>Content</p>
  </Layout>
);

export default AboutPage;
