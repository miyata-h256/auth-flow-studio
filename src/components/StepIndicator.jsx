import styles from './styles/StepIndicator.module.css';
export default function StepIndicator({ steps, current }) {
  return (
    <div className={styles['step-indicator']}>
      {steps.map((label, index) => (
        <div
          key={label}
          className={
            styles['step-indicator-item'] +
            (index === current
              ? ` ${styles['step-indicator-item--active']}`
              : '') +
            (index < current ? ` ${styles['step-indicator-item--done']}` : '')
          }
        >
          <div className={styles['step-indicator-dot']} />
          <span className={styles['step-indicator-label']}>{label}</span>
        </div>
      ))}
    </div>
  );
}
