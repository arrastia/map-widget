import styles from './BorderMask.module.css';

export type BorderMaskProps = { className?: string; direction?: 'horizontal' | 'vertical' };

export const BorderMask = ({ className, direction = 'horizontal' }: BorderMaskProps) => (
  <div aria-hidden={true} className={`${styles.mask} ${styles[direction]} ${className}`} />
);
