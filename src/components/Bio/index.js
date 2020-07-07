import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../../utils/typography';
import styles from './index.module.scss';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <section className={styles.wrapper}>
            <div className={styles.container}>
              <h1 className={styles.welcome}>Hi, I’m Edvins</h1>
              <p className={styles.subtitle}>
                I’m a developer and designer with a strong entrepreneurial spirit who builds
                products users love. I lead a front-end team by the day and do side hustle by the
                night.
              </p>
              <p>
                In the past, I’ve worked with companies like <strong>Betterware</strong>,{' '}
                <strong>British Gymnastics</strong>, <strong>npower</strong>,{' '}
                <strong>Purplebricks</strong>, agencies and studios like <strong>FishEye</strong>{' '}
                and <strong>The Studio 4</strong>. I’ve been freelancing, working on the open-source
                and side projects since I’ve started my career.
              </p>
              <p>
                Today, I am helping to build the cyber risk prioritisation platform at{' '}
                <strong>
                  <a href="https://www.cyberowl.io/">Cyber Owl</a>
                </strong>
                &nbsp;as a <strong>Lead Front-End Developer</strong>.
              </p>
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
}

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
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
