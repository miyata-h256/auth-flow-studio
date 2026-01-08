import type { FlowStep } from '../types';
import { useTranslation } from '../i18n';
import styles from './styles/StepDetailPanel.module.css';

interface StepDetailPanelProps {
    left: FlowStep | null;
    right: FlowStep | null;
}

export default function StepDetailPanel({ left, right }: StepDetailPanelProps) {
    const t = useTranslation();

    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <div className={styles.title}>{t.compare.stepDetails}</div>
                <div className={styles.hint}>
                    {t.compare.stepDetailsHint}
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>A</div>
                    {left ? (
                        <StepDetail step={left} />
                    ) : (
                        <div className={styles.empty}>{t.compare.notSelected}</div>
                    )}
                </div>

                <div className={styles.card}>
                    <div className={styles.cardTitle}>B</div>
                    {right ? (
                        <StepDetail step={right} />
                    ) : (
                        <div className={styles.empty}>{t.compare.notSelected}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

interface StepDetailProps {
    step: FlowStep;
}

/**
 * ステップ詳細を見やすく表示するコンポーネント
 */
function StepDetail({ step }: StepDetailProps) {
    return (
        <div className={styles.stepDetail}>
            {/* ヘッダー：ステップ番号とラベル */}
            <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>Step {step.id}</span>
                <span className={styles.stepLabel}>{step.label}</span>
            </div>

            {/* フロー方向（from → to） */}
            {step.from && step.to && (
                <div className={styles.stepFlow}>
                    <span className={styles.participant}>{step.from}</span>
                    <span className={styles.flowArrow}>→</span>
                    <span className={styles.participant}>{step.to}</span>
                </div>
            )}

            {/* 説明 */}
            {step.description && (
                <p className={styles.stepDescription}>{step.description}</p>
            )}

            {/* 詳細テキスト */}
            {step.detail && (
                <div className={styles.stepDetailText}>
                    {step.detail.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
            )}

            {/* HTTPメソッド・エンドポイント */}
            {step.httpMethod && step.endpoint && (
                <div className={styles.httpInfo}>
                    <span className={`${styles.httpMethod} ${styles[step.httpMethod.toLowerCase()]}`}>
                        {step.httpMethod}
                    </span>
                    <code className={styles.endpoint}>{step.endpoint}</code>
                </div>
            )}

            {/* ペイロード */}
            {step.payload && (
                <div className={styles.payloadSection}>
                    <div className={styles.payloadLabel}>Payload / Response</div>
                    <pre className={styles.payload}>
                        {JSON.stringify(step.payload, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}
