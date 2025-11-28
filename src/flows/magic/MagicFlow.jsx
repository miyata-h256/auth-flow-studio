import { useState } from 'react';
import { useFlowStep } from '../../hooks/useFlowStep.js';
import StepIndicator from '../../components/StepIndicator.jsx';

import StepInput from './steps/StepInput.jsx';
import StepInbox from './steps/StepInbox.jsx';
import StepDone from './steps/StepDone.jsx';

const STEP_LABELS = ['メール送信', 'メール内リンクをクリック', 'ログイン完了'];

export default function MagicFlow({ onBack }) {
  const { step, next, prev, reset } = useFlowStep(STEP_LABELS.length);
  const [email, setEmail] = useState('user@example.com');
  const [link, setLink] = useState('');

  const screens = [
    <StepInput
      email={email}
      setEmail={setEmail}
      setLink={setLink}
      onNext={next}
    />,
    <StepInbox
      link={link}
      onNext={next}
      onPrev={prev}
    />,
    <StepDone
      email={email}
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
          <h1>Magic Link Login</h1>
          <p className='flow-subtitle'>
            メールのワンタイムリンクでログインするフローを、擬似的に追体験
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
