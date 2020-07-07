import React, { Component } from 'react';
import { Link } from 'gatsby';

import Footer from '../Footer';
import Navigation from '../Navigation';
import { rhythm, scale } from '../../utils/typography';

class Layout extends Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(-1)
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1100px'
        }}
      >
        {/* {header} */}
        <Navigation />

        {children}

        <Footer />
      </div>
    );
  }
}

export default Layout;
