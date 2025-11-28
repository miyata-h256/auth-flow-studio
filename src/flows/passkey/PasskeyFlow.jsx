import { useFlowStep } from '../../hooks/useFlowStep.js';
import StepIndicator from '../../components/StepIndicator.jsx';

import StepRegister from './steps/StepRegister.jsx';
import StepAuth from './steps/StepAuth.jsx';
import StepDone from './steps/StepDone.jsx';

const STEP_LABELS = ['Passkey 登録', 'Passkey 認証', 'ログイン完了'];

export default function PasskeyFlow({ onBack }) {
  const { step, next, prev, reset } = useFlowStep(STEP_LABELS.length);

  const screens = [
    <StepRegister onNext={next} />,
    <StepAuth
      onNext={next}
      onPrev={prev}
    />,
    <StepDone
      onNext={onBack}
      onPrev={prev}
    />,
  ];

  return (
    <div className='flow-root'>
      <header className='flow-header'>
        <button
          className='back-button'
          onClick={onBack}
        >
          ← 戻る
        </button>
        <div>
          <h1>Passkey (WebAuthn)</h1>
          <p className='flow-subtitle'>
            公開鍵暗号をベースにしたパスワードレス認証の流れをざっくり理解する
          </p>
        </div>
        <button
          className='reset-button'
          onClick={reset}
        >
          リセット
        </button>
      </header>

      {screens[step]}

      <StepIndicator
        steps={STEP_LABELS}
        current={step}
      />
    </div>
  );
}
