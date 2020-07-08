import React, { Component } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const BlogPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Blog" />

    <h1>Blog page</h1>

    <p>Content</p>
  </Layout>
);

export default BlogPage;
