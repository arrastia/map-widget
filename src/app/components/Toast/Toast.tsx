'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';

import { noLocation } from 'assets/icons';

import styles from './Toast.module.css';

export const Toast = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsHidden(true), 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${styles.toast} ${isHidden ? styles.hidden : null}`} role="alert">
      <Image alt="Warning icon" aria-hidden={true} className={styles.icon} src={noLocation} />
      <div className={styles.content}>
        <h2 className={styles.title}>Location unreachable</h2>
        <p className={styles.description}>We could not get your current location. Displaying fallback data.</p>
        <button className={styles.closeButton} onClick={() => setIsHidden(true)}>
          &times;
        </button>
      </div>
    </div>
  );
};
