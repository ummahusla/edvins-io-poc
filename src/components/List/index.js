import React from 'react';
import { Link } from 'gatsby';

import Tags from '../Tags';

import styles from './styles.module.scss';

const List = ({ title, data }) => {
  return (
    <section className={styles.list}>
      <h2>{title}</h2>

      <div className={styles.container}>
        <div>
          <div>Hustle Market</div>
          <div>Marketplace for buying and selling profitable online businesses.</div>
        </div>

        <Tags tags={['React', 'Redux', 'Next.js', 'Firebase']} />
      </div>
    </section>
  );
};

export default List;
