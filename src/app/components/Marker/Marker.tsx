import styles from './Marker.module.css';

export const Marker = () => (
  <div className={styles.shadow}>
    <div className={styles.dot}>
      <div className={styles.inner} />
    </div>
  </div>
);
