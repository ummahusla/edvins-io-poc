import React, { Component } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Bio from '../components/Bio';

import styles from './about.module.scss';

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="About" />

    <Bio cta={false} />

    <div className={styles.split}>
      <div className={styles.section}>
        <h3>What</h3>
        <p>I lead a front-end team by the day and do side hustle by the night.</p>
        <p>I’m always keen to expand my engineering and entrepreneurship skills.</p>
      </div>

      <div className={styles.section}>
        <h3>Where</h3>
        <p>I live in Wolverhampton, United Kingdom with my wife and our son.</p>
        <p>
          I spent the big part of my life in Riga, Latvia, one of my favourite places in the world.
        </p>
      </div>

      <div className={styles.section}>
        <h3>Weird</h3>
        <p>When I’m not working, I love to read, run and spend time with my family.</p>

        <p>I’m a little obsessed with coffee and pizza.</p>
      </div>
    </div>

    <div className={styles.cta}>
      <h2>Get in touch</h2>
      <p className={styles.subtitle}>
        Let’s open the conversation and see what we could do together.
      </p>{' '}
      <p>
        Drop me a line on{' '}
        <a href="mailto:ummahusla@gmail.com" rel="noopener noreferrer" target="_blank">
          ummahusla@gmail.com
        </a>{' '}
        or{' '}
        <a href="https://www.linkedin.com/in/edvinsantonovs/" target="_blank">
          LinkedIn
        </a>
        .
      </p>
    </div>
  </Layout>
);

export default AboutPage;
