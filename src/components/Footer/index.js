import React from 'react';
import { Link } from 'gatsby';

import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.row}>
      <Link className={styles.navLink} to={`/blog`}>
        Blog
      </Link>
      <Link className={styles.navLink} to={`/about`}>
        About
      </Link>
      <Link className={styles.navLink} to={`/projects`}>
        Projects
      </Link>
      <a className={styles.navLink} target="_blank" href="https://www.buymeacoffee.com/edvins">
        Buy me a coffee
      </a>
    </div>
    <div className={styles.row}>
      <a className={styles.navLink} target="_blank" href="https://twitter.com/edvinsantonovs">
        Twitter
      </a>
      <a className={styles.navLink} target="_blank" href="https://github.com/ummahusla">
        GitHub
      </a>
      <a className={styles.navLink} target="_blank" href="https://t.me/edvins">
        Telegram
      </a>
    </div>
  </footer>
);

export default Footer;
