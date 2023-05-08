'use client';
import { Fragment, useEffect, useState } from 'react';

import styles from './Location.module.css';

export const Location = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setToggle(prev => !prev), 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <label className={styles.location}>
      <span className={styles.text}>
        {toggle ? (
          <Fragment>
            Current: <strong>Huarte</strong>
          </Fragment>
        ) : (
          <Fragment>
            Last location from: <strong>Tallinn</strong>
          </Fragment>
        )}
      </span>
    </label>
  );
};
