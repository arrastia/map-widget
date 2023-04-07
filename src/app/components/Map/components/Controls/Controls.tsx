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
        +
      </button>
      <button className={styles.button} onClick={handleZoomOut}>
        -
      </button>
    </div>
  );
};
