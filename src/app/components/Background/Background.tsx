import styles from './Background.module.css';

export const Background = () => (
  <svg aria-hidden={true} className={styles.svg} preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
    <defs>
      <radialGradient cx="50%" cy="50%" fx="10%" fy="50%" id="Gradient1" r=".5">
        <animate attributeName="fx" dur="34s" repeatCount="indefinite" values="0%;3%;0%" />
        <stop offset="0%" stopColor="var(--bg-primary)"></stop>
        <stop offset="100%" stopColor="#ff00"></stop>
      </radialGradient>
      <radialGradient cx="50%" cy="50%" fx="10%" fy="50%" id="Gradient2" r=".5">
        <animate attributeName="fx" dur="23.5s" repeatCount="indefinite" values="0%;3%;0%" />
        <stop offset="0%" stopColor="var(--bg-secondary)"></stop>
        <stop offset="100%" stopColor="#0ff0"></stop>
      </radialGradient>
      <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" id="Gradient3" r=".5">
        <animate attributeName="fx" dur="21.5s" repeatCount="indefinite" values="0%;3%;0%" />
        <stop offset="0%" stopColor="var(--bg-tertiary)"></stop>
        <stop offset="100%" stopColor="#f0f0"></stop>
      </radialGradient>
    </defs>
    <rect fill="url(#Gradient1)" height="100%" width="100%" x="0" y="0">
      <animate attributeName="x" dur="20s" repeatCount="indefinite" values="25%;0%;25%" />
      <animate attributeName="y" dur="21s" repeatCount="indefinite" values="0%;25%;0%" />
      <animateTransform attributeName="transform" dur="17s" from="0 50 50" repeatCount="indefinite" to="360 50 50" type="rotate" />
    </rect>
    <rect fill="url(#Gradient2)" height="100%" width="100%" x="0" y="0">
      <animate attributeName="x" dur="23s" repeatCount="indefinite" values="-25%;0%;-25%" />
      <animate attributeName="y" dur="24s" repeatCount="indefinite" values="0%;50%;0%" />
      <animateTransform attributeName="transform" dur="18s" from="0 50 50" repeatCount="indefinite" to="360 50 50" type="rotate" />
    </rect>
    <rect fill="url(#Gradient3)" height="100%" width="100%" x="0" y="0">
      <animate attributeName="x" dur="25s" repeatCount="indefinite" values="0%;25%;0%" />
      <animate attributeName="y" dur="26s" repeatCount="indefinite" values="0%;25%;0%" />
      <animateTransform attributeName="transform" dur="19s" from="360 50 50" repeatCount="indefinite" to="0 50 50" type="rotate" />
    </rect>
  </svg>
);
