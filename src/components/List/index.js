import React from 'react';
import { Link } from 'gatsby';

import Tags from '../Tags';

import styles from './styles.module.scss';

const List = ({ posts }) => {
  return (
    <section className={styles.list}>
      <h2>Latest</h2>

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
};

export default List;