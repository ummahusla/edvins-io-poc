import React from 'react';

import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <p>Edvins Antonovs © {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
