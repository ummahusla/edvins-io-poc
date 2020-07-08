import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Latest from '../components/Latest';
import SEO from '../components/seo';

const BlogIndex = ({ data, location }) => {
  const INDEX_PAGE_TITLE = 'Edvins Antonovs';
  const INDEX_PAGE_KEYWORDS = [`blog`, `gatsby`, `javascript`, `react`];

  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;

  // FIXME: Remove me after testing
  const newPosts = [...posts, ...posts, ...posts, ...posts, ...posts, ...posts, ...posts, ...posts];

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={INDEX_PAGE_TITLE} keywords={INDEX_PAGE_KEYWORDS} />

      <Bio />

      <Latest posts={newPosts} />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
          }
        }
      }
    }
  }
`;
