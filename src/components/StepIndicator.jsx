import styles from './styles/StepIndicator.module.css';

/**
 * ステップインジケーターコンポーネント
 * @param {Object} props
 * @param {string[]} props.steps - ステップのラベル配列
 * @param {number} props.current - 現在のステップインデックス
 */
export default function StepIndicator({ steps, current }) {
  return (
    <div className={styles['step-indicator']}>
      {steps.map((label, index) => (
        <div
          key={`step-${index}`}
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
