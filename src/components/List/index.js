import React from 'react';
import { Link } from 'gatsby';

import Tags from '../Tags';

import styles from './styles.module.scss';

const List = ({ title = '', lead = '', data }) => {
  return (
    <section className={styles.list}>
      {title && <h2>{title}</h2>}

      {lead && <p>{lead}</p>}

      {data.map(({ name, status, description, tags, link }, key) => (
        <a className={styles.container} key={key} href={link}>
          <div className={styles.meta}>
            <h3 className={styles.header}>
              {name} {status && <span className={styles.label}>{status}</span>}
            </h3>

            {description && <p>{description}</p>}
          </div>

          {tags && <Tags tags={tags} />}
        </a>
      ))}
    </section>
  );
};

export default List;
