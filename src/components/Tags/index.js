import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

const Tags = ({ tags }) => {
  return (
    <>
      {tags && (
        <div className={styles.tags}>
          {tags.map((tag, key) => (
            <div className={styles.tag + ` tag-${tag.toLowerCase()}`} key={key}>
              {tag.toLowerCase()}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Tags;
