import { useMemo, useState } from 'react';
import FlowPicker from '../components/FlowPicker';
import FlowPane from '../components/FlowPane';
import StepDetailPanel from '../components/StepDetailPanel';
import styles from './styles/ComparePage.module.css';

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
  const [leftSelectedStep, setLeftSelectedStep] = useState(null);
  const [rightSelectedStep, setRightSelectedStep] = useState(null);

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
              setLeftSelectedStep(null);
            }}
          />
          <div className={styles.vs}>VS</div>
          <FlowPicker
            label='Flow B'
            options={flowOptions}
            value={rightFlowId}
            onChange={(v) => {
              setRightFlowId(v);
              setRightSelectedStep(null);
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
              side='left'
              onStepSelect={(step) => setLeftSelectedStep(step)}
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
              side='right'
              onStepSelect={(step) => setRightSelectedStep(step)}
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
