import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Posts from '../components/Posts';
import List from '../components/List';

const BlogIndex = ({ data, location }) => {
  const INDEX_PAGE_TITLE = 'Edvins Antonovs';
  const INDEX_PAGE_KEYWORDS = [`edvins antonovs`, `software developer`];

  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={INDEX_PAGE_TITLE} keywords={INDEX_PAGE_KEYWORDS} />

      <Bio />

      <Posts title="Latest" posts={posts} />

      <List title="Projects" />
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
            tags
          }
        }
      }
    }
  }
`;
