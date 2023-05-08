import styles from './Label.module.css';

import type { ReactNode } from 'react';

export type LabelProps = { children: ReactNode; onClick: () => void };

export const Label = ({ children, onClick }: LabelProps) => (
  <label className={styles.location} onClick={onClick}>
    <strong>{children}</strong>
  </label>
);
