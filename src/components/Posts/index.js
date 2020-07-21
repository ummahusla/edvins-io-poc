import React from 'react';
import { Link } from 'gatsby';

import Tags from '../Tags';

import styles from './styles.module.scss';

const Posts = ({ title = '', lead = '', posts }) => (
  <section className={styles.posts}>
    {title && <h2>{title}</h2>}

    {lead && <p>{lead}</p>}

    {posts &&
      posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <Link className={styles.link} key={node.fields.slug} to={node.fields.slug}>
            <div className={styles.post}>
              <div className={styles.meta}>
                <h3 className={styles.header}>{title}</h3>
                <time>{node.frontmatter.date}</time>
              </div>

              <Tags tags={node.frontmatter.tags} />
            </div>
          </Link>
        );
      })}
  </section>
);

export default Posts;
