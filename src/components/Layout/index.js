import React from 'react';
import { Link } from 'gatsby';

import Footer from '../Footer';
import Navigation from '../Navigation';

import styles from './styles.module.scss';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Navigation />

    <main className={styles.main}>{children}</main>

    <Footer />
  </div>
);

export default Layout;
