import styles from './Marker.module.css';

export const Marker = () => {
  return (
    <div className={styles.shadow}>
      <div className={styles.dot}>
        <div className={styles.inner} />
      </div>
    </div>
  );
};
