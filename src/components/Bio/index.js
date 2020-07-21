import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import styles from './styles.module.scss';

const Bio = ({ cta = true }) => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author } = data.site.siteMetadata;
      const firstName = author.split(' ')[0];

      return (
        <section className={styles.wrapper}>
          <div className={styles.container}>
            <h1 className={styles.welcome}>Hi, I’m {firstName}</h1>

            <p className={styles.subtitle}>
              I’m a developer and designer with a strong entrepreneurial spirit who builds products
              users love. I lead a front-end team by the day and do side hustle by the night.
            </p>

            <p>
              In the past, I’ve worked with companies like <strong>Betterware</strong>,{' '}
              <strong>British Gymnastics</strong>, <strong>npower</strong>,{' '}
              <strong>Purplebricks</strong>, agencies and studios like <strong>FishEye</strong> and{' '}
              <strong>The Studio 4</strong>. I’ve been freelancing, working on the open-source and
              side projects since I’ve started my career.
            </p>

            <p>
              Today, I am helping to build the cyber risk prioritisation platform at{' '}
              <strong>
                <a href="https://www.cyberowl.io/">Cyber Owl</a>
              </strong>{' '}
              as a <strong>Lead Front-End Developer</strong>.
            </p>

            {cta && (
              <p>
                You can <Link to={`/blog`}>read my blog</Link> or{' '}
                <Link to={`/about`}>learn more about me</Link>.
              </p>
            )}
          </div>

          <div>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              className={styles.avatar}
            />
          </div>
        </section>
      );
    }}
  />
);

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
