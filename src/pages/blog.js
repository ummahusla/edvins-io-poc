import React, { Component } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

class BlogPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Blog" />

        <h1>Blog Edvins</h1>

        <p>dasdasdasd.</p>
      </Layout>
    );
  }
}

export default BlogPage;
