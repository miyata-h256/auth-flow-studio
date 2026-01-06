import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFlowStep } from '../../hooks/useFlowStep.js';
import StepIndicator from '../../components/StepIndicator.jsx';

import Step1EmailInput from './steps/Step1EmailInput.jsx';
import Step2MagicLinkRequest from './steps/Step2MagicLinkRequest.jsx';
import Step3UserLookup from './steps/Step3UserLookup.jsx';
import Step4UserResponse from './steps/Step4UserResponse.jsx';
import Step5CreateToken from './steps/Step5CreateToken.jsx';
import Step6TokenIdResponse from './steps/Step6TokenIdResponse.jsx';
import Step7SendEmail from './steps/Step7SendEmail.jsx';
import Step8EmailAccepted from './steps/Step8EmailAccepted.jsx';
import Step9ApiResponse from './steps/Step9ApiResponse.jsx';
import Step10CheckEmail from './steps/Step10CheckEmail.jsx';
import Step11OpenEmail from './steps/Step11OpenEmail.jsx';
import Step12ClickLink from './steps/Step12ClickLink.jsx';
import Step13VerifyRequest from './steps/Step13VerifyRequest.jsx';
import Step14LookupToken from './steps/Step14LookupToken.jsx';
import Step15TokenRecord from './steps/Step15TokenRecord.jsx';
import Step16ValidateToken from './steps/Step16ValidateToken.jsx';
import Step17LoginComplete from './steps/Step17LoginComplete.jsx';
import styles from '../styles/Flow.module.css';
import MagicFlowSvg from './MagicFlowSvg.jsx';

const STEP_LABELS = [
  '① メールアドレス入力',
  '② Magic Link リクエスト',
  '③ ユーザー検索/作成',
  '④ ユーザー情報レスポンス',
  '⑤ ワンタイムトークン発行',
  '⑥ トークンID発行',
  '⑦ メール送信',
  '⑧ メール送信受付',
  '⑨ APIレスポンス',
  '⑩ メール確認案内',
  '⑪ メールを開く',
  '⑫ Magic Linkクリック',
  '⑬ トークン検証リクエスト',
  '⑭ トークン検索',
  '⑮ トークンレコード取得',
  '⑯ トークン検証',
  '⑰ ログイン完了',
];

export default function MagicFlow({ onStepSelect, interactive = false }) {
  const navigate = useNavigate();
  const handleBack = () => navigate('/home');
  const { step, next, prev, reset } = useFlowStep(STEP_LABELS.length);
  const [email, setEmail] = useState('user@example.com');
  const [link, setLink] = useState('');

  const screens = [
    <Step1EmailInput
      email={email}
      setEmail={setEmail}
      onNext={next}
    />,
    <Step2MagicLinkRequest
      email={email}
      onNext={next}
      onPrev={prev}
    />,
    <Step3UserLookup
      email={email}
      onNext={next}
      onPrev={prev}
    />,
    <Step4UserResponse
      email={email}
      onNext={next}
      onPrev={prev}
    />,
    <Step5CreateToken
      email={email}
      onNext={next}
      onPrev={prev}
    />,
    <Step6TokenIdResponse
      onNext={next}
      onPrev={prev}
    />,
    <Step7SendEmail
      email={email}
      setLink={setLink}
      onNext={next}
      onPrev={prev}
    />,
    <Step8EmailAccepted
      onNext={next}
      onPrev={prev}
    />,
    <Step9ApiResponse
      onNext={next}
      onPrev={prev}
    />,
    <Step10CheckEmail
      onNext={next}
      onPrev={prev}
    />,
    <Step11OpenEmail
      link={link}
      onNext={next}
      onPrev={prev}
    />,
    <Step12ClickLink
      link={link}
      onNext={next}
      onPrev={prev}
    />,
    <Step13VerifyRequest
      link={link}
      onNext={next}
      onPrev={prev}
    />,
    <Step14LookupToken
      onNext={next}
      onPrev={prev}
    />,
    <Step15TokenRecord
      email={email}
      onNext={next}
      onPrev={prev}
    />,
    <Step16ValidateToken
      onNext={next}
      onPrev={prev}
    />,
    <Step17LoginComplete
      email={email}
      onNext={handleBack}
      onPrev={prev}
    />,
  ];

  return (
    <div className={styles['flow-root']}>
      <header className={styles['flow-header']}>
        <div></div>
        <div>
          <h1>Magic Link Login</h1>
          <p className={styles['flow-subtitle']}>
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

      {/* Magic Link フロー図 */}
      <MagicFlowSvg
        activeStep={step + 1}
        onStepClick={onStepSelect}
        interactive={interactive}
      />

      {screens[step]}

      <StepIndicator
        steps={STEP_LABELS}
        current={step}
      />
    </div>
  );
}
