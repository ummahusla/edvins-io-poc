import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
  return (
    <nav
      className="navbar"
      style={{
        margin: '2rem 0',
        position: 'static',
        background: '#fff',
        boxShadow: 'none',
        width: '100%',
        top: '0',
        left: '0'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '24px', padding: '16px 24px 16px 0' }}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontWeight: 900,
              whiteSpace: 'nowrap',
              fontSize: '20px',
              borderRadius: '5px'
            }}
            to={`/`}
          >
            <span style={{ margin: '0 8px 0 2px' }}>🧑‍💻</span> Edvins Antonovs
          </Link>
        </div>
        <div>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              whiteSpace: 'nowrap',
              fontSize: '18px',
              borderRadius: '5px',
              padding: '16px 24px 16px 0',
              color: '#868e96',
              fontWeight: '600'
            }}
            to={`/blog`}
          >
            Blog
          </Link>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              whiteSpace: 'nowrap',
              fontSize: '18px',
              borderRadius: '5px',
              padding: '16px 24px 16px 0',
              color: '#868e96',
              fontWeight: '600'
            }}
            to={`/about`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
