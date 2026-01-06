import { useMemo, useState } from 'react';
import FlowPicker from '../components/FlowPicker';
import FlowPane from '../components/FlowPane';
import StepDetailPanel from '../components/StepDetailPanel';
import styles from './styles/ComparePage.module.css';

// 各フローのステップデータをインポート
import { OIDC_STEPS } from '../flows/oidc/oidcSteps';
import { PASSKEY_STEPS } from '../flows/passkey/passkeySteps';
import { MAGIC_STEPS } from '../flows/magic/magicSteps';

// フローIDからステップデータを取得するヘルパー
const getStepData = (flowId, stepId) => {
  const stepsMap = {
    oidc: OIDC_STEPS,
    passkey: PASSKEY_STEPS,
    magic: MAGIC_STEPS,
  };
  const steps = stepsMap[flowId];
  if (!steps || !steps[stepId]) return null;
  return { ...steps[stepId], flowType: flowId };
};

export default function ComparePage() {
  const flowOptions = useMemo(
    () => [
      { id: 'oidc', label: 'OIDC / Authorization Code' },
      { id: 'passkey', label: 'Passkey' },
      { id: 'magic', label: 'Magic Link' },
      // ここに増やしていく（pkce, implicit, etc）
    ],
    []
  );

  const [leftFlowId, setLeftFlowId] = useState(flowOptions[0].id);
  const [rightFlowId, setRightFlowId] = useState(
    flowOptions[2]?.id ?? flowOptions[0].id
  );

  // 「どのステップがクリックされたか」を左右それぞれ持つ
  // 初期値としてStep 1を設定
  const [leftSelectedStep, setLeftSelectedStep] = useState(() =>
    getStepData(flowOptions[0].id, 1)
  );
  const [rightSelectedStep, setRightSelectedStep] = useState(() =>
    getStepData(flowOptions[2]?.id ?? flowOptions[0].id, 1)
  );

  // ステップクリック時のハンドラ（左側）
  const handleLeftStepClick = (stepData) => {
    setLeftSelectedStep(stepData);
  };

  // ステップクリック時のハンドラ（右側）
  const handleRightStepClick = (stepData) => {
    setRightSelectedStep(stepData);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>Flow Compare</h1>
          <p className={styles.subtitle}>
            2つの認証フローを並べて、差を“目で”理解する
          </p>
        </div>

        <div className={styles.pickers}>
          <FlowPicker
            label='Flow A'
            options={flowOptions}
            value={leftFlowId}
            onChange={(v) => {
              setLeftFlowId(v);
              setLeftSelectedStep(getStepData(v, 1));
            }}
          />
          <div className={styles.vs}>VS</div>
          <FlowPicker
            label='Flow B'
            options={flowOptions}
            value={rightFlowId}
            onChange={(v) => {
              setRightFlowId(v);
              setRightSelectedStep(getStepData(v, 1));
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
