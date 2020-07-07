import React, { Component } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="About" />

        <h1>About Edvins</h1>

        <p>dasdasdasd.</p>
      </Layout>
    );
  }
}

export default AboutPage;
