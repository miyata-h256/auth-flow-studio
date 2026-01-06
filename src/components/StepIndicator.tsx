import styles from './styles/StepIndicator.module.css';

interface StepIndicatorProps {
    steps: string[];
    current: number;
}

/**
 * ステップインジケーターコンポーネント
 */
export default function StepIndicator({ steps, current }: StepIndicatorProps) {
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
