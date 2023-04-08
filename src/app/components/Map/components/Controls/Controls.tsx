import Image from 'next/image';

import { zoomIn, zoomOut } from 'assets/icons';

import styles from './Controls.module.css';

export type ControlsProps = {
  className?: string;
  handleZoomIn?: () => void;
  handleZoomOut?: () => void;
};

export const Controls = ({ className, handleZoomIn, handleZoomOut }: ControlsProps) => {
  return (
    <div className={`${styles.controls} ${className}`}>
      <button className={styles.button} onClick={handleZoomIn}>
        <Image alt="Location icon" height={20} src={zoomIn} width={20}></Image>
      </button>
      <button className={styles.button} onClick={handleZoomOut}>
        <Image alt="Location icon" height={20} src={zoomOut} width={20}></Image>
      </button>
    </div>
  );
};
