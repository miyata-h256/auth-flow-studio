import type { FlowStepWithType } from '../types';
import type { FlowId } from './FlowPane';
import { useTranslation } from '../i18n';
import type { TranslationKeys } from '../i18n/types';
import styles from './styles/StepDetailPanel.module.css';

interface StepDetailPanelProps {
    left: FlowStepWithType | null;
    right: FlowStepWithType | null;
}

/**
 * flowTypeに基づいてi18nからステップの翻訳を取得
 */
function getStepTranslation(
    t: TranslationKeys,
    flowType: FlowId,
    stepId: number
): { label: string; description: string; detail: string } | null {
    const flowSteps = {
        oidc: t.oidc.steps,
        passkey: t.passkey.steps,
        magic: t.magic.steps,
    };
    return flowSteps[flowType]?.[stepId] ?? null;
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
                        <StepDetail step={left} translation={getStepTranslation(t, left.flowType as FlowId, left.id)} />
                    ) : (
                        <div className={styles.empty}>{t.compare.notSelected}</div>
                    )}
                </div>

                <div className={styles.card}>
                    <div className={styles.cardTitle}>B</div>
                    {right ? (
                        <StepDetail step={right} translation={getStepTranslation(t, right.flowType as FlowId, right.id)} />
                    ) : (
                        <div className={styles.empty}>{t.compare.notSelected}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

interface StepDetailProps {
    step: FlowStepWithType;
    translation: { label: string; description: string; detail: string } | null;
}

/**
 * ステップ詳細を見やすく表示するコンポーネント
 * i18nから取得した翻訳を使用して表示
 */
function StepDetail({ step, translation }: StepDetailProps) {
    // 翻訳があればそれを使用、なければ元のステップデータにフォールバック
    const label = translation?.label ?? step.label;
    const description = translation?.description ?? step.description;
    const detail = translation?.detail ?? step.detail;

    return (
        <div className={styles.stepDetail}>
            {/* ヘッダー：ステップ番号とラベル */}
            <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>Step {step.id}</span>
                <span className={styles.stepLabel}>{label}</span>
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
            {description && (
                <p className={styles.stepDescription}>{description}</p>
            )}

            {/* 詳細テキスト */}
            {detail && (
                <div className={styles.stepDetailText}>
                    {detail.split('\n').map((line, i) => (
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
