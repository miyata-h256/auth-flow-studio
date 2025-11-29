import { useFlowStep } from '../../hooks/useFlowStep.js';

import StepIndicator from '../../components/StepIndicator.jsx';

import StepClient from './steps/StepClient.jsx';
import StepProvider from './steps/StepProvider.jsx';
import StepRedirect from './steps/StepRedirect.jsx';
import StepToken from './steps/StepToken.jsx';
import StepSuccess from './steps/StepSuccess.jsx';
import { OidcFlowDiagram } from './OidcFlowDiagram.jsx';
import styles from '../styles/Flow.module.css';
const STEP_LABELS = [
  'Client: 認証リクエスト作成',
  'Provider: ログイン / 同意',
  'Redirect: Code 受け取り',
  'Token: トークン交換',
  'App: ログイン完了',
];

export default function OidcFlow({ onBack }) {
  const { step, next, prev, reset } = useFlowStep(STEP_LABELS.length);

  const screens = [
    <StepClient onNext={next} />,
    <StepProvider
      onNext={next}
      onPrev={prev}
    />,
    <StepRedirect
      onNext={next}
      onPrev={prev}
    />,
    <StepToken
      onNext={next}
      onPrev={prev}
    />,
    <StepSuccess
      onNext={onBack}
      onPrev={prev}
    />,
  ];

  return (
    <div className={styles['flow-root']}>
      <header className={styles['flow-header']}>
        <button
          className='back-button'
          onClick={onBack}
        >
          ← 戻る
        </button>
        <div>
          <h1>OIDC Code Flow</h1>
          <p className={styles['flow-subtitle']}>
            OAuth2 / OIDC の典型的なコードフローを、画面と裏側の動きで追体験
          </p>
        </div>
        <button
          className='reset-button'
          onClick={reset}
        >
          リセット
        </button>
      </header>

      {/* OIDCアニメーション付きフロー図 */}
      <OidcFlowDiagram step={step} />

      <div
        style={{
          display: 'flex',
        }}
      >
        {/* ステップUI */}
        <div style={{ flex: 1 }}>{screens[step]}</div>
      </div>

      <StepIndicator
        steps={STEP_LABELS}
        current={step}
      />
    </div>
  );
}
