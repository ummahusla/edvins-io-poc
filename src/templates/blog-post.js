import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Tags from '../components/Tags';

import styles from './styles.module.scss';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <Tags title={post.frontmatter.title} description={post.excerpt} />

      <section className={`blog-post ${styles.blogPostSingle}`}>
        <h1>{post.frontmatter.title}</h1>
        <div>
          <time>{post.frontmatter.date}</time> <Tags tags={post.frontmatter.tags} />
        </div>

        <MDXRenderer>{post.body}</MDXRenderer>
        <hr className={styles.separator} />
        <ul className={styles.footerLinks}>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        tags
      }
      body
    }
  }
`;
