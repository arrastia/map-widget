import Link from 'next/link';

import styles from './LastVisit.module.css';

import type { Geo } from '@vercel/edge';

export const LastVisit = async () => {
  const { location } = (await (await fetch('http://localhost:3000/api/hello')).json()) as { location: Geo };

  return (
    <small className={styles.subtitle}>
      Last visit from: <Link href="https://arrastia.me">{location?.city}</Link>{' '}
    </small>
  );
};
