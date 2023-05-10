import Image from 'next/image';

import styles from './Controls.module.css';

export type ControlsProps = {
  onBackIconClick: () => void;
  onLocationIconClick: () => void;
};

export const Controls = ({ onBackIconClick, onLocationIconClick }: ControlsProps) => (
  <div className={styles.controls}>
    <Image
      alt="Back icon"
      className={styles.icon}
      height={20}
      onClick={onBackIconClick}
      role="button"
      src="/assets/icons/previous-location.svg"
      width={20}
    />
    <hr aria-hidden={true} className={styles.divider} />
    <Image
      alt="Location icon"
      className={styles.icon}
      height={20}
      onClick={onLocationIconClick}
      role="button"
      src="/assets/icons/location.svg"
      width={20}
    />
  </div>
);
