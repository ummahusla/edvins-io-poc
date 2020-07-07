import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../../utils/typography';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <section
            style={{
              display: `flex`,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: rhythm(2.5)
            }}
          >
            <div style={{ maxWidth: '700px' }}>
              <h1 style={{ fontSize: '48px', fontFamily: 'Merriweather, Georgia, serif' }}>
                Hi, I’m Edvins
              </h1>
              <p className="subtitle" style={{ fontSize: '22px', color: '#868e96' }}>
                I’m a developer and designer with a strong entrepreneurial spirit who builds
                products users love.
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
                  <a href="https://www.cyberowl.io/">CyberOwl</a>
                </strong>
                &nbsp;as a <strong>Lead Front-End Developer</strong>.
              </p>
            </div>

            <div>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  // marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`
                }}
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
