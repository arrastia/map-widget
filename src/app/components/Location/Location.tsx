'use client';
import { Fragment, useState } from 'react';

import styles from './Location.module.css';

export type LocationProps = { from: string; to: string };

export const Location = ({ from, to }: LocationProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <label className={styles.location}>
      <span className={styles.text} onAnimationIteration={() => setToggle(prev => !prev)}>
        {toggle ? (
          <Fragment>
            Current location: <strong>{to}</strong>
          </Fragment>
        ) : (
          <Fragment>
            Last location from: <strong>{from}</strong>
          </Fragment>
        )}
      </span>
    </label>
  );
};
