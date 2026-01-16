// src/components/EnhancementDetailPanel.tsx
// セキュリティ強化機能の詳細パネル

import { useTranslation } from '../i18n';
import { SECURITY_ENHANCEMENT_COMPLEXITY, type SecurityEnhancementId } from '../data/securityEnhancements';
import styles from './styles/EnhancementDetailPanel.module.css';

interface EnhancementDetailPanelProps {
    /** 表示する強化機能のID一覧 */
    enhancementIds: string[];
    /** タイトル */
    title?: string;
}

/**
 * セキュリティ強化機能の詳細を表示するパネル
 */
export default function EnhancementDetailPanel({
    enhancementIds,
    title,
}: EnhancementDetailPanelProps) {
    const t = useTranslation();
    const displayTitle = title || t.securityCompare.addedSecurityFeatures;

    if (enhancementIds.length === 0) {
        return (
            <div className={styles.panel}>
                <h3 className={styles.title}>{displayTitle}</h3>
                <p className={styles.empty}>
                    {t.securityCompare.noEnhancementsInBasic}
                </p>
            </div>
        );
    }

    return (
        <div className={styles.panel}>
            <h3 className={styles.title}>
                <span className={styles.titleIcon}>🛡️</span>
                {displayTitle}
                <span className={styles.count}>{enhancementIds.length}{t.securityCompare.featuresCount}</span>
            </h3>

            <div className={styles.list}>
                {enhancementIds.map((id) => (
                    <EnhancementCard key={id} enhancementId={id as SecurityEnhancementId} />
                ))}
            </div>
        </div>
    );
}

interface EnhancementCardProps {
    enhancementId: SecurityEnhancementId;
}

function EnhancementCard({ enhancementId }: EnhancementCardProps) {
    const t = useTranslation();
    const enhancementT = t.securityEnhancements[enhancementId];
    const complexity = SECURITY_ENHANCEMENT_COMPLEXITY[enhancementId];

    if (!enhancementT) {
        return null;
    }

    return (
        <article className={styles.card}>
            <header className={styles.cardHeader}>
                <h4 className={styles.cardName}>{enhancementT.name}</h4>
                <ComplexityIndicator level={complexity} />
            </header>

            <p className={styles.description}>{enhancementT.description}</p>

            <div className={styles.sections}>
                {/* メリット */}
                <section className={styles.section}>
                    <h5 className={styles.sectionTitle}>
                        <span className={styles.sectionIcon}>✅</span>
                        {t.securityCompare.benefits}
                    </h5>
                    <ul className={styles.benefitList}>
                        {enhancementT.benefits.map((benefit, i) => (
                            <li key={i} className={styles.benefitItem}>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* 防げる攻撃 */}
                <section className={styles.section}>
                    <h5 className={styles.sectionTitle}>
                        <span className={styles.sectionIcon}>🚫</span>
                        {t.securityCompare.mitigatedAttacks}
                    </h5>
                    <div className={styles.mitigateList}>
                        {enhancementT.mitigates.map((attack, i) => (
                            <span key={i} className={styles.mitigateTag}>
                                {attack}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </article>
    );
}

function ComplexityIndicator({ level }: { level: number }) {
    const t = useTranslation();
    const labels = [
        '',
        t.securityCompare.complexityLevels.easy,
        t.securityCompare.complexityLevels.normal,
        t.securityCompare.complexityLevels.moderate,
        t.securityCompare.complexityLevels.complex,
        t.securityCompare.complexityLevels.veryComplex,
    ];
    const colors = ['', 'easy', 'normal', 'moderate', 'complex', 'veryComplex'];

    return (
        <div className={styles.complexity} data-level={colors[level]}>
            <span className={styles.complexityLabel}>{t.securityCompare.implementationComplexity}:</span>
            <span className={styles.complexityStars}>
                {'★'.repeat(level)}{'☆'.repeat(5 - level)}
            </span>
            <span className={styles.complexityText}>{labels[level]}</span>
        </div>
    );
}
