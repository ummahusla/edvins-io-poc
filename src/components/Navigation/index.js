import React from 'react';
import { Link } from 'gatsby';

import styles from './styles.module.scss';

const Navigation = () => (
  <nav className={styles.navbar}>
    <div className={styles.container}>
      <div className={styles.brand}>
        <Link className={styles.brandLink} to={`/`}>
          <span className={styles.emoji}>🧑‍💻</span> Edvins Antonovs
        </Link>
      </div>
      <div>
        <Link className={styles.navLink} to={`/blog`}>
          Blog
        </Link>
        <Link className={styles.navLink} to={`/about`}>
          About
        </Link>
      </div>
    </div>
  </nav>
);

export default Navigation;
