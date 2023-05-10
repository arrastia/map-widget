import styles from './Granular.module.css';

export const Granular = () => (
  <svg aria-hidden={true} className={styles.granular} id="texture">
    <filter id="noise">
      <feTurbulence baseFrequency=".8" numOctaves="4" stitchTiles="stitch" type="fractalNoise" />
      <feColorMatrix type="matrix" values="0" />
    </filter>
    <rect filter="url(#noise)" height="100%" width="100%" />
  </svg>
);
