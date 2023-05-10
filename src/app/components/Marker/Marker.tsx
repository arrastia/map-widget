import styles from './Marker.module.css';

export type MarkerProps = { type: 'current-location' | 'last-location' };

export const Marker = ({ type }: MarkerProps) => (
  <div className={`${styles.shadow} ${styles[`shadow${type === 'current-location' ? 'Current' : 'Last'}`]}`}>
    <div className={styles.dot}>
      <div className={`${styles.inner} ${styles[`inner${type === 'current-location' ? 'Current' : 'Last'}`]}`} />
    </div>
  </div>
);
