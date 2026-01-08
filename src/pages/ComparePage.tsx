import { useMemo, useState } from 'react';
import type { FlowStep, FlowStepWithType } from '../types';
import { useTranslation } from '../i18n';
import FlowPicker from '../components/FlowPicker';
import FlowPane, { type FlowId } from '../components/FlowPane';
import StepDetailPanel from '../components/StepDetailPanel';
import styles from './styles/ComparePage.module.css';

// 各フローのステップデータをインポート
import { OIDC_STEPS } from '../flows/oidc/oidcSteps';
import { PASSKEY_STEPS } from '../flows/passkey/passkeySteps';
import { MAGIC_STEPS } from '../flows/magic/magicSteps';

interface FlowOption {
    id: FlowId;
    label: string;
}

interface StepDataWithFlowType extends FlowStep {
    flowType: FlowId;
}

// フローIDからステップデータを取得するヘルパー
const getStepData = (flowId: FlowId, stepId: number): StepDataWithFlowType | null => {
    const stepsMap: Record<FlowId, Record<number, FlowStep>> = {
        oidc: OIDC_STEPS,
        passkey: PASSKEY_STEPS,
        magic: MAGIC_STEPS,
    };
    const steps = stepsMap[flowId];
    if (!steps || !steps[stepId]) return null;
    return { ...steps[stepId], flowType: flowId };
};

export default function ComparePage(): React.ReactElement {
    const t = useTranslation();

    const flowOptions = useMemo<FlowOption[]>(
        () => [
            { id: 'oidc', label: t.flowNames.oidc },
            { id: 'passkey', label: t.flowNames.passkey },
            { id: 'magic', label: t.flowNames.magic },
            // ここに増やしていく（pkce, implicit, etc）
        ],
        [t]
    );

    const [leftFlowId, setLeftFlowId] = useState<FlowId>(flowOptions[0].id);
    const [rightFlowId, setRightFlowId] = useState<FlowId>(
        flowOptions[2]?.id ?? flowOptions[0].id
    );

    // 「どのステップがクリックされたか」を左右それぞれ持つ
    // 初期値としてStep 1を設定
    const [leftSelectedStep, setLeftSelectedStep] = useState<StepDataWithFlowType | null>(() =>
        getStepData(flowOptions[0].id, 1)
    );
    const [rightSelectedStep, setRightSelectedStep] = useState<StepDataWithFlowType | null>(() =>
        getStepData(flowOptions[2]?.id ?? flowOptions[0].id, 1)
    );

    // ステップクリック時のハンドラ（左側）
    const handleLeftStepClick = (stepData: FlowStepWithType | null): void => {
        if (stepData) {
            setLeftSelectedStep({ ...stepData, flowType: leftFlowId });
        }
    };

    // ステップクリック時のハンドラ（右側）
    const handleRightStepClick = (stepData: FlowStepWithType | null): void => {
        if (stepData) {
            setRightSelectedStep({ ...stepData, flowType: rightFlowId });
        }
    };

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.titleRow}>
                    <h1 className={styles.title}>{t.compare.title}</h1>
                    <p className={styles.subtitle}>
                        {t.compare.subtitle}
                    </p>
                </div>

                <div className={styles.pickers}>
                    <FlowPicker
                        label={t.compare.flowA}
                        options={flowOptions}
                        value={leftFlowId}
                        onChange={(v) => {
                            setLeftFlowId(v as FlowId);
                            setLeftSelectedStep(getStepData(v as FlowId, 1));
                        }}
                    />
                    <div className={styles.vs}>VS</div>
                    <FlowPicker
                        label={t.compare.flowB}
                        options={flowOptions}
                        value={rightFlowId}
                        onChange={(v) => {
                            setRightFlowId(v as FlowId);
                            setRightSelectedStep(getStepData(v as FlowId, 1));
                        }}
                    />
                </div>
            </header>

            <main className={styles.main}>
                {/* 左右比較カラム */}
                <section className={styles.columns}>
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <span className={styles.badge}>A</span>
                            <span className={styles.columnTitle}>
                                {flowOptions.find((x) => x.id === leftFlowId)?.label}
                            </span>
                        </div>

                        <FlowPane
                            flowId={leftFlowId}
                            activeStep={leftSelectedStep?.id ?? 1}
                            onStepClick={handleLeftStepClick}
                        />
                    </div>

                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <span className={styles.badge}>B</span>
                            <span className={styles.columnTitle}>
                                {flowOptions.find((x) => x.id === rightFlowId)?.label}
                            </span>
                        </div>

                        <FlowPane
                            flowId={rightFlowId}
                            activeStep={rightSelectedStep?.id ?? 1}
                            onStepClick={handleRightStepClick}
                        />
                    </div>
                </section>

                {/* 右側（または下）に詳細ペイン：まずは片側でもOK */}
                <aside className={styles.details}>
                    <StepDetailPanel
                        left={leftSelectedStep}
                        right={rightSelectedStep}
                    />
                </aside>
            </main>
        </div>
    );
}
