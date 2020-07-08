import React from 'react';
import { Link } from 'gatsby';

import styles from './styles.module.scss';

const Latest = ({ posts }) => {
  return (
    <section className={styles.latest}>
      <h2>Latest</h2>

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <div key={node.fields.slug}>
            <h3 className={styles.header}>
              <Link className={styles.link} to={node.fields.slug}>
                {title}
              </Link>
            </h3>

            <small>{node.frontmatter.date}</small>

            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
    </section>
  );
};

export default Latest;
