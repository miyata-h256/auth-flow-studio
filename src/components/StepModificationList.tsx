// src/components/StepModificationList.tsx
// 変更されるステップの一覧表示コンポーネント

import type { VariantStepModification } from '../types/variants';
import { useTranslation } from '../i18n';
import type { SecurityEnhancementId } from '../data/securityEnhancements';
import styles from './styles/StepModificationList.module.css';

interface StepModificationListProps {
    /** 変更されるステップの情報 */
    modifications: Record<number, VariantStepModification>;
    /** タイトル */
    title?: string;
}

/**
 * 強化版で変更されるステップの詳細を表示
 */
export default function StepModificationList({
    modifications,
    title,
}: StepModificationListProps) {
    const t = useTranslation();
    const displayTitle = title || t.securityCompare.modificationDetails;
    const stepNumbers = Object.keys(modifications)
        .map(Number)
        .sort((a, b) => a - b);

    if (stepNumbers.length === 0) {
        return null;
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                <span className={styles.titleIcon}>🔄</span>
                {displayTitle}
            </h3>

            <div className={styles.list}>
                {stepNumbers.map((stepNum) => {
                    const mod = modifications[stepNum];
                    const enhancementT = mod.enhancementId
                        ? t.securityEnhancements[mod.enhancementId as SecurityEnhancementId]
                        : null;

                    return (
                        <article key={stepNum} className={styles.item}>
                            <header className={styles.itemHeader}>
                                <span className={styles.stepBadge}>
                                    {t.securityCompare.step} {stepNum}
                                </span>
                                {enhancementT && (
                                    <span
                                        className={styles.enhancementTag}
                                        title={enhancementT.name}
                                    >
                                        🛡️ {enhancementT.name}
                                    </span>
                                )}
                            </header>

                            <div className={styles.itemContent}>
                                <p className={styles.description}>
                                    {mod.description}
                                </p>

                                {/* 基本版との差分 */}
                                <div className={styles.diffSection}>
                                    <div className={styles.diffBasic}>
                                        <span className={styles.diffLabel}>
                                            {t.securityCompare.basicBehavior}
                                        </span>
                                        <span className={styles.diffValue}>
                                            {mod.basicBehavior || t.securityCompare.standardProcessing}
                                        </span>
                                    </div>
                                    <span className={styles.diffArrow}>→</span>
                                    <div className={styles.diffEnhanced}>
                                        <span className={styles.diffLabel}>
                                            {t.securityCompare.enhancedBehavior}
                                        </span>
                                        <span className={styles.diffValue}>
                                            {mod.enhancedBehavior ||
                                                mod.description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
