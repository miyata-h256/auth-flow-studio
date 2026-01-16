// src/pages/SecurityComparePage.tsx
// 同系統認証フローのセキュリティ比較ページ

import { useState, useMemo } from 'react';
import { useTranslation } from '../i18n';
import {
    FLOW_FAMILIES,
    getEnhancementIdsForVariant,
    getVariantsForFamily,
} from '../data/securityEnhancements';
import { getVariantModifications, getVariantStepModifications } from '../data/variantSteps';
import type { FlowFamily, FlowVariantId } from '../types/variants';
import FlowPane, { type FlowId } from '../components/FlowPane';
import EnhancementDetailPanel from '../components/EnhancementDetailPanel';
import StepModificationList from '../components/StepModificationList';
import styles from './styles/SecurityComparePage.module.css';

/**
 * バリアントIDからベースのFlowIdを取得
 */
function getBaseFlowId(variantId: FlowVariantId): FlowId {
    if (variantId.startsWith('oidc')) return 'oidc';
    if (variantId.startsWith('magic')) return 'magic';
    if (variantId.startsWith('passkey')) return 'passkey';
    return 'oidc';
}

export default function SecurityComparePage(): React.ReactElement {
    const t = useTranslation();

    // 現在選択されているファミリー
    const [selectedFamily, setSelectedFamily] = useState<FlowFamily>('oidc');

    // ファミリー内のバリアント
    const familyVariants = useMemo(
        () => getVariantsForFamily(selectedFamily),
        [selectedFamily]
    );

    // 基本版と強化版を自動取得
    const basicVariant = useMemo(
        () => familyVariants.find((v) => v.isBasic),
        [familyVariants]
    );
    const enhancedVariant = useMemo(
        () => familyVariants.find((v) => !v.isBasic),
        [familyVariants]
    );

    // 強化版の追加機能ID
    const enhancementIds = useMemo(
        () => (enhancedVariant ? getEnhancementIdsForVariant(enhancedVariant.id) : []),
        [enhancedVariant]
    );

    // 変更されるステップ（raw形式）
    const modifications = useMemo(
        () => (enhancedVariant ? getVariantModifications(enhancedVariant.id, t) : {}),
        [enhancedVariant, t]
    );

    // 変更されるステップ（詳細形式）
    const stepModifications = useMemo(
        () => (enhancedVariant ? getVariantStepModifications(enhancedVariant.id, t) : {}),
        [enhancedVariant, t]
    );

    const modifiedStepIds = Object.keys(modifications).map(Number);

    if (!basicVariant || !enhancedVariant) {
        return <div className={styles.page}>{t.common.loading}</div>;
    }

    return (
        <div className={styles.page}>
            {/* ヘッダー */}
            <header className={styles.header}>
                <div className={styles.titleArea}>
                    <h1 className={styles.title}>🔒 {t.securityCompare.title}</h1>
                    <p className={styles.subtitle}>
                        {t.securityCompare.subtitle}
                    </p>
                </div>

                {/* ファミリー選択タブ */}
                <nav className={styles.familyTabs}>
                    {Object.values(FLOW_FAMILIES).map((family) => {
                        const familyT = t.flowFamilies[family.id as keyof typeof t.flowFamilies];
                        return (
                            <button
                                key={family.id}
                                className={`${styles.familyTab} ${selectedFamily === family.id ? styles.active : ''}`}
                                onClick={() => setSelectedFamily(family.id)}
                            >
                                <span className={styles.familyIcon}>
                                    {family.id === 'oidc' && '🔑'}
                                    {family.id === 'magic' && '✉️'}
                                    {family.id === 'passkey' && '🔐'}
                                </span>
                                <span className={styles.familyName}>{familyT.name}</span>
                            </button>
                        );
                    })}
                </nav>
            </header>

            {/* メインコンテンツ */}
            <main className={styles.main}>
                {/* 比較ヘッダー */}
                <div className={styles.comparisonHeader}>
                    <div className={styles.variantHeader}>
                        <span className={styles.variantBadge} data-type="basic">
                            {t.securityCompare.basicVersion}
                        </span>
                        <h2 className={styles.variantName}>
                            {t.flowVariants[basicVariant.id as keyof typeof t.flowVariants].name}
                        </h2>
                        <p className={styles.variantSubtitle}>
                            {t.flowVariants[basicVariant.id as keyof typeof t.flowVariants].subtitle}
                        </p>
                    </div>

                    <div className={styles.vsIndicator}>
                        <span className={styles.vsText}>{t.securityCompare.vs}</span>
                        <span className={styles.arrow}>→</span>
                    </div>

                    <div className={styles.variantHeader}>
                        <span className={styles.variantBadge} data-type="enhanced">
                            {t.securityCompare.enhancedVersion} ⭐
                        </span>
                        <h2 className={styles.variantName}>
                            {t.flowVariants[enhancedVariant.id as keyof typeof t.flowVariants].name}
                        </h2>
                        <p className={styles.variantSubtitle}>
                            {t.flowVariants[enhancedVariant.id as keyof typeof t.flowVariants].subtitle}
                        </p>
                    </div>
                </div>

                {/* フロー図の比較 */}
                <section className={styles.flowComparison}>
                    <div className={styles.flowColumn}>
                        <FlowPane
                            flowId={getBaseFlowId(basicVariant.id)}
                            activeStep={1}
                        />
                    </div>

                    <div className={styles.flowColumn} data-enhanced="true">
                        <div className={styles.enhancedOverlay}>
                            <FlowPane
                                flowId={getBaseFlowId(enhancedVariant.id)}
                                activeStep={1}
                            />
                            {/* 変更ステップのインジケーター */}
                            {modifiedStepIds.length > 0 && (
                                <div className={styles.modifiedStepsHint}>
                                    <span className={styles.hintIcon}>💡</span>
                                    {t.securityCompare.step} {modifiedStepIds.join(', ')} {t.securityCompare.stepsEnhanced}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* セキュリティ強化の詳細 */}
                <section className={styles.detailSection}>
                    <EnhancementDetailPanel
                        enhancementIds={enhancedVariant.enhancements}
                        title={t.flowVariants[enhancedVariant.id as keyof typeof t.flowVariants].name}
                    />
                </section>

                {/* 変更されるステップの詳細 */}
                {Object.keys(stepModifications).length > 0 && (
                    <section className={styles.detailSection}>
                        <StepModificationList
                            modifications={stepModifications}
                            title={t.securityCompare.modificationDetails}
                        />
                    </section>
                )}

                {/* 使用シナリオの比較 */}
                <section className={styles.useCaseSection}>
                    <h3 className={styles.sectionTitle}>📋 {t.securityCompare.recommendedScenarios}</h3>
                    <div className={styles.useCaseComparison}>
                        <div className={styles.useCaseColumn}>
                            <h4 className={styles.useCaseTitle}>
                                {t.flowVariants[basicVariant.id as keyof typeof t.flowVariants].name}
                            </h4>
                            <ul className={styles.useCaseList}>
                                {t.flowVariants[basicVariant.id as keyof typeof t.flowVariants].useCases.map((useCase, i) => (
                                    <li key={i} className={styles.useCaseItem}>
                                        {useCase}
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.recommendation}>
                                {t.securityCompare.recommendation}: {'★'.repeat(basicVariant.recommendationLevel)}
                                {'☆'.repeat(5 - basicVariant.recommendationLevel)}
                            </div>
                        </div>

                        <div className={styles.useCaseColumn} data-enhanced="true">
                            <h4 className={styles.useCaseTitle}>
                                {t.flowVariants[enhancedVariant.id as keyof typeof t.flowVariants].name}
                            </h4>
                            <ul className={styles.useCaseList}>
                                {t.flowVariants[enhancedVariant.id as keyof typeof t.flowVariants].useCases.map((useCase, i) => (
                                    <li key={i} className={styles.useCaseItem}>
                                        {useCase}
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.recommendation} data-level="high">
                                {t.securityCompare.recommendation}: {'★'.repeat(enhancedVariant.recommendationLevel)}
                                {'☆'.repeat(5 - enhancedVariant.recommendationLevel)}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 結論・サマリー */}
                <section className={styles.summarySection}>
                    <h3 className={styles.sectionTitle}>📝 {t.securityCompare.summary}</h3>
                    <div className={styles.summaryCard}>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryIcon}>🛡️</span>
                            <div>
                                <strong>{t.securityCompare.addedSecurityFeatures}</strong>
                                <p>{enhancementIds.length}{t.securityCompare.featuresAdded}</p>
                            </div>
                        </div>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryIcon}>🔧</span>
                            <div>
                                <strong>{t.securityCompare.modifiedSteps}</strong>
                                <p>
                                    {modifiedStepIds.length > 0
                                        ? `${t.securityCompare.step} ${modifiedStepIds.join(', ')}${t.securityCompare.stepsModified}`
                                        : t.securityCompare.standardProcessing}
                                </p>
                            </div>
                        </div>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryIcon}>⚖️</span>
                            <div>
                                <strong>{t.securityCompare.tradeoff}</strong>
                                <p>{t.securityCompare.tradeoffDescription}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
